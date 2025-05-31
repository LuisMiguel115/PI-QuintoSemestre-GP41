import '../../components/init';
import { GetTarefaLista, Deletetask, updateTaskStatus } from '../../api/TarefasApi';
import { useNavigate } from 'react-router-dom';
import './index.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Index() {
  const [tarefaLista, setTarefaLista] = useState([]);
  const [tarefasNaoConcluidas, setTarefasNaoConcluidas] = useState([]);
  const [tarefasConcluidas, setTarefasConcluidas] = useState([]);

  const navigate = useNavigate();
  const { idParam } = useParams();

  const carregarTarefas = async (fkLista) => {
    try {
      const resposta = await GetTarefaLista(fkLista);
      setTarefaLista(resposta);

      const tarefasNaoConcluidasresp = resposta
        .filter(tarefa => !tarefa.completed)

      const tarefasConcluidasresp = resposta
        .filter(tarefa => tarefa.completed)

      setTarefasNaoConcluidas(tarefasNaoConcluidasresp)
      setTarefasConcluidas(tarefasConcluidasresp);
    } catch (error) {
      console.error("Erro ao buscar listas:", error);
      setTarefaLista([]);
    }
  };

  useEffect(() => {
    carregarTarefas(idParam);
    console.log(tarefaLista);
    const intervalId = setInterval(carregarTarefas(idParam), 30000);
    return () => clearInterval(intervalId);
  }, []);

  const Deletetarefa = async (id) => {
    debugger;
    try {
      await Deletetask(id);
      carregarTarefas(idParam);
    } catch (error) {
      console.error("Erro ao deletar a lista:", error);
    }
  };

  const CompleteTask = async (id, value) => {
    try {
      await updateTaskStatus(id, value);
      carregarTarefas(idParam);
    } catch (error) {
      console.error("Erro ao deletar a lista:", error);
    }
  };

  return (
    <div className="list-container">
      <h1 className="list-header">Tarefas</h1>

      {tarefaLista.length === 0 ? (
        <div className='Lista-vazia'>
          <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#TarefaModal">
            nova tarefa
          </button>
          <p className="empty-message">Nenhuma tarefa para essa lista criada ainda.</p>
        </div>
      ) : (
        <div className='Lista-tarefas'>
          <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#TarefaModal">
            nova tarefa
          </button>
          <ul className="list-ul">
            {tarefasNaoConcluidas.map((tarefa) => (
              <li key={tarefa.idTarefa} className="list-item">
                {tarefa.descricaoTarefa}
                <div>
                  <button
                    onClick={() => CompleteTask(tarefa.idTarefa, true)}
                    className="btn btn-success delete-btn"
                  >
                    ✔️
                  </button>
                  <button
                    onClick={() => Deletetarefa(tarefa.idTarefa)}
                    className="btn btn-danger delete-btn"
                  >
                    ❌
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

      )}
      <h1 className="list-header">Tarefas Conluidas</h1>

      {tarefaLista.length === 0 ? (
        <div className='Lista-vazia'>
          <p className="empty-message">Nenhuma tarefa para essa lista Conluida ainda.</p>
        </div>
      ) : (
        <div className='Lista-tarefas'>
          <ul className="list-ul">
            {tarefasConcluidas.map((tarefa) => (
              <li key={tarefa.idTarefa} className="list-item">
                {tarefa.descricaoTarefa}
                <div>
                  <button
                    onClick={() => CompleteTask(tarefa.idTarefa, false)}
                    className="btn btn-danger delete-btn"
                  >
                    ❌
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

      )}
    </div>
  )
}