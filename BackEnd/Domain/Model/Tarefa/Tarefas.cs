using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ServerPI.Domain.Model.Tarefa
{
    public class Tarefas
    {
        public Tarefas(int fK_IdLista, string descricaoTarefa, bool completed, DateTime dataInclusao)
        {
            FK_IdLista = fK_IdLista;
            DescricaoTarefa = descricaoTarefa;
            DataInclusao = dataInclusao;
            Completed = completed;
        }

        [Key]
        [Column("IdTarefa")]
        public int? IdTarefa { get; private set; }

        [Column("FK_IdLista")]
        public int FK_IdLista { get; private set; }

        [Column("DescricaoTarefa")]
        public string DescricaoTarefa { get; private set; }

        [Column("Completed")]
        public bool Completed { get; private set; }

        [Column("DataInclusao")]
        public DateTime DataInclusao { get; private set; }

        public void UpdateCompletedStatus(bool completed)
        {
            Completed = completed;
        }
    }
}
