import React, { useContext } from 'react'
import HomeContext from '../contexts/HomeContext'

const MobileBar = () => {
    const {menuBar}=useContext(HomeContext)
  return (
    <div className={menuBar ?"left-0 top-0 fixed h-full w-40 bg-[#000300e4] text-slate-50 ease-in-out duration-1000" :"ease-in-out"}> 
             <ul className='ps-4 pt-10'>
            <li className='pt-4 border-b border-gray-700'>Profile</li>
            <li className=' pt-4 border-b border-gray-700'>Works</li>
            <li className=' pt-4 border-b border-gray-700'>Explore</li>
        </ul>


    </div>
  )
}

export default MobileBar