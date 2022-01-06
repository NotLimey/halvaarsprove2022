import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Routes, Route } from 'react-router-dom'
import AuthRoutes from "./Pages/Auth/AuthRoutes";
import Login from "./Pages/Auth/Login";
import Home from "./Pages/Home";
import './Scss/main.scss'
import { setUser } from "./Store/actions";
import { IUser } from "./Store/types";
import {User as UserPage} from './Pages/Auth/User'

const App = () => {
  
  const [Loading, setLoading] = useState(true)
  const User = useSelector<RootStateOrAny, IUser>(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const FetchUser = async () => {
      await fetch('https://localhost:7006/user', {
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        method: 'GET'
      })
      .then((response => {
        if(response.ok) {
          return response.json()
        }
        throw response;
      }))
      .then(data => {
        setLoading(false);

        dispatch(setUser(data))
      })
      .catch(error => {
        setLoading(false);
        console.error("Error fetching user")
      })
    }

    FetchUser();
  }, [dispatch])

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={ Loading ? <p>Loading...</p> : User.id ? <h3>Logged in</h3> : <Login /> } />
        <Route path="/admin" element={ Loading ? <p>Loading...</p> : User.id ? <UserPage /> : <Login /> } />
        <Route path="/auth/*" element={<AuthRoutes />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
