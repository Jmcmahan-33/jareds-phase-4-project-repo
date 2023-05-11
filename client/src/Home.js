import React, { useContext } from "react";
import { UserContext } from "./context/user";

function Home() {
    const { user, loggedIn } = useContext(UserContext);

    if (loggedIn) {
        return (
            <div className="text-style">
                <h1>Welcome</h1>
                <h2>{user.full_name}</h2>
                <p className="quote">This application is designed to help you manage your appointments with ease. You can schedule appointments with your preferred doctors and receive reminders for your upcoming appointments. You can also view your appointment history and track your health progress over time. Sign up now to get started!</p>
            </div>
        );
    } else {
        return (
            <div className="text-style">
                <h2>Please Sign up or Login</h2>
            </div>
        );
    }
}

export default Home;
// final