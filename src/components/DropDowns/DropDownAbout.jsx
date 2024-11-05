import React, { useEffect, useState } from 'react'

import gsap from 'gsap'

import dropS from '../../asset/aboutVid.webp'

const DropDownAbout = () => {

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
    <div className='fixed opacity-0 dropDownA hidden top-[90px] h-[0] z-50 justify-center'>
        <div className={`dropDownComponent ${isClick ? 'bg-white before:bg-[white]' : 'bg-[#1A1B1E] before:bg-[#1A1B1E]'} before:left-[33%] translate-x-[55px] w-[700px] h-[50vh] z-50 rounded-[25px] px-[50px] py-[20px] flex justify-between items-center`}>
            <div className='flex flex-col justify-around'>
                {
                    [
                        {title:'About us', desc: 'An award winning agency in Manchester'},
                        {title:'Meet the Team', desc: 'Putting faces of names'},
                        {title:'Culture', desc: 'How we do things around there'},
                        {title:'Testimonials', desc: 'What our clients say about us'},
                    ].map((elem, index) => {
                        return(
                            <div key={index} className={`cursor-pointer dropBox ${isClick ? 'hover:bg-[#dadadadd]' : 'hover:bg-[#000000dd]'}`}>
                                <h1>{elem.title}</h1>
                                <h1 className={`tracking-tight ${isClick ? 'text-[#5d5d5d]' : 'text-[#ffffff72]'}`}>{elem.desc}</h1>
                            </div>
                        )
                    })
                }
            </div>
            <div className={`w-[40%] h-[91%] flex flex-col justify-between rounded-[20px] ${isClick ? 'bg-[#e9e9e9dd]' : 'bg-[#0E0F11]'} px-[20px] py-[25px]`}>
                <div className=' flex flex-col gap-[10px] tracking-tight'>
                    <h1 className='text-[16px]'>Watch our Showreel</h1>
                    <h1 className={`text-[13px] xl:text-[15px] ${isClick && 'text-[#5d5d5d]'}`}>Want a snippet of our work in under a minute? We've got just the thing for you...</h1>
                </div>
                <div>
                    <img src={dropS} className='w-[100%] rounded-[20px]' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DropDownAbout