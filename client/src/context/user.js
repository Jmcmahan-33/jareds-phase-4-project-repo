// done
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

function UserProvider({ children }) {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [doctors, setDoctors] = useState([])
    const [errors, setErrors] = useState([])

    useEffect(() => {
        fetch('/me')
            .then(res => res.json())
            .then(data => {
                setUser(data)
                if (data.errors) {
                    setLoggedIn(false)
                    setErrors(data.errors)
                } else {
                    setLoggedIn(true)
                    fetchDoctors()
                }
            })
    }, [])

    const fetchDoctors = () => {
        fetch('/doctors')
            .then(res => res.json())
            .then(data => {
                setDoctors(data)
            })
    }

    const addDoctor = (newDoctor, setSubmitted, addDoctorFlag) => {
        fetch('/doctors', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newDoctor)
        })
            .then(res => res.json())
            .then(data => {
                if (data.errors) {
                    console.log("testing again", errors)
                    setErrors(data.errors)
                } else {
                    setDoctors([...doctors, data])
                    setErrors([])
                    setSubmitted(true)
                    addDoctorFlag(true)
                }
            })
            .catch(error => console.log(error))
    }

    const addAppointment = (newAppointment, setSubmitted, addAppointmentFlag) => {
        fetch('/appointments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAppointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.errors) {
                    setErrors(data.errors)
                } else {
                    const updatedUser = { ...user, appointments: [...user.appointments, data] }
                    setUser(updatedUser)
                    setErrors([])
                    setSubmitted(true)
                    addAppointmentFlag(true)
                }
            })
            .catch(error => console.log(error))
    }



    const ondeleteAppointment = (id) => {
        const deletedAppointments = user.appointments.filter(apt => apt.id !== id)
        const updatedUser = { ...user, appointments: deletedAppointments }
        return updatedUser
    }

    const deleteAppointment = (id) => {
        fetch(`/appointments/${id}`, {
            method: "DELETE",
        })
            .then(() => {
                const updatedUser = ondeleteAppointment(id)
                setUser(updatedUser)
            })
            .catch(error => console.log(error))
    }



    const handleAppointmentInfo = (updatedAppointment) => {
        const updatedAppointments = user.appointments.map(apt => {
            if (apt.id === updatedAppointment.id) {
                console.log("showid", updatedAppointment.id)
                return updatedAppointment
            } else {
                return apt
            }
        })
        const updatedUser = { ...user, appointments: updatedAppointments }
        setUser(updatedUser)
    }

    const updateAppointment = (id, appointment) => {
        const url = `/appointments/${id}`;
        console.log('Updating appointment with ID', id, 'at URL', url);
        fetch(url, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(appointment)
        })
            .then((res) => res.json())
            .then((data) => handleAppointmentInfo(data))
            .catch((error) => console.log(error));
    }

    const login = (user) => {
        setUser(user)
        fetchDoctors()
        setLoggedIn(true)
        setErrors([])

    }

    const logout = () => {
        setUser({})
        setDoctors([])
        setLoggedIn(false)
        navigate('/')
    }

    const signup = (user) => {
        setUser(user)
        fetchDoctors()
        setLoggedIn(true)
    }

    return (
        <UserContext.Provider value={{ user, login, logout, signup, loggedIn, doctors, addDoctor, addAppointment, updateAppointment, deleteAppointment, errors, setErrors }}>
            {children}
        </UserContext.Provider>
    )
}
export { UserContext, UserProvider }