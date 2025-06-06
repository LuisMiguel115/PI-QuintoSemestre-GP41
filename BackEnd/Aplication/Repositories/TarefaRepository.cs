﻿using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using ServerPI.Domain.Data;
using ServerPI.Domain.Model.Lista;
using ServerPI.Domain.Model.Tarefa;

namespace ServerPI.Aplication.Repositories
{
    public class TarefaRepository : ITarefasInterface
    {
        private readonly ConnectionContext _connect = new();

        public void Add(Tarefas tarefa)
        {
            _connect.Add(tarefa);
            _connect.SaveChanges();
        }

        public List<Tarefas> Get()
        {
            return _connect.Tarefas.ToList();
        }

        public Tarefas Getbyid(int id)
        {
            return _connect.Tarefas.Find(id);
        }

        public List<Tarefas> GetTarefaLista(int FKIdLista)
        {
            return _connect.Tarefas.Where(query => query.FK_IdLista == FKIdLista).ToList();
        }

        public void Remove(int ID)
        {
            Tarefas tarefa = _connect.Tarefas.Find(ID);
            _connect.Remove(tarefa);
            _connect.SaveChanges();
        }

        public void RemoveTarefasLista(int FkLista)
        {
            List<Tarefas> tarefa = GetTarefaLista(FkLista);
            _connect.RemoveRange(tarefa);
            _connect.SaveChanges();
        }

        public void Update(Tarefas tarefa)
        {     
                var existingTarefa = _connect.Tarefas.Find(tarefa.IdTarefa);
                if (existingTarefa == null)
                {
                    throw new ArgumentException("Tarefa não encontrada");
                }


                _connect.Entry(existingTarefa).CurrentValues.SetValues(tarefa);


                _connect.SaveChanges();
            
        }
    }
}
