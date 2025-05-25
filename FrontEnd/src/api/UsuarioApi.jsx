import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:7014/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export async function login(email, senha) {
        const resp = await api.post('/getLogin', {
            Email: email,
            Senha: senha
        });
        return resp.data;
}

export async function singUp(nome,email, senha) {
        const resp = await api.post('/cadastrarUsuario', {
            Nome: nome,
            Email: email,
            Senha: senha
        });
        return resp.data;
}