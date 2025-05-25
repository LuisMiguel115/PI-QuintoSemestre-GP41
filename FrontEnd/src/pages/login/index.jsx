import '../../components/init';
import { useEffect, useState, useRef } from "react";

import { useNavigate } from 'react-router-dom';

import localStorage from 'local-storage';
import { login } from '../../api/UsuarioApi';
import LoadingBar from 'react-top-loading-bar';
import { ToastContainer, toast } from 'react-toastify';
import './index.css';

export default function Index() {
    const [email, SetEmail] = useState('')
    const [senha, SetSenha] = useState('')
    const [loading, setLoading] = useState(false)
    const Navigate = useNavigate();
    const ref = useRef();

    useEffect(() => {
        if (localStorage('Usuario-Logado')) {
            Navigate('/dashboard');
        }

    }, []);

    function cadastro() {
        Navigate('/SingUp')
    }

    async function Entrar() {
        ref.current.continuousStart()
        setLoading(true);
        try {
            const resp = await login(email, senha,);
            localStorage('Usuario-Logado', resp);
            setTimeout(() => {
                Navigate('/dashboard');
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
                    <h1> Seja Bem-Vindo !</h1>
                </div>

                <div>
                    <div className='form-row'>
                        <label>E-mail:</label>
                        <input type='text' placeholder='Informe seu e-mail' value={email} onChange={e => SetEmail(e.target.value)} required/>
                    </div>
                    <div className='form-row'>
                        <label>Senha:</label>
                        <input type='password' placeholder='*********' value={senha} onChange={e => SetSenha(e.target.value)} required/>
                    </div>
                    <div className='form-entrar'>
                        <button className='btn-black' onClick={Entrar} disabled={loading}>ENTRAR</button>
                    </div>
                    <div>
                        <p>Ainda não tem cadastro? <a onClick={cadastro} >clique aqui</a> </p>
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

