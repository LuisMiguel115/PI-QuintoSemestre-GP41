import '../../components/init';
import localStorage from 'local-storage';
import { useNavigate, Link } from 'react-router-dom';

import Cabecalho from '../../components/cabecalho';

import './index.css'
import { useState } from 'react';
import Dashboard from './../../pages/dashboard/index';



export default function Index(props) {
    const navigate = useNavigate();


    function sairClick() {
        localStorage.remove('Usuario-Logado');
        navigate('/');
    }

    function VerificarSelect(menu) {
        if (menu === props.selecionado)
            return 'selecionado'
        else
            return '';


    }
    return (
            <nav className="comp-menu">

                <div>
                    <div className='logo'>
                        <img src="/src/assets/images/Logo.png" alt="logo" />
                    </div>

                    <div className='menu-items'>
                        <Link to='/dashboard' className={VerificarSelect("dashboard")}>
                            <img src="/src/assets/images/icon-home.svg" alt="home" />
                            <div>Dashboard</div>
                        </Link>

                    </div>
                </div>

                <div className='menu-items'>
                    <a onClick={sairClick} href="#">
                        <img src="/src/assets/images/icon-sair.svg" alt="consultar" />
                        <div>Sair</div>
                    </a>
                </div>
            </nav>

    )
}