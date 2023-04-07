import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import NavBar from './NavBar';
import { UserProvider } from "./context/user"
import Home from './Home';

function App() {
  return (
    <div className="App">
      <h1>Hello World!!!</h1>
      <UserProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
