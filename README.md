# Gerenciador de Listas de Tarefas

---

## O que é o projeto

É uma aplicação web full-stack para gerenciamento de listas de tarefas pessoais ou de equipe.

**Funcionalidades Principais:**
* Autenticação de usuários.
* Criação, visualização e exclusão de listas de tarefas.
* Adição, visualização, marcação (concluída/pendente) e exclusão de tarefas dentro das listas.
* Interface web responsiva com atualização dinâmica de dados.

---

## Backend (ServerPI)


---

## Banco de Dados (TaskDB)



---

## Frontend

Interface do usuário (SPA - Single Page Application) que consome a API do backend.

* **Tecnologias:**
    * React.js (com Hooks)
    * `axios` (Chamadas HTTP para API)
    * `react-router-dom` (Roteamento)
    * `local-storage` (Sessão do usuário)
    * CSS e Bootstrap (Estilização)
* **Estrutura Principal (`Frontend/src/`):**
    * `api/`: Configuração do `axios` e funções de chamada da API.
    * `componentes/`: Componentes reutilizáveis (cabeçalho, menu, modal)
    * `pages/`: Componentes de página (dashboard, visualização de lista).
* **Setup e Execução:**
    1.  **Pré-requisitos:** Node.js (16+), npm ou yarn.
    2.  **Instalar Dependências:** No diretório `Frontend/`, rode `npm install` (ou `yarn install`).
    3.  **Executar:** No diretório `Frontend/`, rode `npm start`.
    4.  **Acesso Aplicação:** http://localhost:3000/
    5.  **Conexão API:** Configurada em `Frontend/src/api/axios.js` para `https://localhost:7014/`.

---

## Como usar

1.  **Inicie os Serviços:**
    * Execute o Backend...
    * Execute o Frontend. (na pasta App.js abra um terminal e digite "npm start")
    * Certifique-se que o Banco de Dados (`TaskDB`) está acessível e configurado.
2.  **Acesse e Faça Login:**
    * Abra `http://localhost:3000/` no navegador.
    * Use as credenciais: .....
3.  **Gerencie Listas no Dashboard:**
    * Crie novas listas clicando em "nova lista".
    * Visualize e exclua listas existentes.
4.  **Gerencie Tarefas:**
    * Clique no nome de uma lista para ver suas tarefas.
    * Adicione, marque como concluída ou exclua tarefas.
5.  **Sair:**
    * Use a opção "Sair" no menu para encerrar a sessão.
