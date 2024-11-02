import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from 'gsap'

import { HiArrowDown } from "react-icons/hi2";

const CustomCursor = () => {

    useGSAP(() => {
        let page2 = document.querySelector('.page2');
        let boxes = document.querySelectorAll('.page2Box')
        const mouseMove = (e) => {
            gsap.to('.customCursor', {
                top: e.y - 45,
                left: e.x - 45,
                duration: 0,
                ease: 'none'
            })
        }
        page2.addEventListener('mousemove', mouseMove);
        boxes.forEach((elem, index) => {
            elem.addEventListener('mouseenter', () => {
                gsap.to('.customCursor', {
                    width: '90px',
                    height: '90px'
                })
            })
            elem.addEventListener('mouseleave', () => {
                gsap.to('.customCursor', {
                    width: 0,
                    height: 0
                })
            })
        })
    })

  return (
    <div className='customCursor w-[0px] h-[0px] flex items-center justify-center pointer-events-none text-black text-[35px] rounded-full bg-[#D0FF71] fixed z-20 top-0 left-0'>
        <HiArrowDown className='font-extralight stroke-none rotate-[-135deg]'/>
    </div>
  )
}

export default CustomCursor