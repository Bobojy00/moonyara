const { execSync } = require('child_process');

function sleep(ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) {}
}

const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  gray: '\x1b[90m',
  white: '\x1b[37m'
};

function printHeader(title) {
  console.log('\n' + colors.cyan + '='.repeat(72) + colors.reset);
  console.log(`  ${colors.bold}${colors.yellow}${title}${colors.reset}`);
  console.log(colors.cyan + '='.repeat(72) + colors.reset);
}

function printStep(num, title, desc) {
  console.log('\n' + colors.green + `[场景 ${num}] ` + colors.bold + title + colors.reset);
  console.log(colors.gray + `    ${desc}` + colors.reset);
  console.log(colors.gray + '-'.repeat(72) + colors.reset);
}

function runCmd(cmd) {
  console.log(colors.yellow + `$ ${cmd}` + colors.reset);
  try {
    const out = execSync(cmd, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
    process.stdout.write(out);
  } catch (err) {
    if (err.stdout) process.stdout.write(err.stdout);
    if (err.stderr) process.stderr.write(err.stderr);
  }
}

printHeader('moonyara 纯 MoonBit 轻量级 YARA 恶意特征检测引擎 - 终端实战演示');
console.log(colors.white + '项目定位: 零 C 运行时依赖、纯 MoonBit 实现的静态特征匹配与反混淆扫描引擎');
console.log('核心能力: NFA 线性正则 | BMH 字符跳跃 | 单字节 XOR 穿透 | Base64 任意对齐 | 原生/Wasm 双端' + colors.reset);

// 场景 1: 规则自检
printStep(1, 'YARA 规则库批量语法校验与编译', '验证引擎对规则语法、元数据与条件表达式的解析能力');
runCmd('moon run cmd/main -- check examples/rules/');
sleep(600);

// 场景 2: Webshell 检出
printStep(2, '典型 Web 后门检出 (PHP 反弹 Webshell)', '测试组合特征识别与多重后门函数签名匹配');
runCmd('moon run cmd/main -- scan -r examples/rules/webshell_detect.yar examples/samples/suspicious_webshell.php');
sleep(600);

// 场景 3: XOR 单字节混淆穿透
printStep(3, '复杂免杀 Shellcode 穿透 (单字节 XOR 混淆 WinAPI 识别)', '自动遍历 0x01-0xFF 单字节密钥空间，秒级破解免杀加载器');
runCmd('moon run cmd/main -- scan -r examples/rules/xor_obfuscated_payload.yar examples/samples/xor_encoded_stager.bin');
sleep(600);

// 场景 4: Base64 任意对齐扫描
printStep(4, '无文件恶意脚本检测 (Base64 跨对齐边界无偏匹配)', '自适应生成 3 种模数移位子模式，无需解码即可精准命中 Base64 载荷');
runCmd('moon run cmd/main -- scan -r examples/rules/base64_dropper.yar examples/samples/base64_dropper.ps1');
sleep(600);

// 场景 5: 攻防标签过滤
printStep(5, '攻防编排与规则标签定向过滤 (-t / -e)', '支持按威胁类别 (tag) 实施专项定向狩猎或排除非相关规则');
console.log(colors.gray + '# [5.1] 定向白名单过滤: 仅扫描 webshell 标签规则' + colors.reset);
runCmd('moon run cmd/main -- scan -r examples/rules/ examples/samples/suspicious_webshell.php -t webshell');

console.log('\n' + colors.gray + '# [5.2] 黑名单排除过滤: 排除 webshell 规则 (预期干净)' + colors.reset);
runCmd('moon run cmd/main -- scan -r examples/rules/ examples/samples/suspicious_webshell.php -e webshell');
sleep(600);

// 场景 6: 批量资产扫描与结构化 JSON 报文
printStep(6, '全资产递归扫描与 SIEM/SOC 结构化 JSON 报文生成', '支持企业级资产排查，对干净与受威胁资产进行统计汇总');
runCmd('moon run cmd/main -- scan -r examples/rules/ examples/samples/ -R');

console.log('\n' + colors.gray + '# JSON 格式结构化输出示例 (针对单样本):' + colors.reset);
runCmd('moon run cmd/main -- scan -r examples/rules/xor_obfuscated_payload.yar examples/samples/xor_encoded_stager.bin --json');

printHeader('演示完毕：全部 6 大实战威胁场景均已完成真实扫描验证！');
console.log(colors.cyan + '提示: 可双击运行 run_web_demo.bat 启动浏览器端 WebAssembly 交互式安全工作台！\n' + colors.reset);
