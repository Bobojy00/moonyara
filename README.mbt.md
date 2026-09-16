# moonyara

<p align="center">
  <b>纯 MoonBit 实现的轻量级 YARA 恶意特征检测引擎</b><br>
  A lightweight, zero-dependency YARA-compatible malware signature scanner written in MoonBit.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Language-MoonBit-blue.svg" alt="MoonBit">
  <img src="https://img.shields.io/badge/License-Apache--2.0-green.svg" alt="License">
  <img src="https://img.shields.io/badge/Target-Native%20%7C%20Wasm-purple.svg" alt="Targets">
</p>

---

## 📖 项目简介

`moonyara` 是一个纯 MoonBit 实现的轻量级特征模式匹配与恶意代码静态检测引擎。它支持安全分析人员与开发者使用标准 YARA 规则语法，针对二进制文件、内存缓冲区及文本样本进行高速特征扫描。

得益于 MoonBit 优秀的编译性能与内存安全性，`moonyara` 既能以独立 CLI 工具形式快速排查本地威胁，也能作为轻量级安全组件编译至 WebAssembly 环境，无缝集成到浏览器沙箱或边缘计算节点中。

---

## 📐 系统架构与数据流

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
| **`types`** | 统一领域模型：定义规则、元数据、特征字符串类型（文本/Hex）、条件表达式树与扫描报告结构。 |
| **`lexer`** | 高效词法分析器：支持关键字、标识符、带转义字符串、十六进制通配块 `{ 4D 5A ?? 90 }` 分词。 |
| **`parser`** | 递归下降语法解析器：运用运算符优先级爬升算法，精准解析复杂的嵌套布尔表达式与规则定义。 |
| **`matcher`** | 字节级模式匹配引擎：基于 `(sample & mask) == target` 快速位运算处理 Hex 通配与大小写匹配。 |
| **`eval`** | 条件求值机：计算命中计数（`#a > 2`）、绝对/区间偏移（`$a at 0`、`$a in (0..1024)`）以及量词（`any of them`）。 |
| **`engine`** | 核心对外门面：统一串联规则编译流程与扫描管道。 |
| **`cmd/main`** | 原生 CLI 命令行工具：提供规则语法自检、文件扫描、文本汇总以及 JSON 格式化输出。 |

---

## ✨ 核心特性

- **零外部依赖**：纯 MoonBit 代码编写，无需任何 C 运行时绑定。
- **YARA 核心语法兼容**：
  - 元数据定义（`meta`）：支持字符串、整型及布尔型键值对。
  - 特征字符串定义（`strings`）：
    - 纯文本匹配：支持普通 ASCII 与 `nocase`（忽略大小写）修饰符。
    - 十六进制字节匹配：支持精确字节序列与字节通配符 `??`（如 `{ 4D 5A 90 00 ?? ?? FF }`）。
  - 表达式条件系统（`condition`）：
    - 逻辑操作符：`and`, `or`, `not`。
    - 算术与比较：`==`, `!=`, `<`, `<=`, `>`, `>=`。
    - 字符串状态与计数：`$a`, `#a >= 2`。
    - 偏移位置断言：`$a at 0`, `$a in (0..1024)`。
    - 集合量词：`any of them`, `all of them`。
    - 文件内置属性：`filesize` 过滤。
- **双端支持**：编译为原生可执行文件或 Wasm 模块。

---

## 🚀 快速开始

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

使用 CLI 扫描目标文件：

```bash
# 语法检查
moon run cmd/main -- check test_rule.yar

# 扫描指定文件
moon run cmd/main -- scan -r test_rule.yar target_sample.bin

# 以 JSON 格式输出结果
moon run cmd/main -- scan -r test_rule.yar target_sample.bin --json
```

---

## 💻 代码库嵌入示例

在你的 MoonBit 项目中直接引入 `moonyara` 作为库使用：

```moonbit
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

---

## 📁 目录结构

```
moonyara/
├── moon.mod               # 模块配置
├── moon.pkg               # 根包配置
├── LICENSE                # Apache-2.0 开源许可
├── README.md              # 项目文档与架构说明
├── cmd/
│   └── main/              # CLI 命令行程序入口
│       ├── main.mbt
│       └── moon.pkg
├── examples/              # 示例规则集与测试样本
│   ├── rules/
│   └── samples/
├── types.mbt              # 核心 AST 与领域数据类型
├── lexer.mbt              # 词法分析器
├── parser.mbt             # 递归下降语法解析器
├── matcher.mbt            # 字节掩码匹配引擎
├── eval.mbt               # 条件求值机
└── engine.mbt             # 顶层扫描引擎 API
```

---

## 📄 开源许可证

本项目采用 [Apache-2.0 License](LICENSE) 许可协议。
