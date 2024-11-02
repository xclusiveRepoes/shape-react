import React from 'react'

import { HiArrowDown } from "react-icons/hi2";

const Marquee = () => {
  return (
    <div className='w-full py-[100px]'>
        <div className='whitespace-nowrap'>
            <div className='inline-block letsWork mr-[10px]'>
                <div className='whitespace-nowrap flex items-center'>
                    <h1 className='text-[80px] md:text-[100px] lg:text-[150px] leading-[1.2] inline-block mr-[10px]'>Let's work together</h1>
                    <div className='w-[70px] md:w-[100px] h-[70px] md:h-[100px] rounded-full bg-[#D0FF71] flex items-center justify-center text-black text-[30px] flex-shrink-0'><HiArrowDown className='rotate-[-135deg]'/></div>
                </div>
            </div>
            <div className='inline-block letsWork mr-[10px]'>
                <div className='whitespace-nowrap flex items-center'>
                    <h1 className='text-[80px] md:text-[100px] lg:text-[150px] leading-[1.2] inline-block mr-[10px]'>Let's work together</h1>
                    <div className='w-[70px] md:w-[100px] h-[70px] md:h-[100px] rounded-full bg-[#D0FF71] flex items-center justify-center text-black text-[30px] flex-shrink-0'><HiArrowDown className='rotate-[-135deg]'/></div>
                </div>
            </div>
            <div className='inline-block letsWork mr-[10px]'>
                <div className='whitespace-nowrap flex items-center'>
                    <h1 className='text-[80px] md:text-[100px] lg:text-[150px] leading-[1.2] inline-block mr-[10px]'>Let's work together</h1>
                    <div className='w-[70px] md:w-[100px] h-[70px] md:h-[100px] rounded-full bg-[#D0FF71] flex items-center justify-center text-black text-[30px] flex-shrink-0'><HiArrowDown className='rotate-[-135deg]'/></div>
                </div>
            </div>
        </div>
        <div className='whitespace-nowrap'>
            <div className='inline-block letsWork2 mr-[10px]'>
                <div className='whitespace-nowrap flex items-center'>
                    <h1 className='text-[80px] md:text-[100px] lg:text-[150px] leading-[1.2] inline-block mr-[10px]'>Let's work together</h1>
                    <div className='w-[70px] md:w-[100px] h-[70px] md:h-[100px] rounded-full bg-[#D0FF71] flex items-center justify-center text-black text-[30px] flex-shrink-0'><HiArrowDown className='rotate-[-135deg]'/></div>
                </div>
            </div>
            <div className='inline-block letsWork2 mr-[10px]'>
                <div className='whitespace-nowrap flex items-center'>
                    <h1 className='text-[80px] md:text-[100px] lg:text-[150px] leading-[1.2] inline-block mr-[10px]'>Let's work together</h1>
                    <div className='w-[70px] md:w-[100px] h-[70px] md:h-[100px] rounded-full bg-[#D0FF71] flex items-center justify-center text-black text-[30px] flex-shrink-0'><HiArrowDown className='rotate-[-135deg]'/></div>
                </div>
            </div>
            <div className='inline-block letsWork2 mr-[10px]'>
                <div className='whitespace-nowrap flex items-center'>
                    <h1 className='text-[80px] md:text-[100px] lg:text-[150px] leading-[1.2] inline-block mr-[10px]'>Let's work together</h1>
                    <div className='w-[70px] md:w-[100px] h-[70px] md:h-[100px] rounded-full bg-[#D0FF71] flex items-center justify-center text-black text-[30px] flex-shrink-0'><HiArrowDown className='rotate-[-135deg]'/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Marquee