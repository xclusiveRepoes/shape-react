import React from 'react'

import page4img from '../../asset/page4Img.webp'
import Page4Button from '../Button/Page4Button'
import Hannah from '../../asset/Hannah.webp'
import PlayButton from '../Button/PlayButton'


const Page4 = () => {
  return (
    <div className='page4 relative w-full flex flex-col h-[80vh] md:h-[60vh] lg:h-[90vh] '>
        <div className='w-full h-[50%] bg-[#1A1B1E]'></div>
        <div className='w-full h-[50%] bg-[#0E0F11]'></div>
        <div className='w-full cursor-pointer h-[60vh] xl:h-[65vh] md:h-[45vh] lg:h-[70vh] absolute top-[50%] translate-y-[-50%] left-0 px-[25px] xl:px-[100px]'>
            <img src={page4img} className='w-full h-full object-cover rounded-[20px]' />
            <div className='absolute text-[25px] md:text-[35px] top-0 py-[15px] md:py-[25px] lg:py-[55px] lg:text-[45px] lg:px-[30px] px-[10px] flex flex-col items-start'>
              <h1 className='bg-[#0E0F11] inline-block px-[15px] py-[10px] pt-[15px] leading-[1] rounded-t-[15px]'>" Shape created</h1>
              <h1 className='bg-[#0E0F11] -mt-1 border-[#0E0F11] inline-block px-[15px] py-[10px] leading-[1] rounded-r-[15px]'>something better than I ever</h1>
              <h1 className='bg-[#0E0F11] -mt-1 inline-block px-[15px] py-[10px] leading-[1] rounded-br-[15px]'>could have imagined</h1>
              <div className='flex items-center gap-[10px] bg-[#0E0F11] py-[10px] px-[15px] -mt-1 rounded-b-[15px]'>
                <img src={Hannah} className='w-[45px] h-[45px] rounded-[10px]' alt="" />
                <div>
                  <h1 className='text-[15px]'>Hannah Wessel</h1>
                  <h1 className='text-[14px] text-[#B1B1B1]'>Co-Founder, Stoneletters</h1>
                </div>
              </div>
            </div>
            <div className='absolute -bottom-4 right-0 xl:right-[60px] px-[20px] py-[20px] rounded-t-[20px] bg-[#0E0F11]'>
              <Page4Button />
            </div>
            <PlayButton />
        </div>
    </div>
  )
}

export default Page4