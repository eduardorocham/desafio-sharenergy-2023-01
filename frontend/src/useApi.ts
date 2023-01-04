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
            console.log(json);
        }
    }
}