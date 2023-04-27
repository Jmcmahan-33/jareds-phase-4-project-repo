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
 

    // console.log("User with nested data", user)
    useEffect(() => {
        fetch('/me')
            .then(res => res.json())
            .then(data => {
                setUser(data)
                if(data.errors)  {
                    // if there is an error
                    setLoggedIn(false)
                    setErrors(data.errors) // set errors to the errors from the backend
                    
                } else {
                    // if there is a user 
                    setLoggedIn(true)
                    fetchDoctors()
                }
                // data.errors ? setLoggedIn(false) : setLoggedIn(true)
            })
    }, [])
    // console.log("User", user)

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
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newDoctor)
        })
        .then(res => res.json())
        .then(data => {
            setDoctors([...doctors, data])
            // console.log("new doctor", newDoctor)
        })
    }
    
const ondeleteAppointment= (id) => {
    const updatedAppointments = user.appointments.filter(apt => apt.id !== id)
    setUser(updatedAppointments)

}


const deleteAppointment= (id) => {
    fetch(`/appointments/${id}`, {
        method: "DELETE",
    })
        .then(setUser(ondeleteAppointment(id)))
        // .catch(error => console.log(error))
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
                const updatedUser = {...user, appointments: [...user.appointments, data]} //  user with the new appointment
                // setAppointments([...appointments, data])
                setUser(updatedUser)
                console.log("dataaaaa", data)
            })
    }
  


    console.log("Logged In", loggedIn)

    const login = (user) => {
        // set user to context
        setUser(user)
        fetchDoctors()
        // fetchAppointments()
        setLoggedIn(true)

    }

   

    const logout = () => {
        // if logged out, get rid of the user
        setUser({})
        setDoctors([])
        // setAppointments([])
        // if user is not logged in 
        setLoggedIn(false)
        navigate('/')

    }
    const signup = (user) => {
        setUser(user)
        fetchDoctors()
        // fetchAppointments()
        setLoggedIn(true)

    }


// remember to take out appointments in the return if appointments fetch is not used. 
    return (
        <UserContext.Provider value={{ user, login, logout, signup, loggedIn, doctors, addDoctor, addAppointment, deleteAppointment, errors}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }