import React, { useContext, useState} from "react"
import { UserContext } from "./context/user"
// done
function AppointmentForm() {
    const [reason, setReason] = useState("")
    const [date, setDate] = useState("")
    const [id, setId] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const { addAppointment, doctors, user, errors, setErrors } = useContext(UserContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!reason || !date) {
            setErrors([...errors, "Please provide Information."])
            return
        }
        addAppointment({
            reason_for_visit: reason,
            date_field: date,
            doctor_id: id,
        })
        setSubmitted(true)
    }

    const resetForm = () => {
        setSubmitted(false);
      };


    const removeDuplicates = (duplicates) => {
        const flag = {};
        const unique = []
        duplicates.forEach(doctor => {
            if (!flag[doctor.id]) {
                flag[doctor.id] = true;
                unique.push(doctor);
            }
        });
        return unique;
    }
    console.log("!!!", doctors)

    const optionsList = removeDuplicates(doctors).map(doctor =>
        <option key={doctor.id} value={doctor.id}>{doctor.name}</option>)


    console.log("optionsList", optionsList)


    if (!submitted) {
    return (
        <div>
            <h1>Schedule Appointment</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Reason for visit"
                    type="text"
                    id="reason_for_visit"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                />
                <br />
                <input
                    placeholder="date"
                    type="date"
                    id="date_field"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                <br />
                <select
                    name="doctor_id"
                    value={user.doctor_id}
                    onChange={(e) => setId(e.target.value)}

                >
                    {optionsList}
                </select>
                <br />
                {errors}
                <br />
                <button type="submit">Schedule</button>
            </form>
        </div>

    )
    } else {
        return (
            <div>
                <h1>Appointment Scheduled!</h1>
                <button onClick={resetForm}>Schedule Another</button>
            </div>
        )
    }

}

export default AppointmentForm
