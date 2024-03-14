// npm install axios
// npm install react-router-dom
// backend
// creating command
// npm Int

// installation commands
// json-server

// start nodemon index.js
// backend port 5000
// apis-render


import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Doctor from './Doctor';
import Patient from './Patient';
import Home from './Home';
import Navigation from './Navigation';
import './App.css';

function App(){
  
   return(
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/doctors" element={<Doctor/>} />
        <Route path="/patients" element={<Patient/>} />
      </Routes>
    </BrowserRouter>
   )
  }

export default App;