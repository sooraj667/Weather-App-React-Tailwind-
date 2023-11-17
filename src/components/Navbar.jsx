import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useContext } from 'react';
import HomeContext from '../contexts/HomeContext';
const Navbar = () => {
  const {setMenuBar}=useContext(HomeContext)

  const handleMenuBar=()=>{
    setMenuBar((prev)=>{
        return !prev
    })

  }

  return (
    <div className='w-full h-14 text-slate-50 flex justify-between  border-b-gray-900 border-b mb-10'>
        <h1 className='font-bold text-2xl  w-28 text-center pt-3 px-7 '>PORTFOLIO</h1>

        <ul className='hidden md:flex ps-96 ms-80' >
            <li className='px-3 text-center align-middle pt-4 '>Profile</li>
            <li className='px-3 text-center align-middle pt-4 '>Works</li>
            <li className='px-3 text-center align-middle pt-4 '>Explore</li>
        </ul>

        <div className="pt-4 pe-3 cursor-pointer block md:hidden" onClick={handleMenuBar}>
            <MenuIcon />

        </div>



    </div>
  )
}

export default Navbar