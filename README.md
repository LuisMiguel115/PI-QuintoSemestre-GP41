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

O backend da aplicação foi desenvolvido em **C# com ASP.NET Core**, utilizando o **Entity Framework Core** como ORM para facilitar o mapeamento objeto-relacional.

**Principais características:**

- Arquitetura em camadas, com separação de responsabilidades:
  - **Model**: Representações das entidades do domínio.
  - **ViewModel**: Objetos para troca de dados com o frontend (DTOs).
  - **Controller**: Gerencia as requisições HTTP e a lógica de controle.
  - **Repository**: Abstração do acesso a dados.
  - **Domain**: Regras de negócio e interfaces de contratos.

- API RESTful organizada por recursos (usuários, listas, tarefas).
- Validação de dados e tratamento de erros.
- Suporte a CORS para integração com o frontend.
---

## Banco de Dados (TaskDB)

A aplicação utiliza **SQL Server** como sistema gerenciador de banco de dados relacional.

**Informações técnicas:**

- O script de criação do banco está disponível em: `Database/DML.sql`
- Estrutura relacional composta por:
  - `Users` (usuários)
  - `TaskLists` (listas de tarefas)
  - `Tasks` (tarefas)

- Chaves estrangeiras definem os relacionamentos entre as tabelas.
- Integridade referencial garantida por constraints.
- A string de conexão deve ser ajustada em: `BackEnd/appsettings.json`

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
    4.  **Conexão API:** Configurada em `Frontend/src/api/axios.js` para `https://localhost:7014/`.

---

## Como usar

1.  **Crie o banco de dados:**
    * certifique-se que o sqlServer está configurado corretamente
    * Execute o schema do banco de dados encontrado em (Database/DML.sql)
      
1.  **Inicie os Serviços:**
    * Ajuste a string de conexão de banco de dados (BackEnd/appsettings.json)
    ![image](https://github.com/user-attachments/assets/c2502b94-2ea9-4acf-8c16-3cc58508797b)
    * Execute o .bat. (Start_Project_Complet.bat)
    * aguarde a execução dos comando de incialização
      
3.  **Acesse e Faça Login:**
    * Abra o link informado no cmd no navegador.
     ![image](https://github.com/user-attachments/assets/58e8cce2-cb41-4197-930d-412d4be0442c)
    * Registre-se ou faça login caso já tenha conta
4.  **Gerencie Listas no Dashboard:**
    * Crie novas listas clicando em "nova lista".
    * Visualize e exclua listas existentes.
5.  **Gerencie Tarefas:**
    * Clique no nome de uma lista para ver suas tarefas.
    * Adicione, marque como concluída ou exclua tarefas.
6.  **Sair:**
    * Use a opção "Sair" no menu para encerrar a sessão.
