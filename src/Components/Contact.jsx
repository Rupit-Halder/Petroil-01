import React from 'react'

const Contact = () => {
  return (

   <div className='bg-[red] '>
     <div className='max-w-container mx-auto lg:py-[30px] py-[30px]'>
      <div className='lg:flex flex-direction: row; sm:flex'>
      <div className='xl:w-4/5 lg:w-[70%] sm:w-[50%]'>
      <h2 className='font-pops font-bold text-[white] xl:text-[26px] lg:text-[22px] text-[16px] lg:mt-[8px] 
       xl:ml-0 lg:ml-[20px]  ml-[10px] sm:py-[0px] '>Want to join as member branch in your area?</h2>
      </div>
      <div className='xl:w-1/5 lg:w-[30%] sm:w-[50%]'>
        <button className='btn lg:px-[30px] lg:py-[15px] py-[15px] px-[30px] text-[white] font-semibold lg:text-[16px]
         font-pops border lg:ml-[120px] ml-[120px] lg:mt-0 mt-[30px] bg-[red] hover:bg-black hover: duration-500 sm:my-0'>CONTACT</button>
      </div>
      </div>
     </div>
   </div>
    
  
  )
}

export default Contact