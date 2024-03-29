import React from 'react';
import Sidebar from '../Components/Sidebar';
import Admin from '../Components/Admin';

export default function StudentDetails() {
  return (
    <div>
      <div className='relative flex'>
        <div className='w-1/5'>
          <Sidebar/>
        </div>
        <div className='w-4/5'>
          <Admin/>
        </div>
      </div>
    </div>
  )
}
