import React from 'react'

import { GoArrowUpRight } from "react-icons/go";


const ContactBtn = () => {
  return (
    <div>
        <div className='btn flex items-center md:text-[16px] relative cursor-pointer'>
            <div className='bg-[#D0FF71] rounded-full text-black px-[15px] md:px-[20px] py-[5px] md:py-[8px]'>
                Contact us
            </div>
            <div className='circle bg-[#D0FF71] rounded-full text-black h-[34px] md:h-[40px] w-[34px] md:w-[40px] flex items-center justify-center -translate-x-[25%]'>
                <GoArrowUpRight />
            </div>
        </div>
    </div>
  )
}

export default ContactBtn