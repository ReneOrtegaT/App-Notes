@ECHO OFF

REM Verifica si se necesita instalar Node.js
where node > nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    ECHO Node.js is not installed. Please install Node.js to run this application.
    EXIT /B 1
)

REM Instala las dependencias si no existen
IF NOT EXIST "node_modules" (
    ECHO Installing dependencies...
    npm install
)

REM Inicia el servidor backend
ECHO Starting the backend server...
node app.js  # Reemplaza "server.js" con el nombre del archivo que inicia tu servidor
