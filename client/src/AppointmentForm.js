import React, { useContext, useState } from "react"
import { UserContext } from "./context/user"


function AppointmentForm({ addAppointmentFlag }) {
  const [reason, setReason] = useState("")
  const [date, setDate] = useState("")
  const [id, setId] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const { addAppointment, doctors, user, errors } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    addAppointment(
      {
        reason_for_visit: reason,
        date_field: date,
        doctor_id: id,
      },
      setSubmitted,
      addAppointmentFlag
    )
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

  const optionsList = removeDuplicates(doctors).map(doctor =>
    <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
  )

  if (!submitted) {
    return (
      <div>
        <h1>Schedule Appointment</h1>
        <form onSubmit={handleSubmit}>
          <div className="appointment-add-inputs" style={{ marginBottom: "20px" }}>
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
            <button type="submit">Schedule</button>
            <br />
            {errors}
          </div>
        </form>
      </div>
    )
  } else {
    return null;
  }
}

export default AppointmentForm

// final

