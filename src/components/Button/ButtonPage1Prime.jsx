import React from 'react'

import { MdArrowOutward } from "react-icons/md";

const ButtonPage1Prime = () => {
  return (
    <div>
        <div className='page1ButtonPrime flex items-center gap-[5px] cursor-pointer'>
            <h1>Meet the Team </h1>
            <div className='overflow-hidden relative '>
              <MdArrowOutward className='page1Arrow1'/>
              <MdArrowOutward className='page1Arrow absolute top-0 left-0 -translate-x-[100%] translate-y-[100%]'/>
            </div>
        </div>
    </div>
  )
}

export default ButtonPage1Prime