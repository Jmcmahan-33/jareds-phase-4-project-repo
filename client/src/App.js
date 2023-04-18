import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import NavBar from './NavBar';
import { UserProvider } from "./context/user"
import Home from './Home';
import Signup from './Signup'
import Login from './Login'
import Doctors from './Doctors';
import DoctorForm from './DoctorForm';
import Appointments from './Appointments';
import AppointmentForm from './AppointmentForm';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/appointments" element={<Appointments/>} />
          <Route path='/doctor-form' element={<DoctorForm />} />
          <Route path='/appointment-form' element={<AppointmentForm />} />
        </Routes>

      </UserProvider>
    </div>
  );
}

export default App;
