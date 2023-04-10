import React, {useState, useEffect} from "react";
// create context 
const UserContext = React.createContext();

// before refactor of login and signup 

function UserProvider({children}) {
    // set state to empty object to get it. 
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(data => {
            setUser(data)
            console.log("DATA", data)
        })

    }, [])

    const login = () => {

    }

    const logout = () => {
        
    }
    const signup = () => {

    }



    return (
        <UserContext.Provider value={{user, login,logout,signup}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}