using ServerPI.Domain.Model.Usuario;
using Microsoft.AspNetCore.Mvc;
using ServerPI.Aplication.ViewModels.Usuario;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace CatalogoFilmesApi.Controllers
{
    [ApiController]
    [Route("/usuario")]
    public class UsuarioController : Controller
    {
        private readonly IUsuarioInterface _usuario;

        // Construtor
        public UsuarioController(IUsuarioInterface usuario)
        {
            _usuario = usuario ?? throw new ArgumentNullException(nameof(usuario)); ;
        }

        //criar usuario
        [HttpPost("/cadastrarUsuario")]
        public IActionResult Add([FromBody] UsuarioViewModel usuarioViewModel)
        {

            var usuarioLogin = _usuario.GetUsuaioByEmail(usuarioViewModel.Email);

            if (usuarioLogin == null)
            {
                var usuario = new Usuario(usuarioViewModel.Nome, usuarioViewModel.Email, usuarioViewModel.Senha);
                _usuario.Add(usuario);
                return Ok(new
                {
                    success = true,
                    message = "Usuario Cadastrado",
                    usuario
                });
            }
            else 
            {
                return BadRequest(new
                {
                    success = false,
                    message = "E-mail Já cadastrado, por favor tente novamente com outro e-mail"
                });
            }
           

        }

        // Buscar usuarios
        [HttpGet]
        public IActionResult Get()
        {
            
        var Usuario = _usuario.Get();
            return Ok(Usuario);

        }

        // Buscar usuarios login
        [HttpPost]
        [Route("/getLogin")]
        public IActionResult Getlogin([FromBody] UsuarioLoginViewModel usuarioLoginViewModel)
        {
            var usuarioLogin = _usuario.GetUsuarioByEmailAndSenha(usuarioLoginViewModel.Email, usuarioLoginViewModel.Senha);

            if (usuarioLogin != null)
            {
                var usuario = usuarioLogin;
                return Ok(usuario);

            }
           return BadRequest(new
            {
                success = false,
                message = "Email ou senha incorretos"
            });
        }

    }
}
