import React from 'react';
import Sidebar from '../Components/Sidebar';
import profile from '../images/profile.png';
import camera from '../images/camera.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='bg-[#EBEBEB]'>
      <div className='relative flex items-start'>
        <div className='w-1/5'>
          <Sidebar/>
        </div>
        <div className='flex flex-col w-4/5 items-start'>
        <div className='w-full h-20 bg-[#F8F6F6] flex items-center justify-between px-6'>
        <div>
            <h1 className='text-black font-bold text-md font-inter'>Admin</h1>
            <h1 className='text-[#959494] font-semibold text-md font-inter'>Chathuri Ranasinghe</h1>
        </div>
        <div>
          <Link to='/Home' className='relative flex hover:bg-[#F8F6F6] hover:scale-105 rounded-md transition duration-150 ease-in-out'>
          <img src= {profile} alt="Profile" className='w-10 h-10 rounded-full'/>
          </Link>
        </div>
        </div>
        <div className='relative w-full flex pl-8 space-x-8 pt-8'>
        <div className='w-1/2 h-lx bg-white rounded-md'>
          <h1 className='text-black font-bold text-xl font-inter px-8 py-4'>My Information</h1>
          <div className='relative flex justify-center'>
          <div className='flex flex-col items-center '>
            <img src={profile} alt='Profile' className='rounded-md w-28 h-28 '/>
            <img src={camera} alt='Camera' className='rounded-md w-6 h-6 ml-16 '/>
            <div className='pt-4'>
            <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
            <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="gender" id="gender" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="gender" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gender</label>
    </div>
    </div>
    <div className='relative flex items-center justify-center pt-4'>
    <button type="register" class="text-black font-semibold bg-[#009DCE] hover:bg-[#97CDD0] focus:ring-2 focus:outline-none focus:ring-[#97CDD0] rounded-lg text-lg w-full sm:w-auto px-5 py-2 text-center dark:bg-[#009DCE]  dark:hover:bg-[#97CDD0] dark:focus:ring-[#97CDD0]" >Register</button>
    </div>
  </div>
          </div>
         </div>
        </div>
       <div className='flex flex-col space-y-8 w-1/2 pr-8'>
       <div className='w-full h-ly bg-white rounded-md'>
          <h1 className='text-black font-semibold text-lg px-4 py-2 border-b border-gray-200'>Calendar</h1>
          <div></div>
        </div>
        <div className=' w-full h-ly bg-white rounded-md '>
          <h1 className='text-black font-bold text-lg px-4 py-2 border-b border-black'>Recent Tabs</h1>
          <ol class="relative border-s border-gray-200 dark:border-gray-700 pt-4">                  
          <li class="mb-4 ml-6 mr-4">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img class="rounded-full shadow-lg" src={profile} alt="Pasindu"/>
        </span>
        <div class="items-center justify-between pl-8 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
            <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">just now</time>
            <div class="text-sm font-normal text-gray-500 dark:text-gray-300">Pasindu moved <a href="/StudentDetails" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Student Details. </a>
            </div>
        </div>
    </li>
    <li class="mb-4 ml-6 mr-4">
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img class="rounded-full shadow-lg" src={profile} alt="Chathuri"/>
        </span>
        <div class="p-4 pl-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
            <div class="items-center justify-between mb-3 sm:flex">
                <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 hours ago</time>
                <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">Chathuri Ranasinghe edited on  <a href="/CoureDetails" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Course Details.</a></div>
            </div>
        </div>
    </li>
    <li class="mb-4 ml-6 mr-4">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <img class="rounded-full shadow-lg" src={profile} alt="Pasindu"/>
        </span>
        <div class="items-center justify-between p-4 pl-8 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
            <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">1 day ago</time>
            <div class="text-sm font-normal text-gray-500 dark:text-gray-300">Yasuni moved <a href="/StudentDetails" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Student Details. </a>
            </div>
        </div>
    </li>
</ol>
        </div>
       </div>
      </div>
      </div>
      </div>
    </div>
  )
}

