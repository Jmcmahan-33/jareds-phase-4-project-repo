import React, { useContext, useState } from "react"
import { UserContext } from "./context/user"
// provide useContext 

function Login() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { login } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Log In To Account</h2>
                <label>Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                /> <br />
                <label>Passeword: </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> <br />
                <input type="submit" />
            </form>
            <ul>
                <h3>{error}</h3>
            </ul>

        </div>
    )
}

export default Login