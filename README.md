# moonyara

<p align="center">
  <b>以 MoonBit 实现的轻量级 YARA 恶意特征检测引擎</b><br>
  A lightweight, zero-dependency YARA-compatible malware signature scanner written in MoonBit.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Language-MoonBit-blue.svg" alt="MoonBit">
  <img src="https://img.shields.io/badge/License-Apache--2.0-green.svg" alt="License">
  <img src="https://img.shields.io/badge/Target-Native%20%7C%20Wasm-purple.svg" alt="Targets">
</p>

---

## 项目简介

`moonyara` 是一个纯 MoonBit 实现的轻量级特征模式匹配与恶意代码静态检测引擎。它支持安全分析人员与开发者使用标准 YARA 规则语法，针对二进制文件、内存缓冲区及文本样本进行高速特征扫描。

得益于 MoonBit 优秀的编译性能与内存安全性，`moonyara` 既能以独立 CLI 工具形式快速排查本地威胁，也能作为轻量级安全组件编译至 WebAssembly 环境，无缝集成到浏览器沙箱或边缘计算节点中。

---

## 系统架构与数据流

`moonyara` 采用清晰的分层解耦设计，从规则输入到最终匹配报告的整体流程如下：

```
                    ┌────────────────────────┐
                    │      YARA 规则源码     │
                    │ (rule { meta strings}) │
                    └───────────┬────────────┘
                                │ Lexer (词法扫描)
                                ▼
                    ┌────────────────────────┐
                    │       Token 流         │
                    └───────────┬────────────┘
                                │ Parser (递归下降解析)
                                ▼
                    ┌────────────────────────┐
                    │     规则 AST 语法树    │
                    └───────────┬────────────┘
                                │ Engine 编译阶段
                                ▼
                    ┌────────────────────────┐
                    │    已编译规则引擎      │
                    └─────┬────────────┬─────┘
                          │            │
        待检字节流 (Bytes) │            │ 语法树条件求值
                          ▼            ▼
                 ┌─────────────────────────────┐
                 │     模式匹配器 (Matcher)    │
                 │   - 精确字符串 / 忽略大小写 │
                 │   - 十六进制字节掩码比对    │
                 │   - 命中偏移量(Offset) 记录 │
                 └─────────────┬───────────────┘
                               │
                               ▼
                 ┌─────────────────────────────┐
                 │        扫描匹配报告         │
                 │  - 命中的规则名与标签元数据 │
                 │  - 命中的特征标识与具体偏移 │
                 └─────────────────────────────┘
```

### 模块分工说明

| 模块 | 核心职责 |
| :--- | :--- |
| **`types`** | 统一领域模型：定义规则、元数据、特征字符串类型（文本/Hex/正则）、条件表达式树与扫描报告结构。 |
| **`lexer`** | 高效词法分析器：支持关键字、标识符、带转义字符串、十六进制通配块 `{ 4D 5A ?? 90 }` 与 `/regex/` 分词。 |
| **`parser`** | 递归下降语法解析器：运用运算符优先级爬升算法，解析嵌套布尔表达式、多规则与包含引用。 |
| **`regex`** | 纯 MoonBit Thompson NFA 正则引擎：支持 `\d`、`\w`、`\s`、字符集范围 `[a-z]`、量词 `* + ?`、分组分支 `(a|b)`，线性时间复杂度，避免 ReDoS。 |
| **`matcher`** | 模式匹配引擎：综合 Boyer-Moore-Horspool 文本跳跃、Hex 字节掩码位运算与 NFA 正则字节码扫描。 |
| **`eval`** | 条件求值机：计算命中计数（`#a > 2`）、绝对/区间偏移（`$a at 0`、`$a in (0..1024)`）、二进制内省（`uint8/16/32`）与量词。 |
| **`engine`** | 核心对外门面：统一串联规则编译流程、目录多规则合并与扫描管道。 |
| **`cmd/main`** | 原生 CLI 命令行工具：提供规则目录/文件语法自检、单文件与递归目录扫描及 JSON 结构化输出。 |

---

## 核心特性

- **零外部依赖**：纯 MoonBit 代码编写，无需任何 C 运行时绑定。
- **纯 MoonBit Thompson NFA 正则引擎**：
  - 支持 `/pattern/i` 字面量语法及 `nocase` 修饰符。
  - 支持常用字符类：`\d`（数字）、`\w`（单词字符）、`\s`（空白符）及其大写反向类。
  - 支持自定义区间与字符集：如 `[0-9a-fA-F]`、`[^0-9]` 等。
  - 支持量词 `*`、`+`、`?`，子模式分组 `(...)` 与分支选择 `|`。
  - 保证线性时间复杂度，避免 ReDoS（正则表达式拒绝服务）和调用栈溢出。
