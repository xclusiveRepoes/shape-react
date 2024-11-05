import React, { useEffect, useState } from 'react'
import gsap from 'gsap'

import dropS from '../../asset/dropS.webp'


const DropdownServices = () => {

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
    <div className='fixed opacity-0 dropDownS hidden top-[90px] -translate-x-[70px] h-[0] z-50 justify-center'>
        <div className={`dropDownComponent ${isClick ? 'bg-white before:bg-[white]' : 'bg-[#1A1B1E] before:bg-[#1A1B1E]'} before:left-[33%] w-[700px] h-[50vh] z-50 rounded-[25px] px-[50px] py-[20px] flex justify-between items-center`}>
            <div className='flex flex-col justify-around'>
                {
                    [
                        {title:'Web Design', desc: 'Deliver your business to a wider audience'},
                        {title:'Craft CMS', desc: 'The most reliable way to build a website'},
                        {title:'Branding', desc: 'Creating brands your proud of'},
                        {title:'SEO', desc: 'Get your brand seen online'},
                        {title:'Shopify', desc: 'Custom Shopify store in 4 weeks'}
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
                    <h1 className='text-[16px]'>View all Services</h1>
                    <h1 className={`text-[13px] xl:text-[15px] ${isClick && 'text-[#5d5d5d]'}`}>We don't stop there, check out all the services we offer here at Shape</h1>
                </div>
                <div>
                    <img src={dropS} className='w-[100%] rounded-[20px]' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DropdownServices