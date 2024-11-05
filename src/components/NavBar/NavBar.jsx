import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { IoSunny } from "react-icons/io5";
import DropDownMenu from './DropDownMenu';
import Button from '../Button/Button';
import DropdownServices from '../DropDowns/DropdownServices';
import DropDownAbout from '../DropDowns/DropDownAbout';
import { IoMoon } from "react-icons/io5";
import DropDownBg from '../DropDowns/DropDownBg';

const NavBar = () => {
    const tl = useRef(gsap.timeline({ paused: true }));
    const line1 = useRef();
    const line2 = useRef();
    const line3 = useRef();
    const [isPlay, setIsPlay] = useState(false)

    const [isClick, setIsClick] = useState(() => {
        return JSON.parse(localStorage.getItem('isClick')) || false;
      });
    
      const darkModeHandler = () => {
        const newIsClick = !isClick;
        setIsClick(newIsClick);
        localStorage.setItem('isClick', JSON.stringify(newIsClick));
        window.dispatchEvent(new Event('storage'));
      };

    

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
        .to('body', {
            overflow: 'hidden'
        }, 'a')
        .to('.nav', {
            height: '450px',
            width: '95%',
            padding: '5px 15px',
            duration: .2
        }, 'a')
        .to('.dropdownmenu', {
            opacity: 1,
            display: 'flex'
        })
    })


    const clickHandler = () => {
        if(!isPlay){
            tl.current.play()
        }
        else{
            tl.current.reverse()
        }
        setIsPlay(!isPlay)
    }
    
    const handleMouseEnter = (index) => {
        if (window.innerWidth >= 1024) {
            let i = 10
            const targetClass = (index === 0) ? '.dropDownS' : (index === 2) && '.dropDownA';
        
            if (targetClass) {
                gsap.to(targetClass, {
                    display: 'flex',
                    opacity: 1,
                    duration: 0.4
                });
            }
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
            if(index != i) {
                gsap.to('.dropDownBg', {
                    display: 'hidden',
                    opacity: 0
                })
            }
            if(index === 0 || index === 2){
                gsap.to('.dropDownBg', {
                    display: 'block',
                    opacity: 1
                })
            }
        }
        gsap.to(`.underline-${index}`, {
            width: '100%',
            duration: '.26',
        })
    }
    const handleMOuseLeave = (index) => {
        gsap.to(`.underline-${index}`, {
            left: '100%', 
            duration: .26,
            onComplete: function(){
                gsap.set(this._targets[0], {width: '0', left: 0})
            }
        })
    }


    

  return (
    <div className='fixed z-50 w-full px-[12px] py-[15px] lg:px-[20px] lg:py-[15px] flex flex-col items-center justify-center'>
        <DropdownServices />
        <DropDownAbout />
        <DropDownBg />
        <nav className={`bg-[${isClick ? '' : ''}] ${isClick ? 'bg-[#ffffffc6]' : 'bg-[#0e0f11c7]'} nav px-[10px] py-[5px] backdrop-blur-[10px] w-full flex justify-between lg:py-[20px] lg:px-[20px] flex-col items-center rounded-[10px]`}>
            <div className='w-full flex justify-between items-center'>
                <h1 className='text-[23px] lg:text-[30px] font-bold'>
                    Shape.
                </h1>
                <div className='hidden lg:flex gap-[20px]'>
                {
                    ['services', 'work', 'about', 'blog', 'contact'].map((elem, index) => {
                        return(
                            <>
                                <h1 key={index} onMouseLeave={(() => {handleMOuseLeave(index)})} onMouseEnter={(() => {handleMouseEnter(index)})} className='menuElem relative capitalize font-extralight cursor-pointer text-[15px] xl:text-[16px] z-[110] leading-[1.1] overflow-x-hidden h-[20px]'>
                                    {elem}
                                    <div className={`underline-${index} absolute w-0 h-[1px] ${isClick ? 'bg-black' : 'bg-white'}`}></div>
                                </h1>
                            </>
                        )
                    })
                }
                </div>
                <div className='flex gap-[10px] lg:gap-[20px] items-center'>
                    <div onClick={darkModeHandler} className='w-fit h-fit'>
                        {
                            isClick ? <IoMoon size={18} className='cursor-pointer'/> : <IoSunny size={18} className='cursor-pointer'/>
                        }
                    </div>
                    <Button />
                    <div onClick={clickHandler} className='menu relative flex items-center justify-center w-[20px] h-[15px] flex-col gap-[3px] cursor-pointer lg:hidden'>
                        <div ref={line1} className={`line1 w-[20px] h-[3px] ${isClick ? 'bg-black' : 'bg-white'}`}></div>
                        <div ref={line2} className={`line2 w-[20px] h-[2px] ${isClick ? 'bg-black' : 'bg-white'}`}></div>
                        <div ref={line3} className={`line3 w-[20px] h-[3px] ${isClick ? 'bg-black' : 'bg-white'}`}></div>
                    </div>
                </div>
            </div>
            <DropDownMenu className='lg:hidden'/>
        </nav>
    </div>
  )
}

export default NavBar