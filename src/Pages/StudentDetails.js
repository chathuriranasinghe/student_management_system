import React from 'react';
import Sidebar from '../Components/Sidebar';
import Admin from '../Components/Admin';
import edit from '../images/edit.png';
import { Link } from 'react-router-dom';

export default function StudentDetails() {
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
          <h1 className='text-black font-bold text-2xl font-inter'>Student Details</h1>
        </div>
        <div className='bg-white rounded-md h-lb'>
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
<div className='w-full h-16 bg-[#E2E2E2] hover:bg-[#009DCE] my-56 rounded-b-md'>
  <Link to= '/EditStudent' className='flex justify-center items-center pt-3'>
    <img src={edit} alt='Edit' className='w-10 h-auto'/>
    <h1 className='font-bold text-xl text-black'>Edit</h1>
  </Link>
</div>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}
