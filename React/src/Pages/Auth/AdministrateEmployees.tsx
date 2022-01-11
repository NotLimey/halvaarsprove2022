import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineEye } from "react-icons/ai";
import { RootStateOrAny, useSelector } from "react-redux";
import { IEmployee } from "../../Store/types";
import '../../Scss/auth.scss';
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const AdministrateEmployees = () => {
    const [NewEmployee, setNewEmployee] = useState(false)
    const Employees = useSelector<RootStateOrAny, IEmployee[]>(state => state.employees);
    
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Role, setRole] = useState('');
    const [Image, setImage] = useState('');

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
        <div className="user-page">
            <Button sx={{mb: 5}} color="inherit" variant="outlined" startIcon={<BiArrowBack />}><Link className="no-text-dec" to="/admin">Admin</Link></Button>
            <h3>Ansatte</h3>
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
                </React.Fragment>}
        </div>
    );
}

export default AdministrateEmployees;