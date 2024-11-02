import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";

const SocialBar = () => {
  return (
    <div className='absolute z-10 top-0 left-[0] w-[60px] gap-[5px] rounded-br-[20px] bg-[#0E0F11] flex flex-col items-center justify-around pb-[10px]'>
        {
            [<FaLinkedin/>, <FaSquareXTwitter />, <FaGithub />, <FaInstagram />, <FaBehanceSquare />].map((elem, index) => {
                return (
                    <div key={index} className='w-[35px] h-[35px] bg-[#D0FF71] rounded-full flex items-center justify-center text-black cursor-pointer'>{elem}</div>
                )
            })
        }
    </div>
  )
}

export default SocialBar