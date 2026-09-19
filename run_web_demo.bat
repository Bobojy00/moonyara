@echo off
chcp 65001 >nul
echo ===============================================================
echo   正在启动 moonyara WebAssembly 安全特征扫描工作台...
echo ===============================================================
echo 检查 Node.js 运行环境...
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [!] 错误: 未检测到 Node.js，请先安装 Node.js 以启动本地演示服务。
    pause
    exit /b 1
)

echo 启动本地演示服务并在默认浏览器中打开工作台...
node "%~dp0scripts\serve_demo.js"
pause
