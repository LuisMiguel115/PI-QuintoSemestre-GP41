@echo off
title Iniciando PI-QuintoSemestre-GP41

:: Configuração de paths - ajustado para sua estrutura exata
set BACKEND_PATH=.\BackEnd
set FRONTEND_PATH=.\FrontEnd

:: Verifica se está sendo executado do local correto
if not exist "%BACKEND_PATH%\Program.cs" (
    echo ERRO: Estrutura do Backend não encontrada!
    echo Esperado encontrar: %BACKEND_PATH%\ServerPI\Program.cs
    echo 
    echo Pasta atual:
    cd
    echo.
    dir
    echo.
    echo Verifique se:
    echo 1. O arquivo .bat está na pasta PI-QuintoSemestre-GP41
    echo 2. Existe a pasta BackEnd\ServerPI com o projeto C#
    pause
    exit /b 1
)

if not exist "%FRONTEND_PATH%\package.json" (
    echo ERRO: Pasta do Frontend não encontrada!
    echo Esperado encontrar: %FRONTEND_PATH%\package.json
    echo Pasta atual:
    cd
    echo.
    dir
    pause
    exit /b 1
)

:: Inicia o backend (API C#)
echo Iniciando Backend (API C#)...
start "Backend API" cmd /k "cd /d %BACKEND_PATH%\ && dotnet run"

:: Espera 10 segundos para o backend iniciar
timeout /t 10 /nobreak >nul

:: Frontend - instala dependências se necessário e roda
echo Configurando Frontend...
cd /d %FRONTEND_PATH%
if not exist "node_modules" (
    echo Instalando dependências do Frontend...
    npm install
    if errorlevel 1 (
        echo Falha na instalação das dependências!
        pause
        exit /b 1
    )
)

echo Iniciando Frontend (Vite)...
start "Frontend Vite" cmd /k "npm run dev"

echo -----------------------------------------------
echo Servidores iniciados com sucesso!
echo - Backend: http://localhost:7014
echo - Frontend: http://localhost:3000
echo -----------------------------------------------
echo Mantenha estas janelas abertas enquanto trabalha.
pause