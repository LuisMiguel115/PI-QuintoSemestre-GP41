using ServerPI.Domain.Model.Usuario;
using ServerPI.Domain.Data;

namespace ServerPI.Aplication.Repositories
{
    public class UsuarioRepository : IUsuarioInterface
    {
        private readonly ConnectionContext _connect = new();

        public void Add(Usuario usuario)
        {
            _connect.Add(usuario);
            _connect.SaveChanges();
        }

        public List<Usuario> Get()
        {
                return _connect.Usuarios.ToList();
            
        }

        public Usuario Get(int id)
        {
            return _connect.Usuarios.Find(id);
        }

        public Usuario GetUsuaioByEmail(string email)
        {
            return _connect.Usuarios.FirstOrDefault(u => u.Email == email);
        }

        public Usuario GetUsuarioByEmailAndSenha(string email, string senha)
        {
            return _connect.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }
    }
}
