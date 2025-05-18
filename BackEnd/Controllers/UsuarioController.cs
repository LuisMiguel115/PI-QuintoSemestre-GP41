using ServerPI.Domain.Model.Usuario;
using Microsoft.AspNetCore.Mvc;
using ServerPI.Aplication.ViewModels.Usuario;

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
        [HttpPost]
        public IActionResult Add([FromForm] UsuarioViewModel usuarioViewModel)
        {

            var usuarioLogin = _usuario.GetUsuarioByEmailAndSenha(usuarioViewModel.Email, usuarioViewModel.Senha);

            if (usuarioLogin == null)
            {
                var usuario = new Usuario(usuarioViewModel.Nome, usuarioViewModel.Email, usuarioViewModel.Senha);
                _usuario.Add(usuario);
                return Ok(usuario);
            }
            else 
            {
                return BadRequest("Usario já existe!");
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
        [Route("/Getlogin")]
        public IActionResult Getlogin([FromForm]UsuarioLoginViewModel usuarioLoginViewModel)
        {
            var usuarioLogin = _usuario.GetUsuarioByEmailAndSenha(usuarioLoginViewModel.Email, usuarioLoginViewModel.Senha);

            if (usuarioLogin != null)
            {
                var usuario = usuarioLogin;
                return Ok(usuario);

            }
            else
            {
                return BadRequest("Usario ou senha incorreto!");
            
            }
        }

    }
}
