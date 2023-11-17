import React from 'react'
import Navbar from '../components/Navbar'
import MobileBar from '../components/MobileBar'
import Hero from '../components/Hero'
import { useContext } from 'react'
import HomeContext from '../contexts/HomeContext'
const HomePage = () => {
    const {menuBar} = useContext(HomeContext)
    useContext({})
  return (
    <div>
           <Navbar />
          {menuBar && <MobileBar />}
          <Hero />


    </div>
  )
}

export default HomePage