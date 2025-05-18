using ServerPI.Domain.Model.Usuario;
using Microsoft.EntityFrameworkCore;
using ServerPI.Domain.Model.Lista;
using ServerPI.Domain.Model.Tarefa;
using System;
using System.Collections.Generic;

namespace ServerPI.Domain.Data
{
    public class ConnectionContext : DbContext
    {

        public DbSet<Usuario> Usuarios => Set<Usuario>();
        public DbSet<Lista> Listas => Set<Lista>();
        public DbSet<Tarefas> Tarefas => Set<Tarefas>();

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) => 
            optionsBuilder.
                UseSqlServer("Server=DESKTOP-ASNSL0J;Database=TaskDB;Integrated Security=SSPI;Trusted_Connection=True;TrustServerCertificate=True;");
    }
}
