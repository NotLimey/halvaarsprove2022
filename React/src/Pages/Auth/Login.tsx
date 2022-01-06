import React, { useState } from 'react';
import '../../Scss/auth.scss';
import TextField from '@mui/material/TextField';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const SubmitLogin = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await fetch('https://localhost:7006/Login', {
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify({
                email: Email,
                password: Password
            })
        })
        .then(() => {
            setTimeout(() => {
                window.location.reload();
            }, 300)
        });
    }

    return (
        <React.Fragment>
            <section className="login-page">
                <div className="company-mark__login">
                    <h2><Link to="/">Innlandet IT</Link> <span>©</span></h2>
                </div>
                <div className="background-objects">
                    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                        <path id="blob" d="M409.5,315Q353,380,282,401Q211,422,138.5,380.5Q66,339,51,243Q36,147,117.5,86.5Q199,26,287,60Q375,94,420.5,172Q466,250,409.5,315Z" fill="#c0fdd4"></path>
                    </svg>
                    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                        <path id="blob" d="M415,314Q352,378,274.5,431Q197,484,149,403Q101,322,66.5,233.5Q32,145,117.5,94Q203,43,285,73.5Q367,104,422.5,177Q478,250,415,314Z" fill="#c0fdd4"></path>
                    </svg>
                </div>
                <div className="login-form__container">
                    <h1>Log in to Your Account</h1>
                    <Box component="form" onSubmit={SubmitLogin}>
                        <input onChange={(e : any) => setEmail(e.target.value)} className='login__input' type="text" id="username" placeholder='Username' />
                        <input onChange={(e : any) => setPassword(e.target.value)} className='login__input' type="password" id="password" placeholder='Password' />
                        <div className='login__options'>
                            <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 17 } }} defaultChecked />} label="Keep me signed in?" />
                            <Link to="/auth/forgot-password">Forgot password?</Link>
                        </div>
                        <button className='login_btn'>Log in</button>
                    </Box>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Login;