- **YARA 核心语法兼容**：
  - 元数据定义（`meta`）：支持字符串、整型及布尔型键值对。
  - 特征字符串定义（`strings`）：
    - 纯文本匹配：支持普通 ASCII 与 `nocase`（忽略大小写）修饰符。
    - 单字节 XOR 混淆匹配：支持 `xor` 及 `xor(min-max)` 修饰符（如 `xor(0x01-0xff)`），自动遍历单字节密钥空间（0x00-0xFF），识别 XOR 混淆后的 API 名称与特征字符串。
    - Base64 编码匹配：支持 `base64` 修饰符，根据 3 字节模数生成不同移位模式，跨越对齐边界匹配 Base64 编码字符串。
    - 十六进制字节匹配：支持精确字节序列与字节通配符 `??`（如 `{ 4D 5A 90 00 ?? ?? FF }`）。
    - 正则表达式匹配：`$re = /.../ [nocase]`。
  - 表达式条件系统（`condition`）：
    - 逻辑操作符：`and`, `or`, `not`。
    - 算术与比较：`==`, `!=`, `<`, `<=`, `>`, `>=`。
    - 字符串状态与计数：`$a`, `#a >= 2`。
    - 字符串首次偏移：`@a`。
    - 二进制内省原语：`uint8(offset)`, `uint16(offset)`, `uint16be(offset)`, `uint32(offset)`, `uint32be(offset)`，支持多层嵌套解引用。
    - 偏移位置断言：`$a at 0`, `$a in (0..1024)`。
    - 集合量词：`any of them`, `all of them`。
    - 文件内置属性：`filesize` 过滤。
- **规则标签过滤（Tag Filtering）**：支持规则多标签注解（如 `rule Trojan : trojan obfuscation`），CLI 命令行提供 `-t` / `--tag` 包含过滤与 `-e` / `--exclude-tag` 排除过滤，方便按需筛选执行规则。
- **Boyer-Moore-Horspool 算法**：针对长字符串预构建坏字符跳跃表，提升文本匹配效率。
- **规则目录与递归文件扫描**：支持 `-r <dir>` 加载规则目录，支持 `-R` / `--recursive` 递归遍历扫描整个目标目录，提供终端汇总与 JSON 格式报告。
- **双端支持与网页界面**：支持编译为原生命令行工具与 WebAssembly 模块；提供 `examples/wasm_demo/index.html` 网页扫描界面，支持 Hex Dump 十六进制转储与特征高亮，待检文件无需上传服务器。

---

## 功能演示 (Demo)

`moonyara` 提供了实机运行效果演示视频：

- **视频文件**：[`demo.mp4`](demo.mp4)
- **演示内容**：展示 YARA 规则语法解析、Thompson NFA 正则匹配（抗 ReDoS）、PE 文件头结构解析、单字节 XOR 与 Base64 编码检测、WebAssembly 本地扫描与 Hex 转储特征高亮，以及目录批量扫描。

---

## 快速开始

### 1. 安装与构建

