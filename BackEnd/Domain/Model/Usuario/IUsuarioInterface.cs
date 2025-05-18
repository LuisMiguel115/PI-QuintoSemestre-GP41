namespace ServerPI.Domain.Model.Usuario
{
    public interface IUsuarioInterface
    {
        //Adicionar um Usuario
        void Add(Usuario usuario);
        //Listar usuarios
        List<Usuario> Get();
        //Listar usuario por ID
        Usuario Get(int id);
        //Logar Usuario
        Usuario GetUsuarioByEmailAndSenha(string email, string senha);

    }
}
