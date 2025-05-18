using ServerPI.Domain.Data;
using ServerPI.Domain.Model.Lista;
using ServerPI.Domain.Model.Tarefa;

namespace ServerPI.Aplication.Repositories
{
    public class ListaRepository : IListaInterface
    {
        private readonly ConnectionContext _connect = new();

        public void Add(Lista lista)
        {
            _connect.Add(lista);
            _connect.SaveChanges();
        }

        public List<Lista> Get()
        {
            return _connect.Listas.ToList();
        }

        public Lista getListaNome(string nomeLista)
        {
            return _connect.Listas.FirstOrDefault(query => query.NomeLista == nomeLista); 

        }

        public void Remove(int ID)
        {
           var lista = _connect.Listas.Find(ID);
            _connect.Remove(lista);
            _connect.SaveChanges();
        }
    }
}
