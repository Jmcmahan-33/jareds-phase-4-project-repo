import React, { useContext, useState } from "react"
import { UserContext } from "./context/user"
// done
function DoctorForm() {
    const [name, setName] = useState("")
    const [speciality, setSpeciality] = useState("")
    const [room, setRoom] = useState("")
    const [rate, setRate] = useState("")
    const [notes, setNotes] = useState("")
    const { addDoctor, errors, setErrors } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            setErrors([...errors, "Please provide Information."])
            return
        }
        addDoctor({
            name: name,
            speciality: speciality,
            room_number: room,
            rate: rate,
            notes: notes

        })

        setName("")
        setSpeciality("")
        setRoom("")
        setRate("")
        setNotes("")
    }

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
                {errors.length > 0 && <p>{errors[errors.length - 1]}</p>}
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
            </form>
        </div>

    )

}

export default DoctorForm