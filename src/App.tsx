import React from "react";
import { Routes, Route } from 'react-router-dom'
import AuthRoutes from "./Pages/Auth/AuthRoutes";
import Home from "./Pages/Home";

const App = () => {
    return (
        <React.Fragment>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/*" element={<AuthRoutes />} />
          </Routes>
        </React.Fragment>
    );
}

export default App;
