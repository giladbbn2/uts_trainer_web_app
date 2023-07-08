import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { loginEmail } from "../services/userService";

export const LoginPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const performLoginEmail = async () => {
        try {
            const result = await loginEmail(email, password);
            if (result) {
                navigate("/user-exercises");
            }
        } catch (error) {
            // possible errors: network problems
        }
    };

    return (
        <Box component="form" noValidate autoComplete="off">
            <div>
                <h1>Login</h1>
                <br />
                <TextField required fullWidth id="email" label="Email" variant="standard" onChange={(e) => setEmail(e.target.value)}/>
                <TextField required fullWidth id="password" label="Password" variant="standard" type="password" onChange={(e) => setPassword(e.target.value)} />
                <br />
                <div>
                    <Button variant="contained" onClick={performLoginEmail}>Submit</Button>
                </div>
            </div>
        </Box>
    );
};