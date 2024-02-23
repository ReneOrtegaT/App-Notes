@ECHO OFF

REM Verifica si se necesita instalar Node.js
where node > nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    ECHO Node.js is not installed. Please install Node.js to run this application.
    EXIT /B 1
)

REM Verifica si se necesitan instalar las dependencias
IF NOT EXIST "node_modules" (
    ECHO Installing dependencies...
    npm install
)

REM Configura la base de datos (si es necesario)
REM Ejemplo: psql -U username -d dbname -f setup.sql

REM Inicia la aplicación
ECHO Starting the application...
npm start