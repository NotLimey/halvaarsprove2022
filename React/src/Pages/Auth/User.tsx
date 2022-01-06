import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import '../../Scss/auth.scss';
import { IUser } from "../../Store/types";

const User = () => {
    const User = useSelector<RootStateOrAny, IUser>(state => state.user);

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
                <h2>Secret message</h2>
                <p>Denne meldingen er kjempe hemmelig. Den kan bare sees av de som er logget inn! Ække det kult?!</p>
                <br /><br /><br />
                <button onClick={Logout} style={{maxWidth: '300px'}} className='login_btn'>Logg ut</button>
            </section>
        </React.Fragment>
    );
}

export {User};