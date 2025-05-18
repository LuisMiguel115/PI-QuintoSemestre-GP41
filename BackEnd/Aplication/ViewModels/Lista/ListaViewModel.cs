using System.ComponentModel.DataAnnotations.Schema;

namespace ServerPI.Aplication.ViewModels.Lista
{
    public class ListaViewModel
    {
        public string NomeLista { get; set; }

        public DateTime DataInclusao { get; set; }
            
        public int FK_UsuarioCriador { get; set; }

    }

}
