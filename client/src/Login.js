import React, {useContext, useState} from "react"
import { UserContext } from "./context/user"
// provide useContext 





function Login() {

    return (
        <div>
            <form>
                <label>Patient Name:</label>
                <input 
                type="text"
                /> <br/>
                <label>Username: </label>
                <input
                type="text"
                id="username"
                
                /> <br/>
                <button>BUTTON For Log in</button>
            </form>

        </div>
    )
}

export default Login