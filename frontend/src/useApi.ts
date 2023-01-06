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
        // return typeof localStorage.getItem("token")
    },
    randomUser: async () => {
        const result = await fetch('https://randomuser.me/api/?results=100&inc=picture,name,email,login,dob');
        const json = await result.json();
        return json;
    },
    statusCode: async (status : string) => {
        const result = await fetch(`https://http.cat/[${status}]`);
        const json = await result.json();
        return json;
    },
    randomDog: async () => {
        const result = await fetch('https://random.dog/woof.json?include=jpg');
        const json = await result.json();
        return json;
    }
}