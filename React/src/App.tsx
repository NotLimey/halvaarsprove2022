import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Routes, Route } from 'react-router-dom'
import Login from "./Pages/Auth/Login";
import Home from "./Pages/Home";
import './Scss/main.scss'
import { setEmployees, setUser } from "./Store/actions";
import { IUser } from "./Store/types";
import {Admin as UserPage} from './Pages/Auth/Admin'
import { DefaultHelmet } from "nl-ui";
import { Server } from "./Assets/Images";
import Loader from "./Components/Loader";
import NotFound from "./Pages/NotFound";
import Aos from "aos";
import 'aos/dist/aos.css';

const App = () => {

  Aos.init({
    duration: 900
  });
  
  const [Loading, setLoading] = useState(true)
  const User = useSelector<RootStateOrAny, IUser>(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch User
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
        if(response.status === 401) {
          console.log("Access denied")
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
    
    // FetchEmployees
    const FetchEmployees = async () => {
      await fetch(`https://localhost:7006/Employee`, {
          headers: {'Content-Type': 'application/json', 'Key': `${process.env.REACT_APP_EMPLOYEE_KEY}`},
          credentials: 'include',
          method: 'GET'
      }).then((response => {
        if(response.ok) {
          return response.json()
        }
        throw response;
      }))
      .then(data => {
        dispatch(setEmployees(data))
      })
  }

    FetchUser();
    FetchEmployees();
  }, [dispatch])

  return (
    <React.Fragment>
      <DefaultHelmet
        Title="Innlandet IT"
        FavIcon={Server}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={ Loading ? <Loader fullScreen /> : User.id ? <UserPage /> : <Login /> } />
        <Route path="/admin" element={ Loading ? <Loader fullScreen text="Contacting api.." /> : User.id ? <UserPage /> : <Login /> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
