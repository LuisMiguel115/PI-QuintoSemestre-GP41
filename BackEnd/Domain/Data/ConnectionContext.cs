using ServerPI.Domain.Model.Usuario;
using Microsoft.EntityFrameworkCore;
using ServerPI.Domain.Model.Lista;
using ServerPI.Domain.Model.Tarefa;
using System;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;

namespace ServerPI.Domain.Data
{
    public class ConnectionContext : DbContext
    {

        public DbSet<Usuario> Usuarios => Set<Usuario>();
        public DbSet<Lista> Listas => Set<Lista>();
        public DbSet<Tarefas> Tarefas => Set<Tarefas>();

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                IConfigurationRoot configuration = new ConfigurationBuilder()
                    .SetBasePath(Directory.GetCurrentDirectory())
                    .AddJsonFile("appsettings.json")
                    .Build();

                optionsBuilder.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
            }
        }
    }
}
