import { Button } from "@mui/material";
import { useContext } from "react"; 
import { UserContext } from "./context/user";

function AppointmentEdit() {
    const {user} = useContext(UserContext)


    if(!user.appointment) 
    // may put in return null after line 9
    return (
        <div>
            <h2>Edit Appointment</h2>
            <form>
                <input
                    name="date_field"
                    type="date"
                    placeholder="Date"
                />
                <br/>
                <br/>
                <Button 
                variant="contained" 
                type="submit"
                >
                Change Date
                </Button>
            </form>
        </div>
    )
}

export default AppointmentEdit;