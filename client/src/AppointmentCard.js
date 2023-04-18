import { Grid } from "@mui/material"
import { Paper } from "@mui/material"
// import { useState, useContext } from "react"
// import { UserContext } from "./context/user"

function AppointmentCard({ appointment }) {
    console.log("STATE TEST", appointment )


    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                < ul className="appointment-cards" >
                    <h3>My Appointment</h3>
                    <li>{appointment.reason_for_visit} </li>
                    {/* <li>Speciality: {appointment.speciality}</li> */}
                </ul >
            </Paper>
        </Grid>

    )
}

export default AppointmentCard