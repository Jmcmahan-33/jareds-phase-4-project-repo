// done 
import { useState, useContext } from "react"
import { UserContext } from "./context/user"
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import AppointmentCard from "./AppointmentCard";
import AppointmentForm from "./AppointmentForm";
import AppointmentEdit from "./AppointmentEdit";
import { Button } from "@mui/material";


function Appointments() {
    const { user, loggedIn } = useContext(UserContext)
    const [formFlag, setFormFlag] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    const addAppointmentFlag = () => {
        setFormFlag(false)
    }

    const handleEditClick = (appointment) => {
        setSelectedAppointment(appointment);
        setShowEditForm(true);
    }

    const handleEditClose = () => {
        setSelectedAppointment(null);
        setShowEditForm(false);
    }

    if (loggedIn) {
        const userAppointmentList = user?.appointments?.map(appointment =>

            <AppointmentCard
                key={appointment.id}
                appointment={appointment}
                id={appointment.id}
                onEditClick={() => handleEditClick(appointment)}
            />
        )
        return (
            <div className="appointment-list">
                <h1 className="list-header">Appointments</h1>
                <br />
                <div>
                    {showEditForm && (
                        <AppointmentEdit appointment={selectedAppointment} onClose={handleEditClose} />
                    )}
                    <Container>
                        <Grid container spacing={5}>
                            {userAppointmentList}
                        </Grid>
                    </Container>
                    <br />
                    {formFlag ?
                        <AppointmentForm addAppointmentFlag={addAppointmentFlag} />
                        :
                        <Button variant="contained"  onClick={() => setFormFlag(true)}>Schedule Appointment</Button>
                    }
                </div>
            </div>
        )
    } else {
        return (
            <h1>Not Authorized, Please sign up or log in</h1>
        )
    }
}

export default Appointments;



