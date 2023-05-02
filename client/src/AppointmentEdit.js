import { Button } from "@mui/material";
import { useContext, useState } from "react"; 
import { UserContext } from "./context/user";

function AppointmentEdit(appointmentId) {
    const {updateAppointment} = useContext(UserContext)

    const [aptInfo, setAptInfo] = useState("")
    const [isEditing, setIsEditing] = useState(false)

    // q: show me how to pass in the appointment id to the edit form


  
const handleSubmit = (e) => {
    e.preventDefault()
    updateAppointment(appointmentId, {
        date_field: aptInfo

    })
    setIsEditing(false)
}






    if(!isEditing) {
        return (
            <div>
                <h2>Edit Appointment</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        name="date_field"
                        type="date"
                        placeholder="Date"
                        value= {aptInfo}
                        // value={user.appointment.date_field}
                        onChange={(e) => setAptInfo(e.target.value)}
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

}

export default AppointmentEdit;