import { DefaultHelmet } from "nl-ui";
import React, { useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import '../../Scss/auth.scss';
import { IEmployee, IUser } from "../../Store/types";
import { VscEye, VscEyeClosed } from 'react-icons/vsc'
import { Button, TextField } from "@mui/material";
import { AiOutlinePlus, AiOutlineEye } from 'react-icons/ai'
import { Box } from "@mui/system";

const Admin = () => {
    const User = useSelector<RootStateOrAny, IUser>(state => state.user);
    const Employees = useSelector<RootStateOrAny, IEmployee[]>(state => state.employees);

    const [ShowSecret, setShowSecret] = useState(false);
    const [NewEmployee, setNewEmployee] = useState(false)

    // Ny Ansatt
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Role, setRole] = useState('');
    const [Image, setImage] = useState('');

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

    const handleDeleteEmployee = async (id : string) => {
        await fetch(`https://localhost:7006/Employee?Id=${id}`, {
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            method: 'DELETE'
        })
        .then(() => {
            setTimeout(() => {
                window.location.reload();
            }, 300)
        });
    }

    const handleNewEmployee = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await fetch('https://localhost:7006/Employee', {
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify({
                name: Name,
                email: Email,
                role: Role,
                image: Image,
            })
        })
        .then(() => {
            setTimeout(() => {
                window.location.reload();
            }, 300)
        })
        .catch((err) => {
            console.error("could'nt upload employee")
        })
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
                <br /><br /><br />
                <h3>Ansatte</h3>
                <React.Fragment>
                    <br />
                    {!NewEmployee ?
                        <React.Fragment>
                            <Button onClick={() => setNewEmployee(true)} startIcon={<AiOutlinePlus />} variant="outlined">Ny Ansatt</Button>
                            <div className="ansatte-container-admin ">
                                {Employees?.map((employee : IEmployee, i : number) => 
                                    <div key={`Employee[${i}]`}>
                                        <img src={employee.image} alt="" />
                                        <h3>{employee.name}</h3>
                                        <p>{employee.email}</p>
                                        <p><i>{employee.role}</i></p>
                                        <Button onClick={() => {employee.id !== undefined && handleDeleteEmployee(employee.id)}} sx={{mt: 1, mb: 2}} variant="outlined" color="error" >Slett</Button>
                                    </div>
                                )}
                            </div>
                        </React.Fragment>
                    :
                        <React.Fragment>
                            <Button onClick={() => setNewEmployee(false)} startIcon={<AiOutlineEye />} variant="outlined">Se ansatte</Button>
                            <Box
                                component="form"
                                onSubmit={handleNewEmployee}>
                                <Box
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '35ch',  }, display: 'flex', flexWrap: 'wrap'
                                    }}
                                >
                                    <TextField onChange={(e : any) => setName(e.target.value)} value={Name} color="secondary" id="name" type="text" label="Navn" variant="standard" />
                                    <TextField onChange={(e : any) => setEmail(e.target.value)} value={Email} color="secondary" id="email" type="email" label="E-mail" variant="standard" />
                                    <TextField onChange={(e : any) => setRole(e.target.value)} value={Role} color="secondary" id="role" type="text" label="Stilling" variant="standard" />
                                </Box>
                                <Box
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '109ch',  }, display: 'flex', flexWrap: 'wrap'
                                    }}
                                >
                                    <TextField onChange={(e : any) => setImage(e.target.value)} value={Image} color="secondary" id="role" type="text" label="Bilde lenke" variant="standard" />
                                </Box>
                                <br />
                                <Button type="submit" variant="outlined" startIcon={<AiOutlinePlus />}>Legg til ansatt</Button>
                            </Box>
                        </React.Fragment>
                    }
                </React.Fragment>
            </section>
        </React.Fragment>
    );
}

export {Admin};