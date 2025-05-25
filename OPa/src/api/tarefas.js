import axios from 'axios';

//backend
const api = axios.create({
  baseURL: 'https://localhost:7014/'
});

//adciona um token em todas as requisições
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
// rotas CRUD para tarefas
export const getTarefas = () => api.get('/tarefas');
export const adicionarTarefa = (tarefa) => api.post('/tarefas', tarefa);
export const atualizarTarefa = (id, dados) => api.put(`/tarefas/${id}`, dados);
export const deletarTarefa = (id) => api.delete(`/tarefas/${id}`);
export const completarTarefa = (id, completa) => api.put(`/tarefas/${id}`, { completa });

export default api;