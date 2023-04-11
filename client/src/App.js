import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import NavBar from './NavBar';
import { UserProvider } from "./context/user"
import Home from './Home';
import Signup from './Signup'
import Login from './Login'

function App() {
  return (
    <div className="App">
      <UserProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
