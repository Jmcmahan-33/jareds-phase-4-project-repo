import React, { useContext, useState } from "react"
import { UserContext } from "./context/user"
import { useNavigate } from "react-router-dom"
import Grid from '@mui/material/Grid';
import { Paper, TextField } from "@mui/material";
import Button from '@mui/material/Button'
// done
function Signup() {
    const [fullName, setFullName] = useState("")
    const [age, setAge] = useState("")
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
                full_name: fullName,
                age: age,
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
    const paddingStyle = { padding: 55, height: "60vh", width: 260, margin: "20px auto" }
    // may remove required!

    return (
        <div>
            <Grid>
                <Paper elevation={10} style={paddingStyle}>
                    <form  onSubmit={handleSubmit}>
                        <h2>Create Account</h2>
                        <TextField
                            fullWidth 
                            label="Full Name"
                            type="text"
                            id="full_name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <br />
                        <br />
                        <TextField
                            fullWidth 
                            label="Age"
                            type="text"
                            id="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        <br />
                        <br />
                        <TextField
                            fullWidth 
                            label="Username"
                            type="username"
                            id="username"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <br />
                        <br />
                        <TextField
                            fullWidth
                            label="password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />
                        <br />
                        <TextField
                            fullWidth 
                            label="confirm password"
                            type="password"
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