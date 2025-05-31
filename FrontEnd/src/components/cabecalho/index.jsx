import  '../init';
import storage from 'local-storage';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'


export default function Index() {

    const [usuario,setUsuario] = useState('-');
    
    const navigate = useNavigate();
    
    useEffect(() =>{
        if(!storage('Usuario-Logado')){
            navigate('/');
        }else{
            const usuarioLogado = storage('Usuario-Logado');
            setUsuario(usuarioLogado.nome);
            
        }
    },[]);

    
    return (
        <header className='comp-cabecalho'>
                  <div className="d-flex align-items-center">
        <div className="d-flex me-4">
          <button className="btn btn-link text-white p-0 me-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
            </svg>
          </button>

          <button className="btn btn-link text-white p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-check-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
          </button>
        </div>


        <div className="d-flex align-items-center">
          <span className="me-2 fw-semibold"> {usuario}</span>
          <div className="rounded-circle bg-info d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', fontSize: '0.875rem', fontWeight: 'bold' }}>
            { usuario[0] }
          </div>
        </div>
      </div>
        </header>
    )
}


