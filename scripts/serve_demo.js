const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
const DEMO_DIR = path.resolve(__dirname, '../examples/wasm_demo');

// Ensure wasm.js exists
const wasmSrc = path.resolve(__dirname, '../_build/js/debug/build/wasm/wasm.js');
const wasmDst = path.join(DEMO_DIR, 'wasm.js');
if (!fs.existsSync(wasmDst) && fs.existsSync(wasmSrc)) {
  fs.copyFileSync(wasmSrc, wasmDst);
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.wasm': 'application/wasm',
  '.png': 'image/png',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  const safePath = path.normalize(reqPath).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(DEMO_DIR, safePath);

  if (!filePath.startsWith(DEMO_DIR)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found: ' + reqPath);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log('===============================================================');
  console.log('  moonyara - 浏览器端 WebAssembly 扫描演示');
  console.log('===============================================================');
  console.log(`  [+] 本地演示服务已启动: ${url}`);
  console.log('  [+] 本地运行，无需外部网络依赖');
  console.log('  [+] 支持 YARA 规则校验、样本匹配与十六进制 Hex 转储');
  console.log('  [+] 按 Ctrl+C 可停止本地服务');
  console.log('===============================================================');

  const openCmd = process.platform === 'win32' ? `start ${url}` :
                  process.platform === 'darwin' ? `open ${url}` : `xdg-open ${url}`;
  exec(openCmd, (err) => {
    if (err) {
      console.log(`  [*] 请在浏览器中手动访问: ${url}`);
    }
  });
});
