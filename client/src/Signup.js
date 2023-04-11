import React, {useContext, useState} from "react"
import { UserContext } from "./context/user"
import { useNavigate } from "react-router-dom"
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
    const {signup} = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password,
                password_confirmation: passwordConfirmation
            })
        })
        .then(res => res.json())
        .then(user => {
            if(!user.errors) {
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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Create Account</h2>
                <label>Username:</label>
                <input 
                type="text"
                id="username"
                value={username}
                onChange= {(e)=> setUserName(e.target.value)}
                /> <br/>
                <label>Passeword: </label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                /> <br/>
                <label>Confirm Password: </label>
                <input
                type="password"
                id="confirmpassword"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                /> <br/>
                <input type="submit"/>
            </form>
            <ul>
                {errorsList}
            </ul>

        </div>
    )
}

export default Signup