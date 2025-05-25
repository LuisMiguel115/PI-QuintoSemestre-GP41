namespace ServerPI.Domain.Model.Tarefa
{
    public interface ITarefasInterface
    {
        void Add(Tarefas tarefa);

        List<Tarefas> Get();

        Tarefas Getbyid(int id);

        List<Tarefas> GetTarefaLista(int FKIdLista);

        void RemoveTarefasLista(int FkLista);

        void Remove(int ID);
        void Update(Tarefas tarefa);

    }
}
