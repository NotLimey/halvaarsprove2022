import React from "react";
import { Navigate, Routes, Route } from 'react-router-dom'
import Login from "./Login";

const AuthRoutes = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Navigate to="/" />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </React.Fragment>
    );
}

export default AuthRoutes;