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
        [HttpPost("/criarTarefa")]
        public IActionResult Add([FromBody] TarefaViewModel tarefaViewModel)
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
        [HttpPost ("/tarefaLista")]
        public IActionResult GetTarefaLista([FromBody] TarefaFKListasViewModel tarefaFKListasViewModel)
        {
            var tarefasLista = _tarefa.GetTarefaLista(tarefaFKListasViewModel.FK_IdLista);
            return Ok(tarefasLista);

         }
        // delete tarefas de uma lista
        [HttpDelete("/DeleteTask/{IdTarefa}")]
        public IActionResult deleteTarefaLista(int IdTarefa)
        {
            _tarefa.Remove(IdTarefa);
            return Ok();

        }


        [HttpPut("/Completed/{IdTarefa}")]
        public IActionResult UpdateCompleted(int IdTarefa, [FromBody] TarefaViewModelCompleted model)
        {
            try
            {
                var tarefaExistente = _tarefa.Getbyid(IdTarefa);

                if (tarefaExistente == null)
                {
                    return NotFound("Tarefa não encontrada");
                }

                tarefaExistente.UpdateCompletedStatus(model.Completed);

                _tarefa.Update(tarefaExistente);

                return Ok(new
                {
                    IdTarefa = tarefaExistente.IdTarefa,
                    DescricaoTarefa = tarefaExistente.DescricaoTarefa,
                    Completed = tarefaExistente.Completed,
                    DataInclusao = tarefaExistente.DataInclusao
                });
            }
            catch (Exception e)
            {
                return BadRequest(new
                {
                    Error = e.Message,
                    StackTrace = e.StackTrace
                });
            }
        }
    }
}
