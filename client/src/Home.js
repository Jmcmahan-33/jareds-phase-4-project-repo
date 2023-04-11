// before refactor of login and signup 

import React, { useContext } from "react";
import { UserContext } from "./context/user";

// function Home() {
//     const { user, loggedIn } = useContext(UserContext)
//     if (loggedIn) {
//         return (

//             <div>
//                 <h1>{user.username} Homepage</h1>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <h1>MyHealth</h1>
//                 <h2>Sign up or Log In</h2>
//             </div>

//         )
//     }
// }
function Home() {
    const { user, loggedIn } = useContext(UserContext)
    if (!user) {
        return (
            <div>
                <h1>MyHealth</h1>
                <h2>Sign up or Log In</h2>
            </div>
        )
    } else {
        return (
            <div>
                <h1>{user.username} :User Homepage</h1>
            </div>


        )
    }
}


export default Home