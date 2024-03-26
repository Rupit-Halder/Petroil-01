import React, { useState } from 'react'
import logo from "../assets/Logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    
    let [show , setShow] = useState(false)
   

    let handleMenu = () =>{
        setShow(!show);
 }


  return (
   <nav className='bg-[red] py-5'>
    <div className='max-w-container mx-auto'>
      <div className='flex justify-between'>
      <div className='lg:ml-2 ml-1 xl:ml-0'>
        <img src={logo} alt="logo"/>
       </div>
       <div className='lg:mr-5 xl:mr-0'>
        <ul className= {`lg:flex gap-x-8 py-2  absolute lg:static text-center  ${show == true ? 'top-[170px] left-[0px] bg-[#090921] w-full delay-50 duration-500 ease-in-out z-20  py-6' 
                 : 'top-[-200px] left-[0px]  w-full delay-50 duration-500 ease-in-out -z-10' }`}>
            <li className='lg:py-0 py-3 '><a className='text-[white] font-pops font-semibold text-[18px] lg:mt-0 mt-40px hover:text-[black] hover: duration-500' href="">Home</a></li>
            <li className='lg:py-0 py-3'><a className='text-[white] font-pops font-semibold text-[18px] hover:text-[black] hover: duration-500' href="">About</a></li>
            <li className='lg:py-0 py-3'><a className='text-[white] font-pops font-semibold text-[18px] hover:text-[black] hover: duration-500' href="">Services</a></li>
            <li className='lg:py-0 py-3'><a className='text-[white] font-pops font-semibold text-[18px] hover:text-[black] hover: duration-500' href="">Gallery</a></li>
            <li className='lg:py-0 py-3'><a className='text-[white] font-pops font-semibold text-[18px] hover:text-[black] hover: duration-500' href="">Blog</a></li>
            <li className='lg:py-0 py-3'><a className='text-[white] font-pops font-semibold text-[18px] border-2 p-3 rounded lg:inline inline-block hover:bg-[black] hover: duration-500' href="">Contact</a></li>
        </ul>
       </div>
      <div className=' lg:hidden relative  mr-2 mt-3  text-[20px] ' onClick={handleMenu}>
        {show == true ? <RxCross1 /> : <FaBars />}
       
      </div>
      </div>
    </div>
   </nav>
  )
}

export default Navbar