import React, { useContext, useState } from "react"
import { UserContext } from "./context/user"
// done
function DoctorForm({ addDoctorFlag }) {
    const [name, setName] = useState("")
    const [speciality, setSpeciality] = useState("")
    const [room, setRoom] = useState("")
    const [rate, setRate] = useState("")
    const [notes, setNotes] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const { addDoctor, errors } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        addDoctor({
            name: name,
            speciality: speciality,
            room_number: room,
            rate: rate,
            notes: notes

        }, setSubmitted, addDoctorFlag)
    }

    if (!submitted) {
        return (
            <div>
                <h1>Add Doctor</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="name"
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        placeholder="speciality"
                        type="text"
                        id="speciality"
                        value={speciality}
                        onChange={(e) => setSpeciality(e.target.value)}
                    />
                    <input
                        placeholder="room"
                        type="text"
                        id="room_number"
                        value={room}
                        onChange={(e) => setRoom(e.target.value)}
                    />
                    <input
                        placeholder="rate"
                        type="text"
                        id="rate"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                    />
                    <input
                        placeholder="notes"
                        type="text"
                        id="notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                    <button type="submit">Add Doc</button>
                    {errors}
                </form>
            </div>
        )
    } else {
        return null
    }
}

export default DoctorForm


