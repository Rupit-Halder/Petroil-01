import React from 'react'

const Country = () => {
    return (
        <div className='max-w-container mx-auto lg:pt-[80px] pt-[50px] lg:pb-[100px] pb-[50px]'>
            <div className="lg:flex">
                <div className="lg:w-2/5">
                    <h2 className='lg:ml-3 xl:ml-0 ml-[8px] font-bold lg:text-[40px] xl:text-[50px] text-[28px] 
                    font-pops lg:pr-[100px] xl:pr-[150px]'> The biggest
                        supplier on
                        the country </h2>
                </div>
                <div className="lg:w-3/5">
                  <p className='lg:ml-0 ml-[8px] lg:mt-[70px] mt-[15px] font-medium lg:text-[14px] xl:text-[19px] 
                  font-pops text-[#6C6C6C] lg:px-[55px]'>It is a long established fact that a reader will be 
                    distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less 
                    normal distribution.</p>
                </div>
            </div>
        </div>
    )
}

export default Country