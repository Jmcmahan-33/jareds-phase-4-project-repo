// done
import { Button, Grid } from "@mui/material"
import { Paper } from "@mui/material"
import { useContext } from "react"
import { UserContext } from "./context/user"

function AppointmentCard({ appointment, onEditClick }) {
    const { deleteAppointment } = useContext(UserContext);
  
    const handleEditClick = () => {
      onEditClick(appointment);
    };
  
    const handleDeleteClick = () => {
      deleteAppointment(appointment.id);
    };
  
    return (
      <Grid item xs={3}>
        <Paper elevation={3}>
          <ul className="appointment-cards">
            <h3>Appointment</h3>
            <li> Appointment with:{appointment?.doctor?.name}</li>
            <li>{appointment.reason_for_visit} </li>
            <li>{appointment.date_field} </li>
          </ul>
          <Button onClick={handleEditClick}>Edit</Button>
          <Button onClick={handleDeleteClick}>Cancel</Button>
        </Paper>
      </Grid>
    );
  }
  
    export default AppointmentCard;
