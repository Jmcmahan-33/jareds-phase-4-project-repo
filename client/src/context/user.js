import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// create context 
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
                    // if there is an error
                    setLoggedIn(false)
                    setErrors(data.errors) // set errors to the errors from the backend

                } else {
                    // if there is a user 
                    setLoggedIn(true)
                    fetchDoctors()
                }
            })
    }, [])


    const fetchDoctors = () => {
        fetch('/doctors')
            .then(res => res.json())
            .then(data => {
                // console.log("Doctors!",data)
                setDoctors(data)
            })
    }
    // fix add doctor
    const addDoctor = (newDoctor) => {
        fetch('/doctors', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newDoctor)
        })
            .then(res => res.json())
            .then(data => {
                setDoctors([...doctors, data])
                // console.log("new doctor", newDoctor)
            })
    }

    const addAppointment = (newAppointment) => {
        // const updatedUser = {...user, appointments: [...user.appointments, newAppointment]}
        fetch('/appointments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAppointment)
        })
            .then(res => res.json())
            .then(data => {
                const updatedUser = { ...user, appointments: [...user.appointments, data] } //  user with the new appointment
                setUser(updatedUser)
                console.log("data add", data)
            })
    }


    const ondeleteAppointment = (id) => {
        const deletedAppointments = user.appointments.filter(apt => apt.id !== id) // filter out the appointment that was deleted
        const updatedUser = { ...user, appointments: deletedAppointments }  // update the user with the new appointments
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
    // q: fix the 404 Not Found error for Patch
    // a: the id was not being passed in correctly
    // q:where is the id not being passed in correctly?



    const handleAppointmentInfo = (updatedAppointment) => {
        const updatedAppointments = user.appointments.map(apt => {
            if (apt.id === updatedAppointment.id) {
                console.log("showid",updatedAppointment.id)
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



    console.log("Logged In", loggedIn)

    const login = (user) => {
        // set user to context
        setUser(user)
        fetchDoctors()
        setLoggedIn(true)

    }

    const logout = () => {
        // if logged out, get rid of the user
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
        <UserContext.Provider value={{ user, login, logout, signup, loggedIn, doctors, addDoctor, addAppointment, updateAppointment, deleteAppointment, errors }}>
            {children}
        </UserContext.Provider>
    )
}
export { UserContext, UserProvider }