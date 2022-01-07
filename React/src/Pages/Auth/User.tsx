import { DefaultHelmet } from "nl-ui";
import React, { useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import '../../Scss/auth.scss';
import { IUser } from "../../Store/types";
import { VscEye, VscEyeClosed } from 'react-icons/vsc'
import { Button } from "@mui/material";

const User = () => {
    const User = useSelector<RootStateOrAny, IUser>(state => state.user);

    const [ShowSecret, setShowSecret] = useState(false);

    async function Logout() {
        await fetch('https://localhost:7006/Logout', {
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            method: 'POST'
        })
        .then(() => {
            setTimeout(() => {
                window.location.reload();
            }, 300)
        });
      }
    
    return (
        <React.Fragment>
            
            <DefaultHelmet
                Title="Admin Panel"
            />
            <section className="user-page">
                <h1>Velkommen til admin panelet!!</h1>
                <br />
                <br />
                <h2>Credentials</h2>
                <p>Navn: <i>{User.name}</i></p>
                <p>E-mail: <i>{User.email}</i></p>
                <p>Id: <i>{User.id}</i></p>
                <br />
                <br />
                <h2>Hemmelig beskjed</h2>
                <br />
                {ShowSecret ? 
                    <React.Fragment>
                        <Button color="inherit" onClick={() => setShowSecret(false)} variant="outlined" startIcon={<VscEyeClosed />}>
                            Skjul
                        </Button>
                        <p>Denne meldingen er kjempe hemmelig. Den kan bare sees av de som er logget inn! Ække det kult?!</p>
                    </React.Fragment> 
                    : 
                    <React.Fragment>
                        <Button color="inherit" onClick={() => setShowSecret(true)} variant="outlined" startIcon={<VscEye />}>
                            Se
                        </Button>
                    </React.Fragment> 
                }
                <br /><br /><br />
                <button onClick={Logout} style={{maxWidth: '300px'}} className='login_btn'>Logg ut</button>
            </section>
        </React.Fragment>
    );
}

export {User};