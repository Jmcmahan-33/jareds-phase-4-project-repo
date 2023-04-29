import { Button, Grid } from "@mui/material"
import { Paper } from "@mui/material"
import { useContext } from "react"
import { UserContext } from "./context/user"
import { useState } from "react"
import AppointmentEdit from "./AppointmentEdit"



function AppointmentCard({ appointment }) {
    const {  deleteAppointment } = useContext(UserContext)
    const [showForm, setShowForm] = useState(false)






 

    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                < ul className="appointment-cards" >
                    <h3>Appointment</h3>
                    <li> Appointment with:{appointment.doctor.name}</li>
                    <li>{appointment.reason_for_visit} </li>
                    <li>{appointment.date_field} </li>
            
                </ul >
                <Button onClick={() => setShowForm(true)}>Edit</Button>
                <Button onClick={()=> deleteAppointment(appointment.id)}>Cancel</Button>
                {showForm ? <AppointmentEdit appointment={appointment} setShowForm={setShowForm} /> : null}
            </Paper>
        </Grid>

    )
}

export default AppointmentCard