import { useState, useContext } from "react"
// import { useParams } from "react-router-dom"
import { UserContext } from "./context/user"
import DoctorForm from "./DoctorForm"


function Doctors() {
    const { doctors, loggedIn } = useContext(UserContext)
    const [formFlag, setFormFlag] = useState(false)
    // const params = useParams()

    const addDoctorFlag = () => {
        setFormFlag(false)
    }

    if (loggedIn) {
        const doctorList = doctors.map(doctor =>
            <li>{doctor.name}</li>
        )
        return (
            <div>
                <h1>Doctors:</h1>
                <br />
                {doctorList}
                <br />
                {formFlag ?
                    <DoctorForm addDoctorFlag={addDoctorFlag} />
                    :
                    <button onClick={() => setFormFlag(true)}>Add Doctor</button>
                }
            </div>
        )
    } else {
        return (
            <h1>Not Authorized, Please sign up or log in</h1>
        )
    }
}

export default Doctors