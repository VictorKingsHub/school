import React from 'react'
import { CiSearch } from 'react-icons/ci'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center'>
        {/* Search Box */}
      <div className='hidden md:flex'>
<span><CiSearch /></span>
<input type="text" placeholder="Search..." name="" id="" />
        
      </div>


      {/* Icons/user */}
      <div>
        <div className='bg-white rounded-full w-7 h-7'>   </div>
      </div>
    </div>
  )
}

export default Navbar
