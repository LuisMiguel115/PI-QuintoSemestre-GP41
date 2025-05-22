import React, { useEffect, useState } from 'react';
import { getTarefas, adicionarTarefa, deletarTarefa, atualizarTarefa, completarTarefa } from './api/tarefas';
import Tarefa from './componentes/tarefa';
import './App.css';

function App() {
  const [tarefa, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [novaCor, setNovaCor] = useState("#0d6efd"); // cor padrão Bootstrap primary
  // buscar as tarefas anteriores do backend quando o componente for renderizado a primeira vez

  const carregarTarefas = async () => {
    const resposta = await getTarefas();
    setTarefas(resposta.data);
  };
  useEffect(() => {
    const carregarTarefas = async () => {
      const resposta = await getTarefas();
      setTarefas(resposta.data);
    };

    carregarTarefas();
  }, []);

  const completar = async (id) => {
    const tarefaAtual = tarefa.find(t => t.id === id);
    if (!tarefaAtual) return;

    await atualizarTarefa(id, { 
      nome: tarefaAtual.nome, 
      completa: !tarefaAtual.completa, 
      cor: tarefaAtual.cor 
    });

    carregarTarefas();
};
  
  //função criar tarefas
  const abrirModal = () => {
    setNovaTarefa("");
    setNovaCor("#0d6efd");
    setShowModal(true);
  };

  const fecharModal = () => setShowModal(false);

  const cadastrarTarefa = async () => {
    if (!novaTarefa.trim()) return;
    await adicionarTarefa({ nome: novaTarefa, cor: novaCor });
    setNovaTarefa("");
    setNovaCor("#0d6efd");
    setShowModal(false);
    carregarTarefas();
  };


  const HandleDeletarTarefa = async(id) => {
    await deletarTarefa(id);
    carregarTarefas();
  }

  const botoes = [
    {label: "Add Task", className: "btn-primary", onClick: abrirModal},
    {label: "Scheduling", className:"btn-warning"},
    {label: "Completed Tasks", className: "btn-success"}

  ]

  return (
    // layout da pagina
    
    <div className="bg-dark text-white min-vh-100">
      <div className="d-flex bg-dark text-white" style={{ minHeight: "100vh" }}>

        {/*sidebar */}

        <div className="bg-black p-3" style={{ width: "250px" }}>
          <h4 className="text-info">TodoHub</h4>
          <ul className="nav flex-column mt-4">
            <li className="nav-item"><button className="nav-link text-white btn btn-link">Dashboard</button></li>
            <li className="nav-item"><button className="nav-link text-white btn btn-link">Task List</button></li>
            <li className="nav-item"><button className="nav-link text-white btn btn-link">Scheduling</button></li>
            <li className="nav-item"><button className="nav-link text-white btn btn-link">Notification</button></li>
            <li className="nav-item mt-4"><button className="nav-link text-white btn btn-link">My Profile</button></li>
            <li className="nav-item"><button className="nav-link text-white btn btn-link">Settings</button></li>
            <li className="nav-item mt-4"><button className="nav-link text-white btn btn-link">Help & Support</button></li>
          </ul>
        </div>

        {/*conteudo principal*/}

      {/* pop-up na tela para opções da tarefa*/}
    {showModal && (
      <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content bg-dark text-white">
            <div className="modal-header border-secondary">
              <h5 className="modal-title">Adicionar Tarefa</h5>
              <button type="button" className="btn-close btn-close-white" onClick={fecharModal}></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Nome da Tarefa</label>
                <input
                  type="text"
                  className="form-control"
                  value={novaTarefa}
                  onChange={(e) => setNovaTarefa(e.target.value)}
                  autoFocus
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Cor da Tarefa</label>
                <input
                  type="color"
                  className="form-control form-control-color"
                  value={novaCor}
                  onChange={(e) => setNovaCor(e.target.value)}
                  title="Escolha uma cor"
                />
              </div>
            </div>
            <div className="modal-footer border-secondary">
              <button type="button" className="btn btn-secondary" onClick={fecharModal}>Cancelar</button>
              <button type="button" className="btn btn-primary" onClick={cadastrarTarefa}>Cadastrar</button>
            </div>
          </div>
        </div>
      </div>
    )}


        <div className="flex-grow-1 p-4">
          {/*tarefas e botões */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="mb-0">Dashboard</h2>
              <p className="text-muted">Tasks, Scheduling, etc.</p>
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
              <Tarefa key={tarefa._id || index} tarefa={tarefa} onDelete={HandleDeletarTarefa} onComplete={completar}/>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
