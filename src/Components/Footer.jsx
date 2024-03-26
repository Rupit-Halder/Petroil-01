import React from 'react'
import footer from "../assets/footer.png"
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import cert from "../assets/Cert1.png"
import cert1 from "../assets/Cert2.png"
import { FaFacebookF, FaTwitter , FaInstagram  } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";


export const Footer = () => {
  return (
    <div className='bg-[#1f1f1f]'>
     <div className='max-w-container mx-auto lg:pt-[149px] lg:pb-[270px]  pb-[50px]'>
        <div className='flex lg:flex-nowrap flex-wrap  '>
           <div className='xl:w-3/4 xl:ml-0 lg:ml-[15px] ml-[10px] lg:pt-0 pt-[20px] sm:w-[50%]'>
              <img src={footer} alt="" className='w-[150px]'/>
              <div>
                <div className='flex lg:mt-[33px] '>
                <div className='lg:mt-[4px] mt-[22px]'><MdOutlineMail className='text-[white]'/></div>
                <div><h4 className='font-pops text-[white] lg:text-[15px] lg:ml-[6px] text-[14px] lg:mt-0 mt-[20px] 
                ml-[4px]'>  mail@yourcompany.com</h4></div>
                </div>
                   <div className='flex lg:mt-[15px] '>
                      <div className='lg:mt-[5px] mt-[12px]'> <MdOutlinePhoneInTalk  className='text-[white]'/> </div>
                      <div >
                      <h4 className='font-pops text-[white] lg:text-[15px] lg:ml-[6px] text-[14px] lg:mt-0 mt-[10px] 
                      ml-[4px]'>  +896 120 5889 (Toll free)</h4>
                      </div>
                   </div>
                  <div className='flex lg:mt-[15px] xl:mt-[5px]'>
                    <div className='xl:mt-[12px] lg:mt-[12px] mt-[12px]'><IoLocationOutline className='text-[white]'/> </div>
                    <div> <h4  className='font-pops text-[white] text-[15px] lg:ml-[6px] mt-[10px] 
                    ml-[4px]'> 101 Baker Street, New York, USA, 12345</h4> </div>
                  </div>
                    <div className='flex gap-x-3 lg:mt-[30px] mt-[20px]'>
                        <div> <FaFacebookF className='text-[white] lg:h-[30px] lg:w-[30px] h-[25px] w-[25px] rounded-full bg-[red] p-[5px]'/> </div>
                        <div> <FaTwitter className='text-[white] lg:h-[30px] lg:w-[30px] h-[25px] w-[25px] rounded-full bg-[red] p-[5px]'/> </div>
                        <div> <FaLinkedinIn className='text-[white] lg:h-[30px] lg:w-[30px] h-[25px] w-[25px] rounded-full bg-[red] p-[5px]'/> </div>
                         <div> <FaInstagram className='text-[white] lg:h-[30px] lg:w-[30px] h-[25px] w-[25px] rounded-full bg-[red] p-[5px]'/> </div>
                    </div>
              </div>
           </div>
          
            <div className='w-1/4 xl:w-1/4 lg:mt-[30px] lg:ml-0 ml-[10px] mt-[30px] sm:w-[20%] '>
            <div>  
            <h2 className='font-pops text-[white] font-bold text-[18px]'>Company</h2>
              <div className='lg:pt-[10px] pt-[10px]'> 
                <h4 className='font-pops text-[#ffffffef] font-normal text-[14px] lg:pt-[20px] '>Home</h4>
                <h4 className='font-pops text-[#ffffffef] font-normal text-[14px] lg:pt-[20px] pt-[8px]'>About</h4>
                <h4 className='font-pops text-[#ffffffef] font-normal text-[14px] lg:pt-[20px] pt-[8px]'>Services</h4>
                <h4 className='font-pops text-[#ffffffef] font-normal text-[14px] lg:pt-[20px] pt-[8px]'>Gallery</h4>
              </div>
            </div>
           </div>
           <div className='w-1/4 xl:w-1/4  lg:mt-[30px] lg:ml-0 ml-[40px] mt-[30px] sm:w-[20%]'>
               <div  >
                 <h2 className='font-pops text-[white] font-bold text-[18px]'>Others</h2>
               </div>
               <div className='lg:pt-[10px] pt-[10px]'>
                <h4 className='font-pops text-[#ffffffef]  font-normal text-[14px] lg:pt-[20px]'>Blog</h4>
                <h4 className='font-pops text-[#ffffffef] font-normal text-[14px] lg:pt-[20px] pt-[8px]'>Contact</h4>
                <h4 className='font-pops text-[#ffffffef] font-normal text-[14px] lg:pt-[20px] pt-[8px]'>Terms & Conditions</h4>
                <h4 className='font-pops text-[#ffffffef] font-normal text-[14px] lg:pt-[20px] pt-[8px]'>Privacy Policy</h4>
               </div>
           </div>
            
           <div className='w-1/4 xl:w-1/4  lg:mt-[35px] mt-[30px] sm:w-[30%] sm:ml-[10px]'>
            <div>
                <h2 className='font-pops text-[white] font-bold text-[16px]'> Certificate</h2>
            </div>
            <div className='flex lg:gap-x-2 gap-x-1 lg:pt-[35px] pt-[20px]'>
             <div > <img src={cert} alt="" /> </div>
             <div> <img src={cert1} alt="" /> </div>
            </div>
           </div>
      
        </div>
     </div>
    </div>
  )
}
