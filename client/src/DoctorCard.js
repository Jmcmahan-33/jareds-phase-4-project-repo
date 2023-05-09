// import { Grid } from "@mui/material"
// import { Paper } from "@mui/material"

// // done
// function DoctorCard({ doctor }) {


//     return (
//         <Grid item xs={3}>
//             <Paper elevation={3}>
//                 < ul className="doctor-cards" >
//                     <li>Doctor: {doctor.name} </li>
//                     <li>Speciality: {doctor.speciality}</li>
//                     <li>Room: {doctor.room_number}</li>
//                     <li>Rate: {doctor.rate}</li>
//                     <li>notes: {doctor.notes}</li>
//                 </ul >
//             </Paper>
//         </Grid>

//     )
// }

// export default DoctorCard

import { Grid } from "@mui/material";
import { Paper } from "@mui/material";

function DoctorCard({ doctor }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper elevation={3} className="doctor-card">
        <ul className="doctor-card-list">
          <li className="doctor-name">{doctor.name}</li>
          <li className="doctor-speciality">{doctor.speciality}</li>
          <li className="doctor-room">Room Number: {doctor.room_number}</li>
          <li className="doctor-rate">Rate: ${doctor.rate}</li>
          <li className="doctor-notes">Notes: "{doctor.notes}"</li>
        </ul>
      </Paper>
    </Grid>
  );
}

export default DoctorCard;


