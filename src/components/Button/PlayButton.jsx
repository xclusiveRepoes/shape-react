import React from 'react'

import { IoMdPlay } from "react-icons/io";

const PlayButton = () => {
  return (
    <div className='w-[65px] absolute bottom-[40px] left-[80px] xl:left-[180px] h-[65px] text-black flex items-center justify-center text-[20px] rounded-full bg-[#D0FF71]'>
        <IoMdPlay />
    </div>
  )
}

export default PlayButton