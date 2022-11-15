import React from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import TimeLog from './TimeLog';
import Pomodoro from './Pomodoro';
import Attendance from './Attendance';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/TimeLog" element={<TimeLog/>}></Route>
        <Route path="/Pomodoro" element={<Pomodoro/>}></Route>
        <Route path="/Attendance" element={<Attendance/>}></Route>
      </Routes>
    </>
  );

}

export default App;
