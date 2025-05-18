using System.ComponentModel.DataAnnotations.Schema;

namespace ServerPI.Aplication.ViewModels.Lista
{
    public class TarefaViewModel
    {

        public int FK_IdLista { get; set; }

        public string DescricaoTarefa { get; set; }

        public bool Completed { get; set; }

        public DateTime DataInclusao { get; set; }

    }

}
