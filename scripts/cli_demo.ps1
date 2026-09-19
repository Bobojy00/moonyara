# moonyara 终端实战演示启动脚本
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
node "$scriptDir/cli_demo.js"
