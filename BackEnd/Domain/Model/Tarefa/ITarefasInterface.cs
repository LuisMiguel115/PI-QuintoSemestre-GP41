namespace ServerPI.Domain.Model.Tarefa
{
    public interface ITarefasInterface
    {
        void Add(Tarefas tarefa);

        List<Tarefas> Get();

        List<Tarefas> GetTarefaLista(int FKIdLista);

        void RemoveTarefasLista(int FkLista);

        void Remove(int ID);
    }
}
