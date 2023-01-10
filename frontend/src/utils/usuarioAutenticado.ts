export const autenticacao = {
    usuarioAutenticado: () => {
        return localStorage.getItem("token") != undefined ? true : false
    }
};