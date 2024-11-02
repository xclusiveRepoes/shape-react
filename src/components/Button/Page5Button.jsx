import React from 'react'

import { GoArrowUpRight } from "react-icons/go";

const Page5Button = () => {
  return (
    <div className='btn flex items-center relative cursor-pointer'>
        <div className='bg-[#D0FF71] rounded-full text-black px-[15px] py-[5px]'>
            About Shape
        </div>
        <div className='circle bg-[#D0FF71] rounded-full text-black h-[34px] w-[34px] flex items-center justify-center -translate-x-[25%]'>
            <GoArrowUpRight />
        </div>
    </div>
  )
}

export default Page5Button