import './App.css';
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login'; 
import Navbar from './Navbar';

function App() {
  return (
    
     <div>
        <Home/>
         <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
     </div>
    
  );
}

export default App;