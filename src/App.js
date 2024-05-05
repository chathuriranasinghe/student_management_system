import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import StudentDetails from'./Pages/StudentDetails'; 
import CourseDetails from './Pages/CourseDetails';
import History from './Pages/History';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Sidebar from './Components/Sidebar';
import Admin from './Components/Admin';
import EditStudent from'./Pages/EditStudent'; 
import EditCourse from './Pages/EditCourse';

function App() {
  return (
    <Router>
        <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/StudentDetails" element={< StudentDetails/>}/>
        <Route path="/CourseDetails" element={< CourseDetails/>}/>
        <Route path="/History" element={< History/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Sidebar" element={< Sidebar/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/EditStudent" element={< EditStudent/>}/>
        <Route path="/EditCourse" element={< EditCourse/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;
