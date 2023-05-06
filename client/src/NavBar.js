import React, { useContext } from "react";
import { UserContext } from "./context/user";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function NavBar() {
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
            <div className="nav-links">
                <NavLink to='/login'>
                    <Button variant="contained">Log in</Button>
                </NavLink>
                <NavLink to='/signup'>
                    <Button variant="contained">Sign up</Button>
                </NavLink>
            </div>
        )
    }
}

export default NavBar