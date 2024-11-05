import React, { useState } from 'react'

import { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";


const ButtonHero = () => {

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
    <div className={`btnHero w-[180px] pl-[10px] pb-[10px] ${isClick ? 'bg-white' : 'bg-[#0E0F11]'}`}>
      <div className='btn flex items-center relative cursor-pointer'>
        <div className={`${isClick ? 'bg-black' : 'bg-[#26282C]'} rounded-full text-white px-[15px] py-[5px]`}>
            View our work
        </div>
        <div className={`circle ${isClick ? 'bg-black' : 'bg-[#26282C]'}  rounded-full text-white h-[34px] w-[34px] flex items-center justify-center -translate-x-[25%]`}>
            <GoArrowUpRight />
        </div>
      </div>
    </div>
  )
}

export default ButtonHero