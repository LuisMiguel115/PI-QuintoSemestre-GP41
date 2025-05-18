using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ServerPI.Domain.Model.Usuario
{
    [Table("Usuario")]
    public class Usuario
    {
        [Key]
        [Column("IdUsuario")]
        public int Id { get; private set; }

        [Column("NomeUsuario")]
        public string Nome { get; private set; }

        [Column("EmailUsuario")]
        public string Email { get; private set; }

        [Column("SenhaUsuario")]
        public string Senha { get; private set; }

        public Usuario(string nome, string email, string senha)
        {
            this.Nome = nome;
            this.Email = email;
            this.Senha = senha;
        }
    }

}
