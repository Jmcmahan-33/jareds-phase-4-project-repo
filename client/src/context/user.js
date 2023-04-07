import React, {useState} from "react";
// create context 
const UserContext = React.createContext();

function UserProvider({children}) {
    return (
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}