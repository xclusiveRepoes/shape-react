import React, { useEffect, useState } from 'react'
import FooterBtn from '../Button/FooterBtn'
import { FaP, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import SocialBar from '../SocialBar/SocialBar';

const Footer = () => {

    const [isClick, setIsClick] = useState(() => {
        return JSON.parse(localStorage.getItem('isClick')) || false;
      });
      useEffect(() => {
        const handleStorageChange = () => {
          setIsClick(JSON.parse(localStorage.getItem('isClick')));
        };
         window.addEventListener('storage', handleStorageChange);
    
        return () => {
          window.removeEventListener('storage', handleStorageChange);
        };
      }, []);

  return (
    <footer className='footer w-full min-h-screen flex items-center justify-center px-[25px] xl:px-[40px]'>
        <div className={`w-full pb-[40px] lg:pb-0 relative h-[90%] ${isClick ? 'bg-[#010202] text-white' : 'bg-[#1A1B1E]'} rounded-[15px] `}>
            <SocialBar />
            <div className='px-[80px] py-[30px] h-[27vh] lg:h-[35vh] flex flex-col gap-[20px] xl:px-[180px]'>
                <h1 className='text-[23px] leading-[1.2] lg:text-[40px] xl:text-[50px]'>Do you like <br /> what you see?</h1>
                <FooterBtn />
            </div>
            <div className='md:flex md:w-full justify-around'>
                <div className='text-[15px] px-[25px] flex gap-[80px] md:gap-[15vw] sm:gap-[30vw]'>
                    <div>
                        <h1>Learn</h1>
                        <div className='mt-[10px]'>
                            {
                                ['About', 'Culture', 'Testimonials', 'Processes', 'FAQs', 'Branding FAQs', 'Blog'].map((elem, index) => {
                                    return(
                                        <h1 key={index} className='text-[#969797] text-[14px] mb-1 cursor-pointer'>{elem}</h1>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <h1>Explore</h1>
                        <div className='mt-[10px]'>
                            {
                                ['Home', 'Work', 'Services', 'Careers', 'Sectors', 'Hex Text', 'Contact'].map((elem, index) => {
                                    return(
                                        <h1 key={index} className='text-[#969797] text-[14px] mb-1 cursor-pointer'>{elem}</h1>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='px-[25px] md:px-[0] mt-[20px] text-[14px] flex flex-col gap-[5px]'>
                    <h1 className='pb-[20px]'>Get in touch</h1>
                    <h1 className='text-[#969797] cursor-pointer flex items-center gap-[10px]'><FaPhone />01942 894 596</h1>
                    <h1 className='text-[#969797] cursor-pointer flex items-center gap-[10px]'><IoMdMail />hello@madebyshape.co.uk</h1>
                    <div className='flex gap-[10px] text-[#969797] cursor-pointer mt-[10px] w-[200px]'>
                        <IoLocationSharp className=' flex-shrink-0' />
                        <h1>MadeByShape 1 Gibfield Park Avenue Atherton Manchester M46 0SU</h1>
                    </div>
                </div>
            </div>
            <div className='w-full hidden lg:flex items-center justify-center py-[40px]'>
                <h1 className='text-[11vw] tracking-[-5px] xl:text-[9vw]'>Crafting since 2010</h1>
            </div>
        </div>
    </footer>
  )
}

export default Footer