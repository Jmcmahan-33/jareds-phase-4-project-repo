import React, { useState, useEffect } from "react";
// create context 
const UserContext = React.createContext();

// before refactor of login and signup 

function UserProvider({ children }) {
    // set state to empty object to get it. 
    const [user, setUser] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        fetch('/me')
            .then(res => res.json())
            .then(data => {
                setUser(data)
                // if errors come back from route then set logged state to false(didnt get a user back)
                // otherwise if there is a user back from the route then true 
                // checks the show route if there is a user in the session hash. 
                // data.error ? setLoggedIn(false) : setLoggedIn(true)
                console.log("DATA", data)
            })

    }, [])

    const login = (user) => {
        // set user to context
        setUser(user)
        setLoggedIn(true)

    }

    const logout = () => {
        // if logged out, get rid of the user
        setUser({})
        // if user is not logged in 
        setLoggedIn(false)

    }
    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)

    }



    return (
        <UserContext.Provider value={{ user, login, logout, signup, loggedIn }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }