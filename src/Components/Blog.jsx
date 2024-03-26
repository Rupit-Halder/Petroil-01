import React from 'react'
import { FaGreaterThan } from "react-icons/fa";

export const Blog = () => {
  return (
    <div className='bg-[#c4c4c44a] lg:pt-[110px] pt-[50px] lg:pb-[162px] pb-[50px] lg:mt-[110px]'>
        <div className='max-w-container mx-auto '>
     <div className='lg:flex lg:gap-x-[15px] xl:gap-x-[20px] gap-x-3 flex-direction: row; cursor-pointer'>
     <div className='lg:w-1/3 bg-[url("../src/assets/blog1.png")] bg-no-repeat bg-cover bg-center lg:pt-[75px] lg:pb-[140px] 
          lg:pl-[60px] lg:pr-[70px] relative z-10 
    after:absolute after:top-0 after:left-0 after:content-[""] after:w-full after:h-full lg:h-[400px] h-[250px] w-full lg:ml-0 
    after:bg-[#000000a2] after:-z-10'>
       <h2 className='font-pops lg:text-[22px] xl:text-[24px] font-bold text-[white] text-[24px] lg:pt-0 pt-[40px] lg:ml-0 lg:px-0
       ml-[10px] sm:text-[30px] sm:px-[50px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
       <div className=''>
        <h2 className='text-[white] lg:mt-10 bg-[#ffffff8c] inline-block lg:pt-2 lg:pb-2 lg:pl-3 lg:pr-3 font-pops font-bold 
        lg:text-[16px] mt-[30px] pt-[5px] pb-[5px] pl-[10px] pr-[10px] lg:ml-0 ml-[10px] sm:ml-[60px] hover:bg-[black] hover: duration-500'> Read More</h2>
       </div>
      </div>
      <div className='sm:bg-cover sm:bg-center sm:bg-no-repeat lg:mt-0 mt-[30px] lg:w-1/3 bg-[url("../src/assets/blog2.png")] lg:bg-cover lg:bg-center 
      lg:bg-no-repeat  lg:pt-[75px] lg:pb-[140px] lg:h-[400px]  h-[250px] w-full
          lg:pl-[60px] lg:pr-[100px] relative z-10 
    after:absolute after:top-0 after:left-0 after:content-[""] after:w-full after:h-full
    after:bg-[#000000a2] after:-z-10'>
        <h2 className='font-pops lg:text-[19px] xl:text-[24px] font-bold text-[white] text-[24px] lg:pt-0 pt-[40px] lg:ml-0  lg:px-0
        ml-[10px] sm:text-[30px] sm:px-[50px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
        <div className=''>
        <h2 className='text-[white] xl:mt-10 lg:mt-[65px] bg-[#ffffff8c] inline-block lg:pt-2 lg:pb-2 lg:pl-3 lg:pr-3 font-pops 
        font-bold lg:text-[16px] mt-[30px] pt-[5px] pb-[5px] pl-[10px] pr-[10px] lg:ml-0 ml-[10px] sm:ml-[60px] hover:bg-[black] hover: duration-500'> Read More</h2>
       </div>
      </div> 
      <div className='lg:mt-0 mt-[30px] lg:w-1/3 bg-[url("../src/assets/blog3.png")] bg-cover bg-center bg-no-repeat lg:pt-[75px] lg:pb-[140px] lg:h-[400px]  h-[250px] w-full
          lg:pl-[60px] lg:pr-[100px] relative z-10 
    after:absolute after:top-0 after:left-0 after:content-[""] after:w-full after:h-full
    after:bg-[#000000a2] after:-z-10'>
        <h2 className='font-pops lg:text-[19px] xl:text-[24px]  font-bold text-[white] text-[24px] lg:pt-0 pt-[40px] lg:ml-0  lg:px-0
        ml-[10px] sm:text-[30px] sm:px-[50px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
        <div className=''>
        <h2 className='text-[white] xl:mt-10 lg:mt-[65px] bg-[#ffffff8c] inline-block lg:pt-2 lg:pb-2 lg:pl-3 lg:pr-3 font-pops 
        font-bold lg:text-[16px] mt-[30px] pt-[5px] pb-[5px] pl-[10px] pr-[10px] lg:ml-0 ml-[10px] sm:ml-[60px] hover:bg-[black] hover: duration-500'> Read More</h2>
       </div>
      </div>
     </div>
     <div className='lg:ml-[790px] flex lg:mt-[20px] ml-[174px] mt-[20px] xl:ml-[1100px]' >
        <div><h2 className='font-pops font-bold lg:text-[16px] text-[14px] cursor-pointer lg:ml-[0px] sm:ml-[290px]'>MORE FROM THE BLLOG </h2></div>
        <div className='lg:mt-[4px] lg:ml-[8px] mt-[2px] ml-[6px] cursor-pointer'> <FaGreaterThan /> </div>
      </div>
    </div>
    </div>   
  
  )
}
export default Blog