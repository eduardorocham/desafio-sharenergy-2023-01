import { MainRoutes } from "./routes";
import { autenticacao } from '../utils/usuarioAutenticado';

const ProtectedRoutes = ({children} : any) => {
    const usuarioAutenticado = autenticacao.usuarioAutenticado();
    return usuarioAutenticado ? children : <MainRoutes />
}

export default ProtectedRoutes;