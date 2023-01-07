import { MainRoutes } from "./routes";
import { api } from "../utils/useApi";

const ProtectedRoutes = ({children} : any) => {
    const usuarioAutenticado = api.usuarioAutenticado();
    return usuarioAutenticado ? children : <MainRoutes />
}

export default ProtectedRoutes;