import React, { useEffect, useState } from 'react'

const DropDownMenu = () => {

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
    <div className='dropdownmenu hidden w-full mt-[40px] opacity-0 flex-col justify-around gap-[15px]'>
        <div className='flex items-center gap-[7px]'>
            <div className={`w-[6px] h-[6px] -translate-y-1/3 ${isClick ? 'bg-black' : 'bg-white'} rounded-full`}></div>
            <h1 className='text-[14px] leading-[.9]'>Have a look around</h1>
        </div>
        <div className=''>
            {
                ['services', 'work', 'about', 'blog', 'contact'].map((elem, index) => {
                    return(
                        <h1 key={index} className='capitalize text-[45px] leading-[1.1]'>{elem}</h1>
                    )
                })
            }
        </div>
        <div className='mt-[20px]'>
            <h1>Start a project</h1>
        </div>
    </div>
  )
}

export default DropDownMenu