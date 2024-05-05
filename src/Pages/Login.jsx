import React from 'react';
import kdu from '../images/kdu.png';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="h-screen bg-cover bg-bottom " style={{ backgroundImage: `url(${kdu})` }}>
        <div className="bg-[#9FAFE9] absolute bg-opacity-20 w-full overflow-hidden h-screen " />
        <div>
            <h1 className='text-center text-5xl font-extrabold font- serif pt-16 drop-shadow-lg'>Student Management System</h1>
        </div>
        <div className='flex items-center justify-center pt-28'>
          <div className=' relative w-96  h-la  bg-[#B8F6FA] bg-opacity-70 flex flex-col justify-center items-center rounded-2xl  '>
            <div>
                <h1 className=' text-balck mb-12 font-bold text-3xl font-inter underline underline-offset-4'>Login</h1>
            </div>
            <form class=" mx-0 ">
  <div class="mb-4">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
  </div>
  <div class="mb-4">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="flex items-start mb-5">
    <div class="flex items-center h-4">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <div className='relative flex items-center justify-center'>
    <Link to='/Home'>
  <button type="login" class="text-black font-semibold bg-[#009DCE] hover:bg-[#97CDD0] focus:ring-2 focus:outline-none focus:ring-[#97CDD0] rounded-lg text-lg w-full sm:w-auto px-5 py-2 text-center dark:bg-[#009DCE]  dark:hover:bg-[#97CDD0] dark:focus:ring-[#97CDD0]" >Login</button>
    </Link>
    </div>
</form>
          </div>
        </div>
    </div>
  )
}
