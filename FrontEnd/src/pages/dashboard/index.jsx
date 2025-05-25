import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../../components/menu';
import Listas from '../../components/Listas'
import DashboardStats from '../../components/status';
import Cabecalho from '../../components/cabecalho'
import  ModalLista  from '../../components/modalLista';
import './Index.css';

const Dashboard = () => {


  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <Menu selecionado='home' />
        <div className='dashboard-content-center'>
        <Cabecalho/>
        <DashboardStats/>
        <Listas/>
        <ModalLista/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;