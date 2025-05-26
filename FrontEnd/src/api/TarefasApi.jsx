import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:7014/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export async function GetTarefaLista(fkLista) {
    try {
        const resp = await api.post('/tarefaLista', {
            fK_IdLista: fkLista,
        });
        return resp.data;
    } catch (error) {
        console.error("Erro ao buscar tarefas:", error.response?.data || error.message);
        throw error;
    }
}


export async function CriarTarefaLista(fkLista, desc, completed, data) {
    try {
        const resp = await api.post('/criarTarefa', {
            fK_IdLista: fkLista,
            descricaoTarefa: desc,
            Completed: completed,
            dataInclusao: data,
        });
        return resp.data;
    } catch (error) {
        console.error("Erro ao deletar lista:", error);
        throw error;
    }
}

export const Deletetask = async (idTask) => {
    debugger;
    try {
        await api.delete(`/DeleteTask/${idTask}`);
    } catch (error) {
        console.error("Erro ao deletar a task:", error);
        throw error;
    }


};

    export const updateTaskStatus = async (taskId, completed) => {
        try {
            const response = await api.put(`Completed/${taskId}`,
                { completed }
            );
            return response.data;
        } catch (error) {
            console.error('Erro ao atualizar tarefa:', error.response?.data || error.message);
            throw error;
        }
    };