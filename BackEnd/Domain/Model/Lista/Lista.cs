using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using ServerPI.Aplication.ViewModels.Lista;

namespace ServerPI.Domain.Model.Lista
{
    [Table("ListaTarefa")]
    public class Lista
    {
        public Lista(string nomeLista, DateTime dataInclusao, int fK_UsuarioCriador)
        {
            NomeLista = nomeLista;
            DataInclusao = dataInclusao;
            FK_UsuarioCriador = fK_UsuarioCriador;
        }

        [Key]
        [Column("IdLista")]
        public int? Id { get; private set; }

        [Column("NameLista")]
        public string NomeLista { get; private set; }

        [Column("DataInclusao")]
        public DateTime DataInclusao { get; private set; }

        [Column("FK_UsuarioCriador")]
        public int FK_UsuarioCriador { get; private set; }


    }
}