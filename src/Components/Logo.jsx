import React from 'react'
import logo1 from "../assets/Logo1.png"
import logo2 from "../assets/Logo2.png"
import logo3 from "../assets/Logo3.png"
import logo4 from "../assets/Logo4.png"

const Logo = () => {
  return (
    <div className='max-w-container mx-auto lg:mt-0 mt-8 lg:mb-0 mb-8'>
     <div className='flex'> 
        <div className='w-1/4'>
         <img src={logo1} alt="" />
        </div>
        <div className='w-1/4'>
         <img src={logo2} alt="" />
        </div>
        <div className='w-1/4'>
         <img src={logo3} alt="" />
        </div>
        <div className='w-1/4'>
         <img src={logo4} alt="" />
        </div>
     </div>
    </div>
  )
}

export default Logo