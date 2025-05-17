import React, { useEffect, useState } from 'react';
import { getTarefas, adicionarTarefa, deletarTarefa, atualizarTarefa } from './api/tarefas';
import Tarefa from './componentes/tarefa';
import './App.css';

function App() {
  const [tarefa, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

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
  
  //função criar tarefas
  const criarTarefa = async() => {
    if (!novaTarefa.trim()) return;
    await adicionarTarefa({nome: novaTarefa, completed: false});
    setNovaTarefa("")
    carregarTarefas();
  }

  const botoes = [
    {label: "Add Task", className: "btn-primary", onClick: criarTarefa},
    {label: "Scheduling", className:"btn-warning"},
    {label: "Completed Tasks", className: "btn-success"}

  ]

  return (
    // layout da pagina
    <div className="bg-dark text-white min-vh-100 p-3">
      <div className="d-flex mt-5 gap-3 justify-content-center">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Write a new task"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />

        {botoes.map((btn, index) => (
          <button key={index} type="button" className={`btn ${btn.className}`} onClick={btn.onClick}>
            {btn.label}

          </button>
        ))}
      </div>

      <div className="mt-4">
        {tarefa.map((tarefa, index) => (
          <Tarefa key={tarefa._id || index} tarefa={tarefa} />
        ))}
      </div>
    </div>
  );
}

export default App;
