import React from 'react'


const Learn = () => {
  return (
    <div className='bg-[#F0F0F0] lg:mb-[100px] lg:px-[136px] lg:py-[391px]'>
       <div className='max-w-container mx-auto lg:mt-0 mt-12 lg:ml-[-80px] xl:ml-0'>
         <div className='flex'>
         <div className='w-2/5 xl:w-1/2 lg:w-1/2'> 
             <h4 className=' lg:pt-[90px] xl:pt-[90px] lg:pb-[99px] lg:pl-[40px] lg:pr-[40px] lg:w-[300px]  xl:ml-[180px] pr-0 pt-[30px]
             xl:w-[350px] xl:text-[30px] xl:px-[50px]
           bg-[red] font-bold lg:text-[30px] text-[white] font-pops px-5 lg:py-0 py-5 text-[12px] lg:h-[332px] h-[130px] 
               sm:text-[18px] sm:pr-[60px] '>Learn more about our company</h4>
          </div>
             <div className=' xl:w-full lg:w-1/2 w-full bg-[url("../src/assets/learn.png")] bg-cover bg-center bg-no-repeat lg:px-[282px] lg:pt-[190px] lg:pb-[142px] lg:h-[300px] '>
                   <div>
                   <button className='lg:px-1 lg:py-2  px-2 py-1  bg-[white] text-[red] font-pops font-semibold lg:text-[12px] 
                   text-[11px] lg:mt-[-200px] mt-[50px]  xl:mt-[-300px] xl:py-3  xl:text-[18px] xl:ml-[0px] lg:p-[40px]
                         lg:ml-[-80px]  ml-[70px] md:ml-[200px] sm:ml-[150px] sm:mt-[60px] xl:px-10 xl:w-[200px]  lg:w-[100px] hover:bg-[black] hover: duration-500'> Learn More</button>
                   </div>
             </div>
         </div>
       </div>
    </div>
  )
}

export default Learn