import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import Header from '../components/header/header';

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
            </Routes>
        </Router>
    )
}