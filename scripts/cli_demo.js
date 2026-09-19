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

printHeader('moonyara - 命令行扫描功能演示');
console.log(colors.white + '说明: 纯 MoonBit 实现的轻量级 YARA 特征匹配引擎');
console.log('支持: NFA 正则匹配 | BMH 算法 | 单字节 XOR 搜索 | Base64 移位匹配 | 原生/Wasm 双端' + colors.reset);

// 场景 1: 规则自检
printStep(1, 'YARA 规则库语法检查', '检查规则语法、元数据与条件表达式解析');
runCmd('moon run cmd/main -- check examples/rules/');
sleep(600);

// 场景 2: Webshell 检出
printStep(2, 'Webshell 样本检测 (PHP)', '匹配多重特征与函数签名');
runCmd('moon run cmd/main -- scan -r examples/rules/webshell_detect.yar examples/samples/suspicious_webshell.php');
sleep(600);

// 场景 3: XOR 单字节混淆
printStep(3, '单字节 XOR 混淆特征匹配', '遍历 0x01-0xFF 密钥空间识别混淆特征');
runCmd('moon run cmd/main -- scan -r examples/rules/xor_obfuscated_payload.yar examples/samples/xor_encoded_stager.bin');
sleep(600);

// 场景 4: Base64 编码匹配
printStep(4, 'Base64 编码特征匹配', '根据模数生成移位模式匹配 Base64 字符串');
runCmd('moon run cmd/main -- scan -r examples/rules/base64_dropper.yar examples/samples/base64_dropper.ps1');
sleep(600);

// 场景 5: 标签过滤
printStep(5, '规则标签过滤 (-t / -e)', '按 tag 包含或排除指定规则');
console.log(colors.gray + '# [5.1] 包含指定标签: 仅执行 webshell 规则' + colors.reset);
runCmd('moon run cmd/main -- scan -r examples/rules/ examples/samples/suspicious_webshell.php -t webshell');

console.log('\n' + colors.gray + '# [5.2] 排除指定标签: 排除 webshell 规则 (无匹配)' + colors.reset);
runCmd('moon run cmd/main -- scan -r examples/rules/ examples/samples/suspicious_webshell.php -e webshell');
sleep(600);

// 场景 6: 批量扫描与 JSON 输出
printStep(6, '目录递归扫描与 JSON 输出', '递归扫描目录并输出结构化结果');
runCmd('moon run cmd/main -- scan -r examples/rules/ examples/samples/ -R');

console.log('\n' + colors.gray + '# JSON 格式输出示例:' + colors.reset);
runCmd('moon run cmd/main -- scan -r examples/rules/xor_obfuscated_payload.yar examples/samples/xor_encoded_stager.bin --json');

printHeader('演示完成');
console.log(colors.cyan + '提示: 可运行 node scripts/serve_demo.js 启动浏览器 WebAssembly 界面。\n' + colors.reset);
