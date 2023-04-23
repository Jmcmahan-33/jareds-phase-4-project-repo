import { Button, Grid } from "@mui/material"
import { Paper } from "@mui/material"
import { useContext } from "react"
import { UserContext } from "./context/user"

// import { useState, useContext } from "react"
// import { UserContext } from "./context/user"

function AppointmentCard({ appointment }) {
    const {  deleteAppointment } = useContext(UserContext)

  
    function handleDelete() {
       console.log(appointment.id)
    }

    
   

    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                < ul className="appointment-cards" >
                    <h3>Appointment</h3>
                    {/* use serializer to be able to display doctor name  */}
                    {/* <li>Doctor: {appointment.doctor.name}</li> */}
                    <li> Appointment with:{appointment.doctor.name}</li>

                    <li>{appointment.reason_for_visit} </li>
                    <li>{appointment.date_field} </li>
                    {/* <li>Speciality: {appointment.speciality}</li> */}
                </ul >
                <Button onClick={handleDelete}>Cancel</Button>
            </Paper>
        </Grid>

    )
}

export default AppointmentCard