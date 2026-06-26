@echo off
REM BuildMart WhatsApp Bot - Quick Start Script for Windows

echo ===============================================
echo  BuildMart WhatsApp Bot - Quick Start
echo ===============================================
echo.

echo Step 1: Installing dependencies...
call npm install
if %ERRORLEVEL% neq 0 (
    echo Error: npm install failed. Make sure Node.js is installed.
    pause
    exit /b 1
)

echo.
echo Step 2: Setting up Twilio credentials...
echo.
set /p ACCOUNT_SID="Enter your Twilio Account SID: "
set /p AUTH_TOKEN="Enter your Twilio Auth Token: "
set /p TWILIO_NUMBER="Enter your Twilio WhatsApp Number (e.g., whatsapp:+14155238886): "

echo.
echo Step 3: Starting WhatsApp Bot Server...
echo.
echo Setting environment variables...
set TWILIO_ACCOUNT_SID=%ACCOUNT_SID%
set TWILIO_AUTH_TOKEN=%AUTH_TOKEN%
set TWILIO_PHONE_NUMBER=%TWILIO_NUMBER%

echo.
echo ===============================================
echo  ✅ Bot Server Starting...
echo ===============================================
echo.
echo Remember to:
echo 1. Open ngrok: ngrok http 3000
echo 2. Update Twilio webhook with ngrok URL
echo 3. Update phone number in construction.html
echo.

call npm start

pause
