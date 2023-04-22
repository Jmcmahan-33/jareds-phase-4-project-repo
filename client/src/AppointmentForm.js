import React, { useContext, useState } from "react"
import { UserContext } from "./context/user"

function AppointmentForm() {
    const [reason, setReason] = useState("")
    const [date, setDate] = useState("")
    const [selectedDoctor, setSelectedDoctor] = useState("")
    const {  addAppointment, doctors } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        addAppointment({
            reason_for_visit: reason,
            doctor_id: selectedDoctor,
            date_field: date

        })
        console.log("Selected", selectedDoctor)
    }

    console.log("Outside of function", selectedDoctor)

   

    

    const optionsList = doctors.map(doctor =>
        <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
        
    )

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
                    value={selectedDoctor.doctor_id}
                    onChange={(e) => setSelectedDoctor(e.target.value)}

                >
                    {optionsList}
                </select>
                <br/>

                <button type="submit">Schedule</button>
            </form>
        </div>

    )

}

export default AppointmentForm
