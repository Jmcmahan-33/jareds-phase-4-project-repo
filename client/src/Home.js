// before refactor of login and signup 

import React, { useContext } from "react";
import { UserContext } from "./context/user";

function Home() {


    const { user, loggedIn } = useContext(UserContext)

    console.log("USER", user)
    if (loggedIn) {
        return (
            <div className="text-style">
                <h1>{user.username} Homepage</h1>
                <h2>List of same doctors for every user</h2>
            </div>
        )
    } else {
        return (
            <div className="text-style">
                <h1>My Doc App</h1>
                <h2>Sign up or Log In</h2>
            </div>
        )
    }
}


// Object.keys(user).length === 0

export default Home