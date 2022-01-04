import { CombineClasses, Container, DefaultHelmet } from 'nl-ui'
import '../../Scss/auth.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, ButtonGroup, Checkbox, FormControlLabel, IconButton, InputAdornment, Link, TextField } from '@mui/material';
import { RiGoogleFill, RiGithubFill } from 'react-icons/ri';
import { SiDiscord } from 'react-icons/si'
import { FaTwitch, FaAmazon } from 'react-icons/fa'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'

const Login = () => {
    const navigate = useNavigate();

    const [Username, setUsername] = useState<string | undefined>('');
    const [Password, setPassword] = useState<string | undefined>('');
    const [Loading, setLoading] = useState<boolean>(false)
    const [Register, setRegister] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    if(Loading) {
        return <p>loading..</p>
    }

    return (
        <section className='login_nd_register-section'>
            <Container style={{marginTop: '50px'}} className={CombineClasses('login-form', Register ? 'register-form' : undefined)}>
                {Register ? 
                    <form>
                        
                        <DefaultHelmet 
                            Title='Register'
                        />
                        <Container>
                            <Box component="form" sx={{p: 1}} maxWidth={500}>
                                <Box sx={{
                                    '& > :not(style)': { width: '48%' }, display: 'flex', justifyContent: 'space-between'
                                }}>
                                    <TextField sx={{mb: 1}} fullWidth variant="outlined" label="First name" placeholder='First name' type="text" ></TextField>
                                    <TextField sx={{mb: 1}} fullWidth variant="outlined" label="Last name" placeholder='Last name' type="text" ></TextField>
                                    
                                </Box>
                                <Box sx={{
                                    '& > :not(style)': { mb: 1 }
                                }}>
                                    <TextField fullWidth variant="outlined" label="Username" placeholder='Username' type="text" ></TextField>
                                    <TextField fullWidth variant="outlined" label="Display name" placeholder='Display name' type="text" ></TextField>
                                    <TextField fullWidth variant="outlined" label="Email address" placeholder='Email address' type="text" ></TextField>
                                </Box>
                                <Box sx={{
                                    '& > :not(style)': { width: '48%' }, display: 'flex', justifyContent: 'space-between'
                                }}>
                                    <TextField sx={{mb: 1}} variant="outlined" label="Password" placeholder='Password' type="password" ></TextField>
                                    <TextField sx={{mb: 1}} variant="outlined" label="Repeat password" placeholder='Repeat password' type="password" ></TextField>
                                </Box>
                                
                                {/* Terms of service
                                <Box sx={{display: 'flex'}}>
                                    <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 16 }, height: 34, mt: '10px' }}/>
                                    <p>I accept the <a href="https://github.com">terms</a> of service</p>
                                </Box>*/}
                                <Link href="#" variant="body2">
                                    {'I dont have an account'}
                                </Link>

                                <Container style={{padding: '0'}}>
                                    <Button type="submit" sx={{m: 1, p: .5, pl: 4, pr: 4, mt: 3, mb: 3}} variant="contained">
                                        Submit
                                    </Button>
                                </Container>
                                </Box>
                        </Container>
                        
                    </form>
                :
                    <form>
                        <DefaultHelmet 
                            Title='Login'
                        />
                        <Container>
                            <h1>Login</h1>
                            <Box maxWidth={350}>
                                <TextField sx={{mb: 1.5}} fullWidth variant="outlined" label="Username" placeholder='Username' type="text" onChange={(e : any) => setUsername(e.target.value)}></TextField>
                                <TextField sx={{mb: 1.5}} fullWidth variant="outlined" label="Password" placeholder='Password'
                                    onChange={(e : any) => setPassword(e.target.value)}
                                    type={showPassword ? "text" : "password"}
                                    InputProps={{ // <-- This is where the toggle button is added.
                                        endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            >
                                            {showPassword ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                        )
                                    }}
                                ></TextField>
                                <Link href="#" variant="body2">
                                    {'I dont have an account'}
                                </Link>

                                <Container style={{padding: '0'}}>
                                    <Button type="submit" sx={{m: 1, p: .5, pl: 4, pr: 4, mt: 3, mb: 3}} variant="contained">
                                        Submit
                                    </Button>
                                </Container>

                            </Box>
                            
                            {/*
                            <FormGroup
                                style={{
                                    width: '300px'
                                }}
                            >
                                <TextInput 
                                    type="text"
                                    placeholder='Username..'
                                    onChange={(e? : React.ChangeEvent<HTMLInputElement>) => setUsername(e?.target.value)}
                                />
                                <TextInput 
                                    type="password"
                                    placeholder='Password..'
                                    onChange={(e? : React.ChangeEvent<HTMLInputElement>) => setPassword(e?.target.value)}
                                />
                            </FormGroup>
                            <Container style={{padding: '20px 0 0 0'}}>
                                <Button type="submit" theme='primary' style={{width: '200px', marginLeft: 'auto', marginRight: 'auto'}} styleType='default'>
                                    Login
                                </Button>
                            </Container>*/}
                        </Container>
                        
                    </form>
                }
            </Container>
        </section>
    );
}

export default Login;