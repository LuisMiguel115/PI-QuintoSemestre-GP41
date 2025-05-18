IF EXISTS (SELECT name FROM sys.databases WHERE name = 'TaskDB')
BEGIN
    DROP DATABASE TaskDB;
END

CREATE DATABASE TaskDB;

use TaskDB
CREATE TABLE Usuario (
    IdUsuario INT PRIMARY KEY IDENTITY(1,1),
    NomeUsuario NVARCHAR(100) NOT NULL,
    EmailUsuario NVARCHAR(150) NOT NULL,
    SenhaUsuario NVARCHAR(255) NOT NULL
);


insert into Usuario values('admin','admin@admin.com','admin');


CREATE TABLE ListaTarefa (
    IdLista int PRIMARY KEY IDENTITY(1,1),
    NameLista NVARCHAR(100) NOT NULL,
    DataInclusao DATETIME2 NOT NULL,
    FK_UsuarioCriador int NOT NULL,

    CONSTRAINT FK_ListaTarefa_Usuario FOREIGN KEY (FK_UsuarioCriador) REFERENCES Usuario(IdUsuario)
);

-- Tabela de tarefas
CREATE TABLE Tarefas (
    IdTarefa Int PRIMARY KEY IDENTITY(1,1), 
    FK_IdLista int NOT NULL,
    DescricaoTarefa NVARCHAR(255) NOT NULL,
    Completed BIT NOT NULL,
    DataInclusao DATETIME2 NOT NULL,
    CONSTRAINT FK_Tasks_TaskLists FOREIGN KEY (Fk_IdLista) REFERENCES ListaTarefa(IdLista),
);

