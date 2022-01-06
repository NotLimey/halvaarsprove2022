import React from "react";
import { Routes, Route } from 'react-router-dom'
import AuthRoutes from "./Pages/Auth/AuthRoutes";
import Login from "./Pages/Auth/Login";
import Home from "./Pages/Home";
import './Scss/main.scss'

const App = () => {
    return (
        <React.Fragment>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/auth/*" element={<AuthRoutes />} />
          </Routes>
        </React.Fragment>
    );
}

export default App;
