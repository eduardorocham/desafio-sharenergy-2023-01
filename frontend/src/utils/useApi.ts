const BASE = 'http://localhost:4000';

export const api = {
    login: async (username: string, password: string) => {
        if (username && password) {
            const response = await fetch(`${BASE}/login`, {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();

            if (json) {
                localStorage.setItem("token", json.token);
            }

            return json;
        }
    },
    usuarioAutenticado: () => {
        return localStorage.getItem("token") != undefined ? true : false
    },
    randomUser: async () => {
        const result = await fetch('https://randomuser.me/api/?results=100&inc=picture,name,email,login,dob');
        const json = await result.json();
        return json;
    },
    statusCode: async (status : string) => {
        const result = await fetch(`https://http.cat/${status}`, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            mode: 'no-cors'
        });
        const json = await result.json();
        return json;
    },
    randomDog: async () => {
        const result = await fetch('https://random.dog/woof.json?include=jpg');
        const json = await result.json();
        return json;
    },
    getClients: async () => {
        const result = await fetch('http://localhost:4000/list');
        const json = await result.json();
        return json;
    },
    getClient: async (id: string) => {
        const result = await fetch(`http://localhost:4000/list/${id}`);
        const json = await result.json();
        return json;
    },
    createClient: async (nome: string, sobrenome: string, email: string, telefone: string, endereco: string, cpf: string) => {
        if (nome && sobrenome && email && telefone && endereco && cpf) {
            const response = await fetch(`${BASE}/list`, {
                method: 'POST',
                body: JSON.stringify({
                    nome,
                    sobrenome,
                    email,
                    telefone,
                    endereco,
                    cpf
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();

            return json;
        }
    },
    updateCliente: async (id: string, nome: string, sobrenome: string, email: string, telefone: string, endereco: string, cpf: string) => {
        const result = await fetch(`http://localhost:4000/list/${id}`, {
            method: 'PUT',
                body: JSON.stringify({
                    nome,
                    sobrenome,
                    email,
                    telefone,
                    endereco,
                    cpf
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
        });
        const json = await result.json();
        return json;
    },
    deleteClient: async (id : string) => {
        const result = await fetch(`http://localhost:4000/list`, {
            method: 'DELETE',
                body: JSON.stringify({
                    id
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
        });
        const json = await result.json();
        return json;
    }
}