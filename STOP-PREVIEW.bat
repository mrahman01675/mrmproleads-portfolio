@echo off
setlocal
set "PORT=8000"
for /f "tokens=5" %%P in ('netstat -ano ^| findstr /R /C:":%PORT% .*LISTENING"') do (
  taskkill /PID %%P /T /F >nul 2>&1
)
echo.
echo MRMProLeads local preview stopped.
pause
