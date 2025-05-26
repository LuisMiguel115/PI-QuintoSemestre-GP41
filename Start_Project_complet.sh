#!/bin/bash

# Nome da janela do terminal (apenas decorativo, não tem efeito em terminal comum)
echo "Iniciando PI-QuintoSemestre-GP41"

# Configuração de paths
BACKEND_PATH="./BackEnd"
FRONTEND_PATH="./FrontEnd"

# Verifica se a estrutura do backend está correta
if [ ! -f "$BACKEND_PATH/Program.cs" ]; then
    echo "ERRO: Estrutura do Backend não encontrada!"
    echo "Esperado encontrar: $BACKEND_PATH/Program.cs"
    echo
    echo "Pasta atual:"
    pwd
    echo
    ls -la
    echo
    echo "Verifique se:"
    echo "1. O script está na pasta PI-QuintoSemestre-GP41"
    echo "2. Existe a pasta BackEnd com o projeto C#"
    read -p "Pressione Enter para sair..."
    exit 1
fi

# Verifica se o frontend está presente
if [ ! -f "$FRONTEND_PATH/package.json" ]; then
    echo "ERRO: Pasta do Frontend não encontrada!"
    echo "Esperado encontrar: $FRONTEND_PATH/package.json"
    echo "Pasta atual:"
    pwd
    echo
    ls -la
    read -p "Pressione Enter para sair..."
    exit 1
fi

# Inicia o backend em nova aba do terminal (gnome-terminal, xterm, etc.)
echo "Iniciando Backend (API C#)..."
gnome-terminal -- bash -c "cd '$BACKEND_PATH'; dotnet run; exec bash" 2>/dev/null \
|| xterm -hold -e "cd '$BACKEND_PATH'; dotnet run" &

# Espera 10 segundos para o backend iniciars
echo "Aguardando inicialização do backend..."
sleep 10

# Frontend - instala dependências se necessário e roda
echo "Configurando Frontend..."
cd "$FRONTEND_PATH"

if [ ! -d "node_modules" ]; then
    echo "Instalando dependências do Frontend..."
    npm install
    if [ $? -ne 0 ]; then
        echo "Falha na instalação das dependências!"
        read -p "Pressione Enter para sair..."
        exit 1
    fi
fi

echo "Iniciando Frontend (Vite)..."
gnome-terminal -- bash -c "npm run dev; exec bash" 2>/dev/null \
|| xterm -hold -e "npm run dev" &

echo "-----------------------------------------------"
echo "Servidores iniciados com sucesso!"
echo "- Backend: http://localhost:7014"
echo "- Frontend: http://localhost:3000"
echo "-----------------------------------------------"
echo "Mantenha esta janela aberta enquanto trabalha."
read -p "Pressione Enter para continuar..."

