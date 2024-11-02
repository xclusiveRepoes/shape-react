import React from 'react'
import ButtonPage1 from '../Button/ButtonPage1'
import ButtonPage1Prime from '../Button/ButtonPage1Prime'

const Page1 = () => {
  return (
    <div className='page1 lg:flex justify-between items-start w-full px-[25px] lg:px-[6vw] py-[50px] lg:py-0'>
      <h1 className='flex gap-[5px] text-[14px] items-center'>
        <div className='w-[7px] h-[7px] rounded-full bg-white'></div>
        Who are we?
      </h1>
      <div>
        <div className=' sm:w-[530px] md:w-[650px] lg:w-[500px] xl:w-[860px]'>
          <h1 className='text-[28px] md:text-[34px] lg:text-[38px] xl:text-[45px] mt-[20px] leading-[1.1] lg:indent-[180px]'>
            An independent web design and branding agency in Manchester set up in 2010 who care, build relationships, have industry experience, and win awards.
          </h1>
        </div>
        <div className='py-[40px] flex gap-[20px] items-center'>
          <ButtonPage1 />
          <ButtonPage1Prime />
        </div>
      </div>
    </div>
  )
}

export default Page1