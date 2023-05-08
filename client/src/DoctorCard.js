import { Grid } from "@mui/material"
import { Paper } from "@mui/material"

// done
function DoctorCard({ doctor }) {


    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                < ul className="doctor-cards" >
                    <li>Doctor: {doctor.name} </li>
                    <li>Speciality: {doctor.speciality}</li>
                    <li>Room: {doctor.room_number}</li>
                    <li>Rate: {doctor.rate}</li>
                    <li>notes: {doctor.notes}</li>
                </ul >
            </Paper>
        </Grid>

    )
}

export default DoctorCard


