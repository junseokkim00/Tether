import React from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom";
import NavBar from './NavBar';
import Home from './pages/Home';
import TimeLog from './pages/TimeLog';
import Pomodoro from './pages/Pomodoro';
import Attendance from './pages/Attendance';
import Footer from './Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/TimeLog" element={<TimeLog/>}></Route>
          <Route path="/Pomodoro" element={<Pomodoro/>}></Route>
          <Route path="/Attendance" element={<Attendance/>}></Route>
          <Route path="/Contactus" element={<Contact/>}></Route>
        </Routes>
      <Footer/>
    </>
  );

}

export default App;
