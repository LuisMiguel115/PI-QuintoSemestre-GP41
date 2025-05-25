using ServerPI.Domain.Model.Usuario;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using ServerPI.Aplication.ViewModels.Lista;
using ServerPI.Aplication.ViewModels.Usuario;
using ServerPI.Domain.Model.Lista;
using ServerPI.Domain.Model.Tarefa;

namespace ServerPI.Controllers
{
    [ApiController]
    [Route("/Lista")]
    public class ListaController : Controller
    {
        private readonly IListaInterface _lista;
        private readonly ITarefasInterface _tarefa;

        public ListaController(IListaInterface lista, ITarefasInterface tarefa)
        {
            _lista = lista ?? throw new ArgumentNullException(nameof(lista)); 
            _tarefa = tarefa ?? throw new ArgumentNullException(nameof(tarefa)); 
        }


        //criar lista
        [HttpPost("/criarLista")]
        public IActionResult Add([FromBody] ListaViewModel listaViewModel)
        {
            try
            {
                var listaExistente = _lista.getListaNome(listaViewModel.NomeLista);
                if (listaExistente == null)
                {
                    var lista = new Lista(listaViewModel.NomeLista, listaViewModel.DataInclusao, listaViewModel.FK_UsuarioCriador);

                    _lista.Add(lista);
                    return Ok(lista);
                }
                else
                {
                    return BadRequest("Nome da lista já utulizado!");
                }

            }
            catch (Exception e)
            {
                return BadRequest(e);
            }


        }

        // Buscar usuarios
        [HttpGet]
        public IActionResult Get()
        {
            var Usuario = _lista.Get();
            return Ok(Usuario);

        }

        [HttpDelete("/deleteLista/{idLista}")]  
        public IActionResult DeleteLista(int idLista)  
        {
            _tarefa.RemoveTarefasLista(idLista);
            _lista.Remove(idLista);
            return Ok();
        }
    }
}
