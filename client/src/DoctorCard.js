import { Grid } from "@mui/material"
import { Paper } from "@mui/material"
// import { useState, useContext } from "react"
// import { UserContext } from "./context/user"

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


//     < ul className = "doctor-cards" >
//         <li>{doctor.name} </li>
//         <li>{doctor.notes}</li>
//     </ul >

// return (
//     <div>
//         <h1>Doctors:</h1>
//         <Grid item xs={3}>
//             <Paper elevation={3}>
//                 <br />
//                 {doctorList}
//                 <br />
//                 {formFlag ?
//                     <DoctorForm addDoctorFlag={addDoctorFlag} />
//                     :
//                     <button onClick={() => setFormFlag(true)}>Add Doctor</button>
//                 }
//             </Paper>
//         </Grid>
//     </div>

// )