确保已安装 [MoonBit 工具链](https://www.moonbitlang.cn/)：

```bash
# 克隆仓库
git clone https://github.com/Bobojy00/moonyara.git
cd moonyara

# 代码检查与构建
moon check
moon build
```

### 2. 运行测试用例

```bash
moon test
```

### 3. 命令行体验

你可以编写一个简单的规则文件 `test_rule.yar`：

```yara
rule Suspicious_Webshell {
    meta:
        description = "Detects simple PHP webshell signatures"
        author = "SecurityAnalyst"
        severity = "critical"
    strings:
        $tag = "<?php" nocase
        $eval_call = "eval("
        $b64 = "base64_decode"
    condition:
        $tag at 0 and ($eval_call or $b64)
}
```

使用 CLI 扫描目标文件或目录：

```bash
# 语法检查单个规则文件或整个规则目录
moon run cmd/main -- check test_rule.yar
moon run cmd/main -- check examples/rules/

# 扫描指定文件
moon run cmd/main -- scan -r test_rule.yar target_sample.bin

# 依据标签进行定向检测（仅执行带 webshell 标签的规则）
moon run cmd/main -- scan -r examples/rules/ examples/samples/ -t webshell

# 排除指定标签规则进行扫描
moon run cmd/main -- scan -r examples/rules/ examples/samples/ -e info

# 使用整个规则库目录递归扫描目标样本目录，并以 JSON 格式输出报文
moon run cmd/main -- scan -r examples/rules/ examples/samples/ -R --json
```

---

## 代码库嵌入示例

在你的 MoonBit 项目中直接引入 `moonyara` 作为库使用：

```moonbit nocheck
// 编译规则
let rule_src =
  #|rule Ransom_Note {
  #|    strings:
  #|        $note = "All your files have been encrypted" nocase
  #|        $btc = "bitcoin" nocase
  #|    condition:
  #|        $note and $btc
  #|}

let engine = @moonyara.compile(rule_src)

// 待扫描数据
let sample_bytes = @buffer.from_string("Warning: All your files have been encrypted! Send bitcoin...").to_bytes()

// 执行扫描
let report = engine.scan(sample_bytes)
for match_rule in report.matches {
  println("Matched rule: \{match_rule.rule_name}")
}
```

## WebAssembly 沙箱运行支持

`moonyara` 原生支持编译至 WebAssembly 并在浏览器、Node.js 或边缘沙箱中运行：

```bash
# 编译为 WebAssembly 目标产物
moon build --target wasm

# 或编译为独立 JS 模块
moon build --target js

# 运行 Node.js 沙箱演示
node examples/wasm_demo/run_demo.js
```

调用示例（JavaScript / WebAssembly 环境）：

```javascript
import * as scanner from './_build/js/debug/build/wasm/wasm.js';

const rule = `
rule Web_Attack {
    strings:
        $sql = "UNION SELECT" nocase
    condition:
        $sql
}
`;

// 规则语法自检
const count = scanner.check_rule_syntax(rule);

// 执行沙箱扫描并获取 JSON 报告
const resultJson = scanner.scan_text_to_json(rule, "GET /?id=1 UNION SELECT 1");
console.log(resultJson);
```

---

## 目录结构

```
moonyara/
├── .github/workflows/ci.yml # GitHub Actions 持续集成自动化工作流
├── moon.mod                 # 模块与依赖定义
├── moon.pkg                 # 核心库包配置
├── LICENSE                  # Apache-2.0 开源许可协议
├── README.md                # 完整技术架构与使用说明
├── demo.mp4                 # 演示视频
├── types.mbt                # 核心 AST 领域数据模型
├── lexer.mbt                # 词法分析器（支持通配 Hex 块与正则字面量）
├── parser.mbt               # 递归下降语法解析器（支持嵌套优先级与包含指令）
├── regex.mbt                # 纯 MoonBit Thompson NFA 正则引擎与字节码 VM
├── matcher.mbt              # 模式匹配器（BMH 跳跃表 / 字节掩码 / 正则匹配）
├── eval.mbt                 # 条件表达式求值机（二进制内省 / 偏移断言 / 集合量词）
├── engine.mbt               # 顶层扫描引擎 API 门面
├── cmd/main/                # 原生 CLI 命令行工具实现
├── wasm/                    # 零依赖 WebAssembly / JS 跨平台导出包
├── scripts/                 # 演示脚本与本地 HTTP 服务
└── examples/
    ├── rules/               # 常见威胁特征规则库（Webshell, 勒索信, PowerShell, C2 等）
    ├── samples/             # 配套测试样本库
    └── wasm_demo/           # 浏览器端与 Node.js WebAssembly 演示界面
```

---

## AI 辅助说明 (AI-Assisted Engineering Statement)

在 `moonyara` 项目中，我运用 Antigravity 作为辅助工具，进行部分功能代码的实现以及辅助进行代码调试：

- **核心算法与脚手架构建**：协助探索与搭建纯 MoonBit 原生实现的 Thompson NFA 状态机转移矩阵、Boyer-Moore-Horspool 坏字符跳跃表及 Base64 三模自适应移位模式生成器。
- **跨平台编译与沙箱集成调试**：针对 MoonBit 原生后端（Native CLI）与 WebAssembly 运行时环境进行编译管线适配调优，协助诊断多编译目标平台差异与边界条件。
- **对抗性安全测试用例集生成**：辅助构建覆盖通配掩码、多层嵌套布尔条件、单字节 XOR 混淆变体及极端恶意特征的自动化回归验证套件。

> **工程质量与自主把控**：
> 本项目中所有的系统领域架构设计、核心内存安全模型、YARA规范变量、AST下降解析算法求值及代码质量审查，均由个人进行全流程技术把控与严格形式化语义核验，并通过MoonBit严格静态类型系统与100%通过率自动化测试套件的逻辑核验。

---

## 开源许可证

本项目采用 [Apache-2.0 License](LICENSE) 许可协议。

