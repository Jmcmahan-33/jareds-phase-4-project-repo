import React, { useContext, useState } from "react"
import { UserContext } from "./context/user"

// q:write a map method to display doctors in select tag with out duplicating.




function AppointmentForm() {
    const [reason, setReason] = useState("")
    const [date, setDate] = useState("")
    const [id, setId] = useState("")
    
    const {  addAppointment, doctors, user } = useContext(UserContext)
   

    const handleSubmit = (e) => {
        e.preventDefault()
        addAppointment({
            reason_for_visit: reason,
            date_field: date,
            doctor_id: id,

        })
        setReason("")
        setDate("")
        setId("")
    }



    

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
    console.log("!!!",doctors)

    const optionsList = removeDuplicates(doctors).map(doctor =>
        <option key={doctor.id} value={doctor.id}>{doctor.name}</option>)


    console.log("optionsList", optionsList)



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
                <br/>

                <button type="submit">Schedule</button>
            </form>
        </div>

    )

}

export default AppointmentForm
