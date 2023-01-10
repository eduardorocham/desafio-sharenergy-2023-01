import { MainRoutes } from "./routes";
import { autenticacao } from '../utils/usuarioAutenticado';

type Props = {
    children: JSX.Element
}

const ProtectedRoutes = ({children} : Props) => {
    const usuarioAutenticado = autenticacao.usuarioAutenticado();
    return usuarioAutenticado ? children : <MainRoutes />
}

export default ProtectedRoutes;