import React from 'react';
import logout from '../images/logout.png';
import home from '../images/home.png';
import student from '../images/student.png';
import course from '../images/course.png';
import kdu_logo from '../images/kdu_logo.png';
import { Link } from 'react-router-dom';

export default function EditStudent() {
  return (
    <div className='bg-[#B8F6FA] h-screen  px-4 py-4'>
        <div className='relative flex items-start flex-col'>
            <div className='w-full h-20 bg-[#97CDD0] flex items-center space-x-80 '>
                <div className='mx-4'>
            <img src={kdu_logo} alt='KDU Logo' className='w-16 h-auto'/>
                </div>
                <div className='pl-6'>
                <h1 className='text-black font-extrabold text-3xl font-inter'>STUDENT MANAGEMENT SYSTEM</h1>
                </div>
                <div className='relative flex space-x-8'>
                <Link to='/Home' className='relative flex hover:bg-[#97CDD0] hover:scale-105 rounded-md transition duration-150 ease-in-out'>
          <img src= {home} alt="Home Logo" className='w-8 h-8 rounded-md'/>
          </Link>
          <Link to='/StudentDetails' className='relative flex hover:bg-[#97CDD0] hover:scale-105 rounded-md transition duration-150 ease-in-out'>
          <img src= {student} alt="Home Logo" className='w-8 h-8 rounded-md'/>
          </Link>
          <Link to='/CourseDetails' className='relative flex hover:bg-[#97CDD0] hover:scale-105 rounded-md transition duration-150 ease-in-out'>
          <img src= {course} alt="Home Logo" className='w-8 h-8 rounded-md'/>
          </Link>
                </div>
        </div>                
            </div>
            <div className='relative flex '>
        <div className='w-1/4 h-lc rounded-md bg-white relative flex items-center  mt-6 '>
        <form class=" ml-6 space-y-4 pb-16">
        <input
              type="text"
              placeholder="Index number"
              className="bg-white border placeholder:text-gray-900 placeholder:pl-1 text-gray-900 text-sm rounded-lg focus:border-2  outline outline-0 focus:outline-0  focus:ring-[#97CDD0] focus:border-[#97CDD0]  w-11/12  py-2"
            ></input>
            <input
              type="text"
              placeholder="First Name"
              className="bg-white border placeholder:text-gray-900 placeholder:pl-1 text-gray-900 text-sm rounded-lg focus:border-2  outline outline-0 focus:outline-0  focus:ring-[#97CDD0] focus:border-[#97CDD0]  w-11/12  py-2"
            ></input>
            <input
              type="text"
              placeholder="Last Name"
              className="bg-white border placeholder:text-gray-900 placeholder:pl-1 text-gray-900 text-sm rounded-lg focus:border-2  outline outline-0 focus:outline-0  focus:ring-[#97CDD0] focus:border-[#97CDD0]  w-11/12  py-2"
            ></input>
            <input
              type="text"
              placeholder="Date of Birth"
              className="bg-white border placeholder:text-gray-900 placeholder:pl-1 text-gray-900 text-sm rounded-lg focus:border-2  outline outline-0 focus:outline-0  focus:ring-[#97CDD0] focus:border-[#97CDD0]  w-11/12  py-2"
            ></input>
            <select
              id="semnum"
              className="bg-white border text-gray-900 text-sm rounded-lg focus:ring-[#97CDD0] focus:border-[#97CDD0] block  focus:border-2 w-11/12 overflow-y-auto max-h-40 py-2"
            >
              <option selected>Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              </select>
            <input
              type="text"
              placeholder="Email"
              className="bg-white border placeholder:text-gray-900 placeholder:pl-1 text-gray-900 text-sm rounded-lg focus:border-2  outline outline-0 focus:outline-0  focus:ring-[#97CDD0] focus:border-[#97CDD0]  w-11/12  py-2"
            ></input>
            <input
              type="text"
              placeholder="Address"
              className="bg-white border placeholder:text-gray-900 placeholder:pl-1 text-gray-900 text-sm rounded-lg focus:border-2  outline outline-0 focus:outline-0  focus:ring-[#97CDD0] focus:border-[#97CDD0]  w-11/12  py-2"
            ></input>
            <input
              type="text"
              placeholder="NIC Number"
              className="bg-white border placeholder:text-gray-900 placeholder:pl-1 text-gray-900 text-sm rounded-lg focus:border-2  outline outline-0 focus:outline-0  focus:ring-[#97CDD0] focus:border-[#97CDD0]  w-11/12  py-2"
            ></input>
            <select
              id="semnum"
              className="bg-white border text-gray-900 text-sm rounded-lg focus:ring-[#97CDD0] focus:border-[#97CDD0] block  focus:border-2 w-11/12 overflow-y-auto max-h-40 py-2"
            >
              <option selected> Degree</option>
              <option value="1">Software Engineering</option>
              <option value="2">Computer Engineering</option>
              <option value="3">Computer Science</option>
            </select>
          </form>
<div className='w-full h-16 bg-[#97CDD0] absolute inset-x-0 bottom-0 rounded-b-md hover:bg-[#009DCE]' >
        <Link to='/Login' className=' flex justify-center items-center pt-3'>  
        <img src={logout} alt='Logout Logo' className='w-10 h-auto'/>
          <h1 className='font-bold text-xl text-black'>Logout</h1></Link>
      </div>
        </div>
        <div className='flex flex-col w-3/4  items-start'>
        <div className='w-full pl-6 pt-6  '>
        <div className='bg-white rounded-md h-lc '>
          <div className='space-y-8 px-3 py-3'>
          <div className='bg-[#E2E2E2] w-full h-16 relative flex items-center px-6 rounded-md'>
            <h1 className='text-black font-semibold text-lg font-inter'>Index Number</h1>
            <div class="px-8 flex items-center ">
    <label for="index" class="block mb-2 text-sm font-md text-gray-900 dark:text-white"/>
    <input type="index" id="index" class="pl-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
    focus:ring-blue-500 focus:border-blue-500 block w-60 h-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="D/BSE/_ /____"/>
  </div>
  <div className='relative flex pl-96 space-x-12'>
  <button type="refresh" class="text-black font-semibold bg-[#009DCE] hover:bg-[#97CDD0] focus:ring-2 focus:outline-none focus:ring-[#97CDD0] rounded-lg text-lg w-full sm:w-auto px-5 py-2 text-center dark:bg-[#009DCE]  dark:hover:bg-[#97CDD0] dark:focus:ring-[#97CDD0]">Search</button>
  <button type="refresh" class="text-black font-semibold bg-[#009DCE] hover:bg-[#97CDD0] focus:ring-2 focus:outline-none focus:ring-[#97CDD0] rounded-lg text-lg w-full sm:w-auto px-5 py-2 text-center dark:bg-[#009DCE]  dark:hover:bg-[#97CDD0] dark:focus:ring-[#97CDD0]" >Refresh</button>
    </div>
          </div>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Index No.
                </th>
                <th scope="col" class="px-6 py-3">
                    First Name
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Last Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Date of Birth
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Gender
                </th>
                <th scope="col" class="px-6 py-3">
                    Email 
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Address
                </th>
                <th scope="col" class="px-6 py-3">
                    NIC No.
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Degree
                </th>
                </tr>
        </thead>
        <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"></th>
                <td class="px-6 py-4"></td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800"></td>
                <td class="px-6 py-4"></td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"></th>
                <td class="px-6 py-4"></td>
             
                <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"></th>
                <td class="px-6 py-4"></td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800"></td>
                <td class="px-6 py-4"></td>
            </tr>   <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800"></td>
                <td class="px-6 py-4"></td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"></th>
                <td class="px-6 py-4"></td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800"></td>
                <td class="px-6 py-4"></td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"></th>
                <td class="px-6 py-4"></td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800"></td>
                <td class="px-6 py-4"></td>
            </tr>
        </tbody>
    </table>
</div>
</div>
<div className='w-full h-16 bg-[#E2E2E2]  my-64 relative flex items-center justify-center space-x-12 rounded-b-md '>
<button type="add new" class="text-black font-semibold bg-[#009DCE] hover:bg-[#97CDD0] focus:ring-2 focus:outline-none focus:ring-[#97CDD0] rounded-lg text-lg w-full sm:w-auto px-5 py-2 text-center dark:bg-[#009DCE]  dark:hover:bg-[#97CDD0] dark:focus:ring-[#97CDD0]">Add New</button>
<button type="update" class="text-black font-semibold bg-[#009DCE] hover:bg-[#97CDD0] focus:ring-2 focus:outline-none focus:ring-[#97CDD0] rounded-lg text-lg w-full sm:w-auto px-5 py-2 text-center dark:bg-[#009DCE]  dark:hover:bg-[#97CDD0] dark:focus:ring-[#97CDD0]">Update</button>
<button type="delete" class="text-black font-semibold bg-[#009DCE] hover:bg-[#97CDD0] focus:ring-2 focus:outline-none focus:ring-[#97CDD0] rounded-lg text-lg w-full sm:w-auto px-5 py-2 text-center dark:bg-[#009DCE]  dark:hover:bg-[#97CDD0] dark:focus:ring-[#97CDD0]">Delete</button>
<button type="clear" class="text-black font-semibold bg-[#009DCE] hover:bg-[#97CDD0] focus:ring-2 focus:outline-none focus:ring-[#97CDD0] rounded-lg text-lg w-full sm:w-auto px-5 py-2 text-center dark:bg-[#009DCE]  dark:hover:bg-[#97CDD0] dark:focus:ring-[#97CDD0]">Clear</button>
</div>
        </div>
        </div>
      </div>
      </div>
        </div>
  )
}
