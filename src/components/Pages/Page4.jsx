import React, { useEffect, useState } from 'react'

import page4img from '../../asset/page4Img.webp'
import Page4Button from '../Button/Page4Button'
import Hannah from '../../asset/Hannah.webp'
import PlayButton from '../Button/PlayButton'
import { SiComma } from "react-icons/si";


const Page4 = () => {

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
    <div className='page4 relative w-full flex flex-col h-[80vh] md:h-[60vh] lg:h-[90vh] '>
        <div className={`w-full h-[50%] ${isClick ? 'bg-black' : 'bg-[#1A1B1E]'}`}></div>
        <div className={`w-full h-[50%] ${isClick ? 'bg-white' : 'bg-[#0E0F11]'}`}></div>
        <div className='w-full cursor-pointer h-[60vh] xl:h-[65vh] md:h-[45vh] lg:h-[70vh] absolute top-[50%] translate-y-[-50%] left-0 px-[25px] xl:px-[100px]'>
            <img src={page4img} className='w-full h-full object-cover rounded-[20px]' />
            <div className='absolute text-[23px] md:text-[35px] leading-[.6] top-0 py-[15px] md:py-[25px] lg:py-[55px] lg:text-[45px] lg:px-[30px] px-[10px] flex flex-col items-start'>
              <h1 className={`${isClick ? 'bg-white' : 'bg-[#0E0F11]'} px-[15px] py-[10px] pt-[15px] rounded-t-[15px] flex`}><SiComma className='text-[10px] md:text-[14px] rotate-180 -mt-[7px]'/><SiComma className='text-[10px] md:text-[14px] rotate-180 -ml-[3px] md:ml-[-5px] -mt-[7px] mr-2'/>  Shape created</h1>
              <h1 className={`${isClick ? 'bg-white' : 'bg-[#0E0F11]'} -mt-1 border-[#0E0F11] inline-block px-[15px] py-[10px] rounded-r-[15px]`}>something better than I ever</h1>
              <h1 className={`${isClick ? 'bg-white' : 'bg-[#0E0F11]'} -mt-1 inline-block px-[15px] py-[10px] rounded-br-[15px]`}>could have imagined</h1>
              <div className={`flex items-center gap-[10px] ${isClick ? 'bg-white' : 'bg-[#0E0F11]'} py-[10px] px-[15px] -mt-1 rounded-b-[15px]`}>
                <img src={Hannah} className='w-[45px] h-[45px] rounded-[10px]' alt="" />
                <div className='leading-[1.2]'>
                  <h1 className='text-[15px]'>Hannah Wessel</h1>
                  <h1 className='text-[14px] text-[#B1B1B1]'>Co-Founder, Stoneletters</h1>
                </div>
              </div>
            </div>
            <div className={`absolute -bottom-4 right-0 xl:right-[60px] px-[20px] py-[20px] rounded-t-[20px] ${isClick ? 'bg-white' : 'bg-[#0E0F11]'}`}>
              <Page4Button />
            </div>
            <PlayButton />
        </div>
    </div>
  )
}

export default Page4