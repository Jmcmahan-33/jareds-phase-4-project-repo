import { Button, Grid } from "@mui/material"
import { Paper } from "@mui/material"
import { useContext } from "react"
import { UserContext } from "./context/user"



function AppointmentCard({ appointment }) {
    const {  deleteAppointment } = useContext(UserContext)




 

    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                < ul className="appointment-cards" >
                    <h3>Appointment</h3>
                    <li> Appointment with:{appointment.doctor.name}</li>
                    <li>{appointment.reason_for_visit} </li>
                    <li>{appointment.date_field} </li>
            
                </ul >
                <Button onClick={()=> deleteAppointment(appointment.id)}>Cancel</Button>
            </Paper>
        </Grid>

    )
}

export default AppointmentCard