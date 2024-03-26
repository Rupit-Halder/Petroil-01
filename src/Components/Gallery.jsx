import React from 'react'
import gal1 from "../assets/gal1.png"
import gal2 from "../assets/gal2.png"
import gal3 from "../assets/gal3.png"
import gal4 from "../assets/gal4.png"
import srvice1 from "../assets/Services1.png"
import srvice2 from "../assets/Services2.png"
import srvice3 from "../assets/Services3.png"

const Gallery = () => {
  return (
    <> 
     <div className='flex  justify-between flex-wrap '>  
         <div className='lg:w-[24%] sm:w-[49%] py-2'>
              <img src={gal1} alt="" className='w-full ' />
         </div>
         <div className='lg:w-[24%] sm:w-[49%] py-2'>
              <img src={gal2} alt="" className='w-full'/>
         </div>
         <div className='lg:w-[24%] sm:w-[49%] py-2'>
              <img src={gal3} alt="" className='w-full'/>
         </div>
         <div className='lg:w-[24%] sm:w-[49%] py-2'>
              <img src={gal4} alt="" className='w-full'/>
         </div>
     </div>
    
    <div className='flex flex-wrap lg:mt-[10px] lg:gap-x-0 gap-x-2'>
      <div className='max-w-container mx-auto lg:w-1/2'>
          <h2 className='lg:pl-[60px] lg:pt-[30px] lg:w-[600px] font-bold font-pops lg:text-[40px] text-[25px] 
          lg:mt-0 mt-[25px] lg:ml-0 ml-1 sm:text-[30px] xl:text-[50px] xl:pl-[260px]'>Our Services</h2>
          <p className='lg:pt-[10px] lg:pr-[200px] lg:pl-[60px]  lg:w-[650px] lg:font-medium font-medium font-pops lg:text-[14px] text-[14px] text-[#6C6C6C] 
               lg:ml-0 ml-1 sm:pr-[100px] sm:text-[16px] xl:pl-[260px] xl:pt-[5px] xl:pr-[0px] xl:text-[18px] xl:w-[600px]
               '>It is a long established fact that a reader will be  distracted by the readable content of a page  when looking at its layout.</p>
      </div>
      <div className='lg:w-1/2 cursor-pointer lg:mt-0 mt-5'>
        <img src={srvice1} alt="" className='w-full' />
      </div>
    </div>

    <div className='flex flex-wrap cursor-pointer lg:gap-x-0 gap-x-2'>
      <div className='lg:mt-0 mt-5 lg:w-1/2'>
        <img src={srvice2} alt="" className='w-full'/>
      </div>
      <div  className='lg:mt-0 lg:w-1/2 mt-5'>
        <img src={srvice3} alt="" className='w-full'/>
      </div>
    </div>
    </>
  )
}

export default Gallery