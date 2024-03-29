import React from 'react';
import kdu_logo from '../images/kdu_logo.png';
import home from '../images/home.png';
import student from '../images/student.png';
import course from '../images/course.png';
import history from '../images/history.png';
import logout from '../images/logout.png';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div>
      <div className="w-full h-screen bg-[#B8F6FA] ">
        <div className='w-full h-32 bg-[#97CDD0] relative flex flex-col space-y-0.4 items-center'>
          <div className='mt-4'>
            <img src={kdu_logo} alt='KDU Logo' className='w-20 h-auto'/>
          </div>
          <div>
            <h1 className='text-black origin-left font-bold text-xl duration-300 '>Student Management System</h1> 
          </div>
        </div>
      <div className='flex flex-col items-start pt-8  ml-3 space-y-4'>
        <Link to='/Home' className='relative flex  space-x-6  items-center py-2 pl-2 w-11/12 hover:bg-[#009DCE] hover:scale-105 rounded-md transition duration-150 ease-in-out'>
          <img src= {home} alt="Home Logo" className='w-8 h-auto'/>
          <h1 className='font-semibold text-lg text-black'>Home</h1>
        </Link>
        <Link to='/StudentDetails' className='relative flex  space-x-6  items-center  py-2 pl-2 w-11/12 hover:bg-[#009DCE] hover:scale-105 rounded-md transition duration-150 ease-in-out'>
          <img src= {student} alt="Student Logo" className='w-8 h-auto'/>
          <h1 className='font-semibold text-lg text-black'>Student</h1>
        </Link>  
        <Link to='/CourseDetails' className='relative flex  space-x-6  items-center  py-2 pl-2 w-11/12 hover:bg-[#009DCE] hover:scale-105 rounded-md transition duration-150 ease-in-out'>
          <img src= {course} alt="Course Logo" className='w-8 h-auto'/>
          <h1 className='font-semibold text-lg text-black'>Course</h1>
        </Link>
        <Link to='/History' className='relative flex  space-x-6  items-center py-2 pl-2 w-11/12 hover:bg-[#009DCE] hover:scale-105 rounded-md transition duration-150 ease-in-out'>
          <img src= {history} alt="History Logo" className='w-8 h-auto'/>
          <h1 className='font-semibold text-lg text-black'>History</h1>
        </Link>
      </div>
      <div className='w-1/5 h-16 bg-[#97CDD0] absolute inset-x-0 bottom-0 hover:bg-[#009DCE]' >
        <Link to='/Login' className=' flex justify-center items-center pt-3'>  
        <img src={logout} alt='Logout Logo' className='w-10 h-auto'/>
          <h1 className='font-bold text-xl text-black'>Logout</h1></Link>
      </div>
    </div>
  </div>
  )
}
