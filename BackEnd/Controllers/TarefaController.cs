using ServerPI.Domain.Model.Usuario;
using Microsoft.AspNetCore.Mvc;
using ServerPI.Aplication.ViewModels.Lista;
using ServerPI.Aplication.ViewModels.Tarefa;
using ServerPI.Domain.Model.Lista;
using ServerPI.Domain.Model.Tarefa;

namespace ServerPI.Controllers
{
    [ApiController]
    [Route("/Tarefa")]
    public class TarefaController : Controller
    {
        private readonly ITarefasInterface _tarefa;


        public TarefaController(ITarefasInterface tarefas)
        {
            _tarefa = tarefas ?? throw new ArgumentNullException(nameof(tarefas)); ;
        }

        //criar lista
        [HttpPost]
        public IActionResult Add([FromForm] TarefaViewModel tarefaViewModel)
        {
            try
            {

                var tarefa = new Tarefas(tarefaViewModel.FK_IdLista, tarefaViewModel.DescricaoTarefa, tarefaViewModel.Completed,tarefaViewModel.DataInclusao);

                    _tarefa.Add(tarefa);
                    return Ok(tarefa);


            }
            catch (Exception e)
            {
                return BadRequest(e);
            }


        }

        // Buscar tarefas
        [HttpGet]
        public IActionResult Get()
        {
            var tarefas = _tarefa.Get();
            return Ok(tarefas);
        }
        // Buscar tarefas de uma lista
        [HttpPost ("TarefaLista")]
        public IActionResult GetTarefaLista([FromForm] TarefaFKListasViewModel tarefaFKListasViewModel)
        {
            var tarefasLista = _tarefa.GetTarefaLista(tarefaFKListasViewModel.FK_IdLista);
            return Ok(tarefasLista);

        }
        // delete tarefas de uma lista
        [HttpDelete]
        public IActionResult deleteTarefaLista([FromForm] TarefaIDViewModel tarefaIDViewModel)
        {
            _tarefa.Remove(tarefaIDViewModel.IdTarefa);
            return Ok();

        }
    }
}
