import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/login/login";

export const MainRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    )
}