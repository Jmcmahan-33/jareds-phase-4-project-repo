// before refactor of login and signup 
// done 

import React, { useContext } from "react";
import { UserContext } from "./context/user";

function Home() {
    const { user, loggedIn } = useContext(UserContext)

    // console.log("USER", user)
    if (loggedIn) {
        return (
            <div className="text-style">
                <h1>Welcome</h1>
                <h2>{user.full_name}</h2>
            </div>
        )
    } else {
        return (
            <div className="text-style">
                <h2>Please Sign up or Login</h2>
            </div>
        )
    }
}

export default Home