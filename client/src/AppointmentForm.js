import React, { useContext, useState } from "react"
import { UserContext } from "./context/user"

function AppointmentForm() {
    const [reason, setReason] = useState("")
    const { addAppointment } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        addAppointment({
            reason_for_visit: reason

        })
    }

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

                <button type="submit">Schedule</button>
            </form>
        </div>

    )

}

export default AppointmentForm
