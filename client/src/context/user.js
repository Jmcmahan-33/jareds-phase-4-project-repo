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

    // q: when I refresh the page, the user is not logged in.




    console.log("User with nested data", user)
    useEffect(() => {
        fetch('/me')
            .then(res => res.json())
            .then(data => {
                setUser(data)
                if(data.errors) {
                    // if there is not a user
                    setLoggedIn(false)
                    
                } else {
                    // if there is a user 
                    setLoggedIn(true)
                    fetchDoctors()
                }
                // data.errors ? setLoggedIn(false) : setLoggedIn(true)
            })
    }, [])

    const fetchDoctors = () => {
        fetch('/doctors')
            .then(res => res.json())
            .then(data => {
                console.log("Doctors!",data)
                setDoctors(data)
            })
    }

    const addDoctor = (newDoctor) => {
        fetch('/doctors', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newDoctor)
        })
        .then(res => res.json())
        .then(data => {
            setDoctors([...doctors, data])
        })
    }

  

    // const addAppointment = (newAppointment) => {
    //     console.log("new", newAppointment )
    //     fetch('/appointments', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(newAppointment)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         // console.log("Scheduled", data)
    //     })
    // }

    const addAppointment = (newAppointment) => {
        fetch('/appointments', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newAppointment)
        })
        .then(resp => resp.json())
        .then(data => {
            if (!data.errors) {
                // handleAddedPunchcard(data)
                // setFormFlag(false)
                // navigate('/appointments')
                setErrors([])
            } else {
                const errorLis = data.errors.map( e => <li>{e}</li>)
                setErrors(errorLis)
            }  
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
        <UserContext.Provider value={{ user, login, logout, signup, loggedIn, doctors, addDoctor, addAppointment, errors}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }