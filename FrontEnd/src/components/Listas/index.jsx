import '../../components/init';
import { getLista, deleteLista } from '../../api/ListaApi';
import { useNavigate } from 'react-router-dom';
import './index.css'
import React, { useEffect, useState } from 'react';

export default function Index() {
  const [taskLists, setTaskLists] = useState([]);
  const navigate = useNavigate();

  const carregarListas = async () => {
    try {
      const resposta = await getLista();
      setTaskLists(resposta.data);
    } catch (error) {
      console.error("Erro ao buscar listas:", error);
      setTaskLists([]);
    }
  };

  useEffect(() => {
    carregarListas();
    const intervalId = setInterval(carregarListas, 30000);
    return () => clearInterval(intervalId);
  }, []);

  const DeleteLista = async (id) => {

    try {
      await deleteLista(id);
      carregarListas();
    } catch (error) {
      console.error("Erro ao deletar a lista:", error);
    }
  };

  return (
    <div className="list-container">
      <h2 className="list-header">Minhas Listas</h2>
      {taskLists.length === 0 ? (
        <div className='Lista-vazia'>
          <p className="empty-message">Nenhuma lista criada ainda.</p>
          <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            nova lista
          </button>
        </div>
      ) : (
        <ul className="list-ul">
          {taskLists.map((list) => (
            
            <li key={list.id} className="list-item">
              <a
                href={`/list/${list.id}`}
                className="list-link"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/lista/${list.id}`);
                }}
              >
                {list.nomeLista}
              </a>
              <button
                onClick={() => DeleteLista(list.id)}
                className="btn btn-danger delete-btn"
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}