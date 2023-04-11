import React, { useContext } from "react";
import { UserContext } from "./context/user";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar() {
    // provide context from user context file 
    const { user, logout, loggedIn } = useContext(UserContext)
    const navigate = useNavigate()

    // create logged out function
    // fetch the route 
    // call the method and header

    const logoutUser = () => {
        fetch('/logout', {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        })
            .then(() => {
                logout()
                navigate('/')

            })
    }

    if (loggedIn) {
        return (
            <div>
                <h1>HELLO {user.username}</h1>
                <button onClick={logoutUser}>Log out</button>
            </div>

        )
    } else {
        return (
            <div>
                <NavLink to='/login'>
                    <button>Log in</button>
                </NavLink>
                <NavLink to='/signup'>
                    <button>Sign up</button>
                </NavLink>
            </div>

        )

    }

    // return (
    //     <div>
    //       {loggedIn ? (<div><h1>Hello: {user.username}</h1><button onClick={logoutUser}>Logout</button></div>) 
    //       : (<div> <NavLink to='/login'><button>Log in</button></NavLink><NavLink to='/signup'><button>Sign up</button></NavLink></div>) }
    //     </div>

    // )
}

export default NavBar