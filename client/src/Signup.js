import React, {useContext, useState} from "react"
import { UserContext } from "./context/user"
// provide useContext 


    // full_name
    // age 
    // username
    // password
    // password confirmation


function Signup() {

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
                <button>BUTTON</button>
            </form>

        </div>
    )
}

export default Signup