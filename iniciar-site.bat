@echo off
cd /d "%~dp0"
echo ============================================
echo  Prestige Eyes - http://localhost:3000
echo  Rede local: http://prestige-eyes.192.168.1.63.nip.io:3000
echo ============================================
call node_modules\.bin\next.cmd start -H 0.0.0.0 -p 3000
pause
