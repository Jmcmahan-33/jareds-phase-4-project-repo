
import { useState, useContext } from "react"
import { UserContext } from "./context/user"
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import AppointmentCard from "./AppointmentCard";
import AppointmentForm from "./AppointmentForm";


function Appointments() {
    const { user, loggedIn } = useContext(UserContext)
    const [formFlag, setFormFlag] = useState(false)

    

    const addAppointmentFlag = () => {
        setFormFlag(false)
    }

    if (loggedIn) {
        const userAppointmentList = user?.appointments?.map(appointment =>

            <AppointmentCard
                key={appointment.id}
                appointment={appointment}
                id={appointment.id}
            />
        )
        return (
            <div>
                <h1>Appointments:</h1>
                <br />
                <div className="appointment-container">
                    <Container>
                        <Grid container spacing={5}>
                            {userAppointmentList}
                        </Grid>
                    </Container>
                    {formFlag ?
                        <AppointmentForm addAppointmentFlag={addAppointmentFlag} />
                        :
                        <button onClick={() => setFormFlag(true)}>Schedule Appointment</button>
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

export default Appointments


