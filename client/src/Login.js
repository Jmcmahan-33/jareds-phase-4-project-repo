import React, { useContext, useState } from "react"
import { UserContext } from "./context/user"
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid';
import { Avatar, Paper, TextField } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


// provide useContext 

function Login() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { login } = useContext(UserContext)
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify({ username, password })
        })
            .then(res => res.json())
            .then((user) => {
                console.log("usertesting", user)
                if (!user.error) {
                    login(user)
                    navigate('/')
                } else {
                    setUserName("")
                    setPassword("")
                    const errorLi = <li>{user.error}</li>
                    setError(errorLi)
                }
            })

    }
    console.log("login error", error)

    const paddingStyle = { padding: 20, height: "40vh", width: 260, margin: "20px auto" }
    const avatarStyle = { backgroundColor: "blue" }
    return (
        <div>
            <Grid>
                <Paper elevation={10} style={paddingStyle}>
                    <form onSubmit={handleSubmit}>
                        <Grid align="center">
                            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        </Grid>
                        <h2>User Login</h2>
                        <TextField
                            variant="outlined"
                            label="Username"
                            type="username"
                            placeholder="Enter username"
                            fullWidth required
                            id="username"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                        /> 
                        <br />
                        <br />
                        <TextField
                            variant="outlined"
                            label="password"
                            type="password"
                            placeholder="Enter password"
                            fullWidth required
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        /> 
                        <br />
                        <br />
                        <Button type="submit" variant="contained">
                            Log in
                        </Button>
                    </form>
                </Paper>
            </Grid>
            <ul>
                <h3>{error}</h3>
            </ul>

        </div>
    )
}

export default Login