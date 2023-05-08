// import Paper from '@mui/material/Paper';
// import Grid from "@mui/material/Grid";

import { useState, useContext } from "react"
import { UserContext } from "./context/user"
import DoctorForm from "./DoctorForm"
import DoctorCard from './DoctorCard';
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";



// done
function Doctors() {
    const { doctors, loggedIn } = useContext(UserContext)
    const [formFlag, setFormFlag] = useState(false)

    const addDoctorFlag = () => {
        setFormFlag(false)
    }
    console.log("doctor", doctors)

    if (loggedIn) {
        const doctorList = doctors.map(doctor =>
            
       
            <DoctorCard
                key={doctor.id} 
                doctor={doctor}
            />
        )
        
        return (
            <div className="list-container">
                <h1 className="list-header">Doctors</h1>
                <br />
                <div className="doctor-container">
                    <Container>
                        <Grid container spacing={5}>
                            {doctorList}
                        </Grid>
                    </Container>
                    {formFlag ?
                        <DoctorForm addDoctorFlag={addDoctorFlag} />
                        :
                        <Button variant="contained" onClick={() => setFormFlag(true)}>Add Doctor</Button>
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

export default Doctors