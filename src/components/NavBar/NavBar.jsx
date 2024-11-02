import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { IoSunny } from "react-icons/io5";
import DropDownMenu from './DropDownMenu';
import Button from '../Button/Button';
import DropdownServices from '../DropDowns/DropdownServices';
import DropDownAbout from '../DropDowns/DropDownAbout';

const NavBar = () => {

    const [isClick, setIsClick] = useState(false);
    const tl = useRef(gsap.timeline({ paused: true }));
    const line1 = useRef();
    const line2 = useRef();
    const line3 = useRef();


    useGSAP(() => {
        tl.current.to(line2.current, {
            opacity: 0,
            duration: 0
        })
        .to(line1.current, {
            rotate: 45,
            duration: .1,
            position: 'absolute'
        }, 'a')
        .to(line3.current, {
            rotate: -45,
            duration: .1,
            position: 'absolute'
        }, 'a')
        .to('.nav', {
            height: '450px',
            backgroundColor: '#656565c2',
            padding: '5px 15px',
            duration: .2
        }, 'a')
        .to('.dropdownmenu', {
            opacity: 1,
            display: 'flex'
        })
    })


    const clickHandler = () => {
        if(!isClick){
            tl.current.play()
        }
        else{
            tl.current.reverse()
        }
        setIsClick(!isClick);
    }
    
    const handleMouseEnter = (index) => {
        if (window.innerWidth >= 1024) {
            // Determine the target class based on the index
            const targetClass = (index === 0) ? '.dropDownS' : (index === 2) && '.dropDownA';
        
            if (targetClass) {
                gsap.to(targetClass, {
                    display: 'flex',
                    opacity: 1,
                    duration: 0.4
                });
            }
        
            // Hide the other dropdown based on the index
            if (index === 0) {
                gsap.to('.dropDownA', {
                    display: 'none',
                    opacity: 0
                });
            } else {
                gsap.to('.dropDownS', {
                    display: 'none',
                    opacity: 0
                });
            }
        
            // Set the background color of the .nav element
            gsap.to('.nav', {
                backgroundColor: 'transparent',
                duration: 0
            });
        }
        
    }


    

  return (
    <div className='fixed z-50 w-full px-[12px] py-[15px] lg:px-[38px] lg:py-[30px] flex flex-col items-center justify-center'>
        <DropdownServices />
        <DropDownAbout />
        <nav className={`bg-[#0E0F11] nav px-[10px] py-[5px] backdrop-blur-[10px] w-full flex justify-between lg:py-[20px] lg:px-[20px] flex-col items-center rounded-[10px]`}>
            <div className='w-full flex justify-between items-center'>
                <h1 className='text-[23px] lg:text-[30px] font-bold'>
                    Shape.
                </h1>
                <div className='hidden lg:flex gap-[20px]'>
                {
                    ['services', 'work', 'about', 'blog', 'contact'].map((elem, index) => {
                        return(
                            <h1 key={index} onMouseEnter={(() => {handleMouseEnter(index)})} className='capitalize cursor-pointer text-[15px] z-[110] leading-[1.1]'>{elem}</h1>
                        )
                    })
                }
                </div>
                <div className='flex gap-[10px] lg:gap-[20px] items-center'>
                    <IoSunny size={18} className='cursor-pointer'/>
                    <Button />
                    <div onClick={clickHandler} className='menu relative flex items-center justify-center w-[20px] h-[15px] flex-col gap-[3px] cursor-pointer lg:hidden'>
                        <div ref={line1} className='line1 w-[20px] h-[2px] bg-white'></div>
                        <div ref={line2} className='line2 w-[20px] h-[2px] bg-white'></div>
                        <div ref={line3} className='line3 w-[20px] h-[2px] bg-white'></div>
                    </div>
                </div>
            </div>
            <DropDownMenu className='lg:hidden'/>
        </nav>
    </div>
  )
}

export default NavBar