import React, { useEffect, useState } from 'react';

import { getTarefas, adicionarTarefa, deletarTarefa, atualizarTarefa } from './api/tarefas.js';

// Componentes
import Tarefa from './componentes/tarefa.js';
import Modal from './componentes/Modal.js';
import Header from './componentes/header.js';
import ScheduleLista from './componentes/Agendas.js';
import Sidebar from './componentes/Sidebar.js';

import './App.css';

function App() {
  const [tarefa, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [novaCor, setNovaCor] = useState("#0d6efd");
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');

  //busca as tarefas anteriores do backend quando o componente for renderizado a primeira vez
  const carregarTarefas = async () => {
    try {
      const resposta = await getTarefas();
      setTarefas(resposta.data);
    } catch (error) {
      console.error("Erro ao carregar tarefas:", error);
    }
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  const completar = async (id) => {
    const tarefaAtual = tarefa.find(t => t.id === id);
    if (!tarefaAtual) return;

    try {
      await atualizarTarefa(id, {
        nome: tarefaAtual.nome,
        completa: !tarefaAtual.completa,
        cor: tarefaAtual.cor
      });
      carregarTarefas();
    } catch (error) {
      console.error("Erro ao completar tarefa:", error);
    }
  };

  //função para criar tarefas
  const abrirModal = () => {
    setNovaTarefa("");
    setNovaCor("#0d6efd");
    setShowModal(true);
  };

  const fecharModal = () => setShowModal(false);

  const cadastrarTarefa = async () => {
    if (!novaTarefa.trim()) return;
    try {
      await adicionarTarefa({ nome: novaTarefa, cor: novaCor, completa: false }); // Adicionar 'completa' padrão
      setNovaTarefa("");
      setNovaCor("#0d6efd");
      setShowModal(false);
      carregarTarefas();
    } catch (error) {
      console.error("Erro ao cadastrar tarefa:", error);
    }
  };

  const HandleDeletarTarefa = async (id) => {
    try {
      await deletarTarefa(id);
      carregarTarefas();
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
    }
  }

  const botoes = [
    { label: "Add Task", className: "btn-primary rounded-pill", onClick: abrirModal },
    { label: "Scheduling", className: "btn-warning rounded-pill", onClick: () => setActiveMenuItem('Scheduling') }, // Adicionado onClick
    { label: "Completed Tasks", className: "btn-success rounded-pill", onClick: () => setActiveMenuItem('Completed Tasks') } // Adicionado onClick
  ];

  // contadores de tarefas
  const activeTasksCount = tarefa.filter(t => !t.completa).length;
  const completedTasksCount = tarefa.filter(t => t.completa).length;

  return (
    // layout da página
    <div className="bg-dark text-white min-vh-100 d-flex">

      {/* Sidebar */}
      <Sidebar
        activeMenuItem={activeMenuItem}
        setActiveMenuItem={setActiveMenuItem}
      />

      {/* Conteúdo Principal */}
      <div className="flex-grow-1 p-4 d-flex flex-column bg-secondary">

        {/* carrega o header */}
        <Header />

        <div className="row g-4 flex-grow-1">
          <div className="col-md-8 d-flex flex-column gap-4">

            <div className="d-flex justify-content-around align-items-center mb-4 gap-3">
              <div className="bg-dark rounded p-4 text-center shadow-sm flex-fill"> 
                <h3 className="text-white fs-3 fw-bold">{activeTasksCount}</h3> 
                <p className="text-white small fw-bold">Current Tasks</p> 
              </div>
              <div className="bg-dark rounded p-4 text-center shadow-sm flex-fill">
                <h3 className="text-white fs-3 fw-bold">3</h3>
                <p className="text-white small fw-bold">Scheduling</p>
              </div>
              <div className="bg-dark rounded p-4 text-center shadow-sm flex-fill">
                <h3 className="text-white fs-3 fw-bold">{completedTasksCount}</h3>
                <p className="text-white small fw-bold">Completed Tasks</p>
              </div>
            </div>

            {/* tarefas e botões */}
            <div className="d-flex justify-content-between align-items-center mb-4">

              { /* Modal para adicionar nova tarefa */}
              <Modal
                showModal={showModal}
                fecharModal={fecharModal}
                cadastrarTarefa={cadastrarTarefa}
                novaTarefa={novaTarefa}
                setNovaTarefa={setNovaTarefa}
                novaCor={novaCor}
                setNovaCor={setNovaCor}>
              </Modal>

              <div>
                <p className="text-muted small">Tasks, Scheduling, etc.</p>
              </div>
              <div className="d-flex gap-2">
                {botoes.map((btn, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`btn ${btn.className}`}
                    onClick={() => btn.onClick?.()}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4">
              {tarefa.map((tarefa, index) => (
                <Tarefa key={tarefa._id || index} tarefa={tarefa} onDelete={HandleDeletarTarefa} onComplete={completar} />
              ))}
            </div>
          </div>

          {/* coluna da direita: agendamentos */}
          <div className="col-md-4">
            <ScheduleLista />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;