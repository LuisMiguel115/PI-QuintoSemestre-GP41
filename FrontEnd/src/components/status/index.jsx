import React, { useEffect, useState } from 'react';
import './index.css';
import { getLista  } from '../../api/ListaApi';

const Index = () => {
  const [taskLists, setTaskLists] = useState([]);

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

  const stats = [
    { label: 'Listas Criadas', value: taskLists.length },
    { label: 'Tarefas Completas', value: 0 },
  ];
  return (
    <div className="dashboard-container-status">
      {stats.map((stat, index) => (
        <div className="stat-box" key={index}>
          <span className="stat-label">{stat.label}</span>
          <span className="stat-value">{stat.value}</span>
        </div>
      ))}
    </div>
  );
};

export default Index;
