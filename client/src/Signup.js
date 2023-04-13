import React, { useContext, useState } from "react"
import { UserContext } from "./context/user"
import { useNavigate } from "react-router-dom"

import Grid from '@mui/material/Grid';
import { Paper, TextField } from "@mui/material";
import Button from '@mui/material/Button'
// provide useContext 


// full_name
// age 
// username
// password
// password confirmation


function Signup() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errorsList, setErrorsList] = useState([])
    const { signup } = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
                password_confirmation: passwordConfirmation
            })
        })
            .then(res => res.json())
            .then(user => {
                if (!user.errors) {
                    signup(user)
                    navigate('/')
                } else {
                    setUserName("")
                    setPassword("")
                    setPasswordConfirmation("")
                    const errorLis = user.errors.map(e => <li>{e}</li>)
                    setErrorsList(errorLis)
                }
            })
    }
    const paddingStyle = { padding: 20, height: "40vh", width: 260, margin: "20px auto" }


    return (
        <div>
            <Grid>
                <Paper elevation={10} style={paddingStyle}>
                    <form onSubmit={handleSubmit}>
                        <h2>Create Account</h2>
                        <TextField
                            fullWidth required
                            label="Username"
                            type="username"
                            id="username"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <br />
                        <br />
                        <TextField
                            fullWidth required
                            label="password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />
                        <br />
                        <TextField
                            fullWidth required
                            label="confirm password"
                            type="confirmpassword"
                            id="confirmpassword"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
                        <br />
                        <br />
                        <Button type="submit" variant="contained">
                            Sign up
                        </Button>
                    </form>
                </Paper>
            </Grid>
            <ul>
                {errorsList}
            </ul>

        </div>
    )
}

export default Signup