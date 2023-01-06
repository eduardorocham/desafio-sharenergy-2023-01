import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoutes from "./ProtectedRoutes";
import Header from '../components/header/header';
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import Status from "../pages/status/status";
import RandomDog from "../pages/dog/dog";

export const MainRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={
                    <ProtectedRoutes>
                        <Header />
                        <Home />
                    </ProtectedRoutes>
                } />
                <Route path="/status-code" element={
                    <ProtectedRoutes>
                        <Header />
                        <Status />
                    </ProtectedRoutes>
                } />
                <Route path="/random-dog" element={
                    <ProtectedRoutes>
                        <Header />
                        <RandomDog />
                    </ProtectedRoutes>
                } />
            </Routes>
        </Router>
    )
}