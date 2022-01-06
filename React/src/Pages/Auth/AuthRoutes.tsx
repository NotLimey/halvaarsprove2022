import React from "react";
import { Navigate, Routes, Route } from 'react-router-dom'
import Login from "./Login";

const AuthRoutes = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Navigate to="/" />} />
            </Routes>
        </React.Fragment>
    );
}

export default AuthRoutes;