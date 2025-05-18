namespace ServerPI.Domain.Model.Lista
{
    public interface IListaInterface
    {
        void Add(Lista lista);

        List<Lista> Get();

        Lista getListaNome(string nomeLista);

        void Remove(int ID);
    }
}
