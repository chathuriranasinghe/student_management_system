import React from 'react';
import Sidebar from '../Components/Sidebar';
import Admin from '../Components/Admin';
import profile from '../images/profile.png';

export default function History() {
  return (
    <div className='bg-[#EBEBEB]'>
      <div className='relative flex items-start'>
        <div className='w-1/5'>
          <Sidebar/>
        </div>
        <div className='flex flex-col w-4/5 items-start'>
        <div className='w-full'>
          <Admin/>
        </div>
        <div className='w-full px-8 py-6 space-y-4'>
        <div className='relative w-full flex '>
          <h1 className='text-black font-bold text-2xl font-inter'>History</h1>
        </div>
        <div className='bg-white rounded-md h-lb space-y-12 '>
        <div className='space-y-8 px-3 py-3'>
<div class="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <time class="text-lg font-semibold text-gray-900 dark:text-white">Today - Sunday, March 3,2024</time>
    <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
        <li>
            <a href="" class="items-center block p-2 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700 space-x-4">
                <img class="w-10 h-10 mb-3 me-3 rounded-full sm:mb-0" src={profile} alt="Profile"/>
                <div class="text-gray-600 dark:text-gray-400 ">   
                <div class="relative flex items-center  ">
            <time class="mb-1 pl-96 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">6.30 PM</time>
            <div class="text-sm font-normal text-gray-500 dark:text-gray-300">Pasindu moved <a href="/StudentDetails" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Student Details. </a>
            </div>
        </div>
            </div> 
            </a>
        </li>
        <li>
            <a href="" class="items-center block p-2 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700 space-x-4">
                <img class="w-10 h-10 mb-3 me-3 rounded-full sm:mb-0" src={profile} alt="Profile"/>
                <div class="text-gray-600 dark:text-gray-400  ">
                <div class="relative flex items-center  ">
            <time class="mb-1 pl-96 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">6.29 PM</time>
            <div class="text-sm font-normal text-gray-500 dark:text-gray-300">Pasindu moved <a href="/StudentDetails" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Student Details. </a>
            </div>
        </div>
            </div> 
            </a>
        </li>
    </ol>
</div>
<div class="p-5 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <time class="text-lg font-semibold text-gray-900 dark:text-white">Yesterday - Saturday, March 2,2024</time>
    <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
    <li>
            <a href="" class="items-center block p-2 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700 space-x-4">
                <img class="w-10 h-10 mb-3 me-3 rounded-full sm:mb-0" src={profile} alt="Profile"/>
                <div class="text-gray-600 dark:text-gray-400 "> 
                <div class="relative flex items-center  ">
            <time class="mb-1 pl-72 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">4.29 PM</time>  
                <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">Chathuri Ranasinghe edited on  <a href="/CoureDetails" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Course Details.</a></div>
            </div> 
            </div>
            </a>
        </li>
        <li>
            <a href="" class="items-center block p-2 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700 space-x-4">
                <img class="w-10 h-10 mb-3 me-3 rounded-full sm:mb-0" src={profile} alt="Profile"/>
                <div class="text-gray-600 dark:text-gray-400 ">   
                <div class="relative flex items-center  ">
            <time class="mb-1 pl-72 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">8.00 AM</time> 
                <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">Chathuri Ranasinghe edited on  <a href="/CoureDetails" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Course Details.</a></div>
            </div> 
            </div>
            </a>
        </li>  
    </ol>
</div>
</div>
<div className='relative flex justify-center items-center'>
  <button type="delete" class="text-black font-semibold bg-[#009DCE] hover:bg-[#97CDD0] focus:ring-2 focus:outline-none focus:ring-[#97CDD0] rounded-lg text-lg w-full sm:w-auto px-5 py-2 text-center dark:bg-[#009DCE]  dark:hover:bg-[#97CDD0] dark:focus:ring-[#97CDD0]">Delete</button>
    </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}
