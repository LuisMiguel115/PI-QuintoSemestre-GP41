import '../init';
import { CriarTarefaLista , GetTarefaLista} from '../../api/TarefasApi';
import { useNavigate } from 'react-router-dom';
import './index.css'
import { formatInTimeZone } from 'date-fns-tz';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function Index(fkLista) {
  const [descFarefa, SetdescFarefa] = useState('')

 const carregarTarefas = async (fkLista) => {
    try {
      const resposta = await GetTarefaLista(fkLista);
      setTarefaLista(resposta);
    } catch (error) {
      console.error("Erro ao buscar listas:", error);
      setTarefaLista([]);
    }
  };

  async function CriarTarefa(fkLista) {
    try {
      const data = formatInTimeZone(
        new Date(),
        'America/Sao_Paulo',
        "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
      );
      const completed = false;
      const resp = await CriarTarefaLista(fkLista.fklista, descFarefa, completed, data);
      carregarTarefas(fkLista.fklista)
    } catch (err) {
      toast.warn(err);
      if (err.response) {
        toast.warn(err.response.data.message);
      }
    }
  }

  return (
    <div className="modal fade" id="TarefaModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Criar nova lista</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className='form-row'>
              <label>desc. Tarefa:</label>
              <input type='text' placeholder='Comprar 1 duzia de ovos' value={descFarefa} onChange={e => SetdescFarefa(e.target.value)} />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() =>{CriarTarefa(fkLista)}}>Criar</button>
          </div>
        </div>
      </div>
    </div>
  )
}