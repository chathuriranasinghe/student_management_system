import React from 'react';
import home from '../images/home.png';
import { Link } from 'react-router-dom';

export default function Admin() {
  return (
    <div className='w-full h-20 bg-[#F8F6F6] flex items-center justify-between px-6'>
        <div>
            <h1 className='text-black font-bold text-md font-inter'>Admin</h1>
            <h1 className='text-[#959494] font-semibold text-md font-inter'>Chathuri Ranasinghe</h1>
        </div>
        <div>
          <Link to='/Home' className='relative flex hover:bg-[#F8F6F6] hover:scale-105 rounded-md transition duration-150 ease-in-out'>
          <img src= {home} alt="Home Logo" className='w-8 h-8 rounded-full'/>
          </Link>
        </div>
    </div>
  )
}
