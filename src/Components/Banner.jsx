import React from 'react'

const Banner = () => {
  return (
    <div className='bg-[url("../src/assets/banner.png")] bg-no-repeat bg-cover bg-center lg:py-[257px] relative z-10 
    after:absolute after:top-0 after:left-0 after:content-[""] after:w-full after:h-full
    after:bg-[#000000a2] after:-z-10'>
      <div className='max-w-container mx-auto lg:py-0 py-8'>
           <h2 className='font-pops text-[white] lg:text-[50px] font-bold lg:w-[842px] text-[18px] 
           lg:ml-3 ml-2 lg:pr-[150px] pr-[100px] xl:ml-0 '> We exist since 1975 on the oil and gas industry.</h2>
           <button className='bg-[red] font-pops font-semibold lg:py-[14px] py-[8px] lg:px-[41px] 
           px-[12px] text-[white] lg:text-[16px] mt-4 text-[13px] lg:ml-3 ml-2 xl:ml-0 hover:bg-[black] hover: duration-500'> LEARN MORE</button>
      </div>
    </div>
  )
}

export default Banner