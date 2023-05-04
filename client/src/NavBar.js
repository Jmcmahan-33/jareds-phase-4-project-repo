import React, { useContext } from "react";
import { UserContext } from "./context/user";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function NavBar() {
    // provide context from user context file 
    const { user, logout, loggedIn } = useContext(UserContext)
    const navigate = useNavigate()


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

    // where should I write a use effect to re render the component?

    // useEffect(() => {
    //     console.log("LOGGED", loggedIn)
    // }, [loggedIn])
    

    if (loggedIn && user) {
        return (
            <div className="user-name">
                <h3>HELLO {user.username}</h3>
                <Button variant= "text" onClick={logoutUser}>Log out</Button>
                <NavLink to='/doctors'>
                    <Button variant="text">Browse Doctors</Button>
                </NavLink>
                <NavLink to='/appointments'>
                    <Button variant="text">My Appointments</Button>
                </NavLink>
            </div>

        )
    } else {
        return (
            <div>
                <NavLink to='/login'>
                    <Button variant="text">Log in</Button>
                </NavLink>
                <NavLink to='/signup'>
                    <Button variant="text">Sign up</Button>
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