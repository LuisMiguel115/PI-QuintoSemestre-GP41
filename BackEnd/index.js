const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let tarefas = [];
let idAtual = 1;

app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

app.post('/tarefas', (req, res) => {
  const { nome, completa } = req.body;
  const novaTarefa = { id: idAtual++, nome, completa };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

app.put('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, completa } = req.body;
  const tarefa = tarefas.find(t => t.id === id);

  if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });

  tarefa.nome = nome;
  tarefa.completa = completa;
  res.json(tarefa);
});

app.delete('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  tarefas = tarefas.filter(t => t.id !== id);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`✅ Backend rodando em http://localhost:${PORT}`);
});
