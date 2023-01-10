import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoutes from "./ProtectedRoutes";
import Header from '../components/header/header';
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import Status from "../pages/status/status";
import RandomDog from "../pages/dog/dog";
import Clientes from "../pages/clientes/clientes";
import ClientesCadastro from "../pages/clientesCadastro/clientes-cadastro";
import ClientesUpdate from "../pages/clientesUpdate/clientes-update";

export const MainRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={
                    <ProtectedRoutes>
                        <>
                        <Header />
                        <Home />
                        </>
                    </ProtectedRoutes>
                } />
                <Route path="/status-code" element={
                    <ProtectedRoutes>
                        <>
                        <Header />
                        <Status />
                        </>
                    </ProtectedRoutes>
                } />
                <Route path="/random-dog" element={
                    <ProtectedRoutes>
                        <>
                        <Header />
                        <RandomDog />
                        </>
                    </ProtectedRoutes>
                } />
                <Route path="/clientes" element={
                    <ProtectedRoutes>
                        <>
                        <Header />
                        <Clientes />
                        </>
                    </ProtectedRoutes>
                } />
                <Route path="/clientes/cadastro" element={
                    <ProtectedRoutes>
                        <>
                        <Header />
                        <ClientesCadastro />
                        </>
                    </ProtectedRoutes>
                } />
                <Route path="/cliente/:id" element={
                    <ProtectedRoutes>
                        <>
                        <Header />
                        <ClientesUpdate />
                        </>
                    </ProtectedRoutes>
                } />
            </Routes>
        </Router>
    )
}