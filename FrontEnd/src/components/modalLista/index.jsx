import '../../components/init';
import { CreateLista } from '../../api/ListaApi';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';
import './index.css'
import { formatInTimeZone } from 'date-fns-tz';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


export default function Index() {
  const [nomeLista, SetNomeLista] = useState('')
  const [usuario, setUsuario] = useState('')

  useEffect(() => {
      const usuarioLogado = storage('Usuario-Logado');
      setUsuario(usuarioLogado.id);
  }, []);

  async function CriarLista() {
    try {
      const data = formatInTimeZone(
    new Date(),
    'America/Sao_Paulo',
    "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'" 
  );
      const resp = await CreateLista(nomeLista, data, usuario);
    } catch (err) {
      toast.warn(err);
      if (err.response) {
        toast.warn(err.response.data.message);
      }
    }
  }

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Criar nova lista</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className='form-row'>
              <label>Nome lista:</label>
              <input type='text' placeholder='Lista 1' value={nomeLista} onChange={e => SetNomeLista(e.target.value)} />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={CriarLista}>Criar</button>
          </div>
        </div>
      </div>
    </div>
  )
}