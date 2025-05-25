import '../../components/init';
import { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import localStorage from 'local-storage';
import LoadingBar from 'react-top-loading-bar';
import { singUp } from '../../api/UsuarioApi';
import { ToastContainer, toast } from 'react-toastify';

import './index.css';

export default function Index() {
    const [nome, SetNome] = useState('')
    const [email, SetEmail] = useState('')
    const [senha, SetSenha] = useState('')
    const [loading, setLoading] = useState(false)
    const Navigate = useNavigate();
    const ref = useRef();

    function login() {
        Navigate('/')
    }

    async function Cadastrar() {
        ref.current.continuousStart()
        setLoading(true);
        try {
            const resp = await singUp(nome, email, senha,);
            localStorage('Usuario-Logado', resp);
            setTimeout(() => {
                Navigate('/admin');
            }, 2000);
        } catch (err) {
            ref.current.complete();
            setLoading(false);
            toast.warn(err);
            if (err.response) {
                toast.warn(err.response.data.message);
                console.error("Erro no login:", err.response.data.message);
            }
        }
    }
    return (
        <main className='page page-login'>
            <LoadingBar color='#f11946' ref={ref} />

            <section className="box-login">

                <div className="bem-vindo">
                    <h1> Cadastre-se !</h1>
                </div>

                <div>
                    <div className='form-row'>
                        <label>Nome:</label>
                        <input type='text' placeholder='Informe seu nome' value={nome} onChange={e => SetNome(e.target.value)} required/>
                    </div>
                    <div className='form-row'>
                        <label>E-mail:</label>
                        <input type='text' placeholder='Informe seu e-mail' value={email} onChange={e => SetEmail(e.target.value)} required/>
                    </div>
                    <div className='form-row'>
                        <label>Senha:</label>
                        <input type='password' placeholder='*********' value={senha} onChange={e => SetSenha(e.target.value)} required/>
                    </div>
                    <div className='form-entrar'>
                        <button className='btn-black' onClick={Cadastrar} disabled={loading}>Cadastrar</button>
                    </div>
                    <div>
                        <p>Já tem cadastro? <a onClick={login} >clique aqui</a> </p>
                    </div>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                    />
                </div>

            </section>
        </main>
    )
}

