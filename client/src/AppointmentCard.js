// import { Button, Grid } from "@mui/material"
// import { Paper } from "@mui/material"
// import { useContext } from "react"
// import { UserContext } from "./context/user"
// import { useState } from "react"
// import AppointmentEdit from "./AppointmentEdit"



// function AppointmentCard({ appointment }) {
//     const { deleteAppointment } = useContext(UserContext)
//     const [showForm, setShowForm] = useState(false)
//     // const [selectedAppt, setSelectedAppt] = useState(appointment)








//     return (
//         <Grid item xs={3}>
//             <Paper elevation={3}>
//                 <AppointmentEdit appointmentId={appointment.id} />
//                 < ul className="appointment-cards" >
//                     <h3>Appointment</h3>
//                     <li> Appointment with:{appointment.doctor.name}</li>
//                     <li>{appointment.reason_for_visit} </li>
//                     <li>{appointment.date_field} </li>

//                 </ul >
//                 <Button onClick={() => setShowForm(true)}>Edit</Button>
//                 <Button onClick={() => deleteAppointment(appointment.id)}>Cancel</Button>

//             </Paper>
//         </Grid>

//     )
// }

// export default AppointmentCard

import { Button, Grid } from "@mui/material"
import { Paper } from "@mui/material"
import { useContext, useState } from "react"
import { UserContext } from "./context/user"
import AppointmentEdit from "./AppointmentEdit"

function AppointmentCard({ appointment }) {
    const { deleteAppointment } = useContext(UserContext)
    const [showForm, setShowForm] = useState(false)

    const handleEditClick = () => {
        setShowForm(true)
    }
    const handleEditClose = () => {
        setShowForm(false)
    }

    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                {showForm ? (
                    <AppointmentEdit appointment={appointment} onClose = {handleEditClose} />
                ) : (
                    <ul className="appointment-cards">
                        <h3>Appointment</h3>
                        <li> Appointment with:{appointment.doctor.name}</li>
                        <li>{appointment.reason_for_visit} </li>
                        <li>{appointment.date_field} </li>
                    </ul>
                )}
                <Button onClick={handleEditClick}>Edit</Button>
                <Button onClick={() => deleteAppointment(appointment.id)}>Cancel</Button>
            </Paper>
        </Grid>
    )
}

export default AppointmentCard
