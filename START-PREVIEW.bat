@echo off
setlocal EnableExtensions
cd /d "%~dp0"
set "PORT=8000"
set "URL=http://127.0.0.1:%PORT%/research-starter/"

echo.
echo ================================================
echo   MRMProLeads Local Preview - V5.4.2
echo ================================================
echo.

REM Check whether port 8000 is already in use.
netstat -ano | findstr /R /C:":%PORT% .*LISTENING" >nul 2>&1
if %errorlevel%==0 (
  echo Port %PORT% is already in use.
  echo Opening the existing local server instead of starting another one.
  start "" "%URL%"
  echo.
  echo If this is an old MRMProLeads preview, close that server first
  echo and run START-PREVIEW.bat again.
  pause
  exit /b 0
)

REM Prefer the Windows Python launcher, then fall back to python.exe.
where py >nul 2>&1
if %errorlevel%==0 goto START_PY
where python >nul 2>&1
if %errorlevel%==0 goto START_PYTHON

echo ERROR: Python was not found on this PC.
echo.
echo Install Python from python.org and enable "Add Python to PATH",
echo or tell me and I will give you a Node-based one-click preview instead.
echo.
pause
exit /b 1

:START_PY
start "MRMProLeads Local Preview" /min cmd /c "cd /d "%~dp0" && py -3 -m http.server %PORT%"
goto OPEN

:START_PYTHON
start "MRMProLeads Local Preview" /min cmd /c "cd /d "%~dp0" && python -m http.server %PORT%"

goto OPEN

:OPEN
set /a WAIT=0
:WAIT_LOOP
powershell -NoProfile -Command "try { $r=Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:%PORT%/' -TimeoutSec 1; exit 0 } catch { exit 1 }" >nul 2>&1
if %errorlevel%==0 goto READY
set /a WAIT+=1
if %WAIT% GEQ 10 goto OPEN_ANYWAY
timeout /t 1 /nobreak >nul
goto WAIT_LOOP

:READY
start "" "%URL%"
echo.
echo Preview is running at %URL%
echo Close it with STOP-PREVIEW.bat
exit /b 0

:OPEN_ANYWAY
start "" "%URL%"
echo.
echo The server did not respond within 10 seconds.
echo Check the minimized "MRMProLeads Local Preview" window for an error.
pause
exit /b 1
