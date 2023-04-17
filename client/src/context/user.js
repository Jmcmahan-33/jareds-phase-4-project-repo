import React, { useState, useEffect } from "react";
// create context 
const UserContext = React.createContext();

// before refactor of login and signup 

function UserProvider({ children }) {
    // set state to empty object to get it. 
    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('/me')
            .then(res => res.json())
            .then(data => {
                setUser(data)
                if(data.errors) {
                    // if there is not a user
                    setLoggedIn(false)
                } else {
                    // if there is a user 
                    setLoggedIn(true)
                    fetchDoctors()
                }
                // data.errors ? setLoggedIn(false) : setLoggedIn(true)
            })
    }, [])

    const fetchDoctors = () => {
        fetch('/doctors')
            .then(res => res.json())
            .then(data => {
                console.log("Doctors!",data)
                setDoctors(data)
            })
    }

    const addDoctor = (newDoctor) => {
        fetch('doctors', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newDoctor)
        })
        .then(res => res.json())
        .then(data => {
            setDoctors([...doctors, data])
        })
    }

    console.log("Logged In", loggedIn)

    const login = (user) => {
        // set user to context
        setUser(user)
        fetchDoctors()
        setLoggedIn(true)

    }

    const logout = () => {
        // if logged out, get rid of the user
        setUser({})
        setDoctors([])
        // if user is not logged in 
        setLoggedIn(false)

    }
    const signup = (user) => {
        setUser(user)
        fetchDoctors()
        setLoggedIn(true)

    }



    return (
        <UserContext.Provider value={{ user, login, logout, signup, loggedIn, doctors, addDoctor}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }