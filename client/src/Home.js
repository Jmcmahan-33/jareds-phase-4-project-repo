import React, { useContext } from "react";
import { UserContext } from "./context/user";

function Home() {
    const { user } = useContext(UserContext)
    if (!user) {
        return (<h3>Please login or sign up</h3>)
    } else {
        return (
            <div>
                <h1>{user.full_name}</h1>
            </div>
        )
    }
}

export default Home