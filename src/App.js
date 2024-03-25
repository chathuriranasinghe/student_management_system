import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import StudentDetails from'./Pages/StudentDetails'; 
import CourseDetails from './Pages/CourseDetails';
import History from './Pages/History';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <Router>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/StudentDetails" element={< StudentDetails/>}/>
        <Route path="/CourseDetails" element={< CourseDetails/>}/>
        <Route path="/History" element={< History/>}/>
        <Route path="/Sidebar" element={< Sidebar/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;
