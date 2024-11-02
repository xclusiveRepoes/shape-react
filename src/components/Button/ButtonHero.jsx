import React from 'react'

import { GoArrowUpRight } from "react-icons/go";


const ButtonHero = () => {
  return (
    <div className='btnHero w-[180px] pl-[10px] pb-[10px] bg-[#0E0F11]'>
      <div className='btn flex items-center relative cursor-pointer'>
        <div className='bg-[#26282C] rounded-full text-white px-[15px] py-[5px]'>
            View our work
        </div>
        <div className='circle bg-[#26282C] rounded-full text-white h-[34px] w-[34px] flex items-center justify-center -translate-x-[25%]'>
            <GoArrowUpRight />
        </div>
      </div>
    </div>
  )
}

export default ButtonHero