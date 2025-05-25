import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:7014/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export async function getLista() {
    const resp = await api.get('/Lista', {
    });
    return resp;
}

export const deleteLista = async (idLista) => {
    try {
        debugger;
        await axios.delete(`https://localhost:7014/deleteLista/${idLista}`);
    } catch (error) {
        console.error("Erro ao deletar lista:", error);
        throw error;
    }

};

export async function CreateLista(nome, dataAtual, usuario) {
    try {
        const resp = await api.post('/criarLista', {
            NomeLista: nome,
            DataInclusao: dataAtual,
            FK_UsuarioCriador: usuario
        });
        return resp.data;
    } catch (error) {
        console.error("Erro ao deletar lista:", error);
        throw error;
    }
};