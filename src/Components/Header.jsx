import React from 'react'
import { CiMail } from "react-icons/ci";
import { TbPhoneCall } from "react-icons/tb";
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram  } from "react-icons/fa";

const Header = () => {
  return (
     
    <header className=' py-3 bg-hbg '>
        <div className='max-w-container mx-auto'>
       <div className="lg:flex ">
       <div className='w-full sm:w-full lg:w-1/4 lg:ml-[10px] xl:ml-0'>
          <div className='flex sm:flex items-center relative after:absolute lg:after:top-0 lg:after:right-[30px] xl:after:top-0 xl:after:right-[70px] 
              xl:after:content-[""]  lg:after:content-[""] xl:after:h-[20px] lg:after:h-[20px] xl:after:w-[2px] lg:after:w-[2px] lg:after:bg-[red] lg:justify-start justify-center'>
             <CiMail className='text-white mr-2'/>
            <p className='font-pops text-white text-[12px] '>mail@yourcompany.com</p>
          </div>
             </div>
           <div className= 'w-full sm:w-full lg:w-1/4 lg:py-0 py-2'>
            <div className='flex items-center lg:justify-start justify-center'>
            <TbPhoneCall className='text-white mr-2'/>
            <p className='font-pops text-white text-[12px]'>+896 120 5889 (Toll free)</p>
            </div>
        </div>
        <div className='w-full sm:w-full lg:w-1/2 lg:mr-[20px] xl:mr-0'>
            <div className='flex lg:justify-end justify-center items-center h-full gap-x-6'>
            <FaFacebookF className='text-white text-[12px]'/>
            <FaTwitter className='text-white text-[12px]'/>
            <FaLinkedin className='text-white text-[12px]'/>
            <FaInstagram className='text-white text-[12px]'/>
            </div>
        </div>
       </div>
    </div>
    </header>
  )
}

export default Header