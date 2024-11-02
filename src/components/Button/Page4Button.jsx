import React from 'react'

import { GoArrowUpRight } from "react-icons/go";


const Page4Button = () => {
  return (
    <div className='btn flex items-center relative cursor-pointer '>
        <div className='bg-[#26282C] rounded-full text-white px-[15px] py-[5px]'>
            View more textimonials
        </div>
        <div className='circle bg-[#26282C] rounded-full text-white h-[34px] w-[34px] flex items-center justify-center -translate-x-[25%]'>
            <GoArrowUpRight />
        </div>
    </div>
  )
}

export default Page4Button