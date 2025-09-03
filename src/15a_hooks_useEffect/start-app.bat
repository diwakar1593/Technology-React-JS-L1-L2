@echo off
echo ======================================
echo 🚀 Starting JSON Server and React App
echo ======================================

:: Start JSON Server in a new window
start cmd /k "cd /d C:\React Training\React JS\src\15a_hooks_useEffect && npx json-server --watch db.json --port 3001"

:: Start React App in another window
start cmd /k "cd /d C:\React Training\React JS && npm start"

echo ✅ Both servers started!
pause
