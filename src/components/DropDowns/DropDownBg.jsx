import React, { useEffect, useState } from 'react'
import gsap from 'gsap'

const DropDownBg = () => {
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

      const handlMouseEnter = () => {
        gsap.to('.dropDownS , .dropDownA' , {
            opacity: 0, 
            display: 'none'
        })
        gsap.to('.dropDownBg', {
            opacity: 0,
            display: 'none'
        })
      }
      
  return (
    <div onMouseEnter={handlMouseEnter} className={`dropDownBg hidden opacity-0 fixed left-0 top-0 w-full h-screen ${isClick ? 'bg-[#e4e4e4e3]' : 'bg-[#292929ad]'} backdrop-blur-[7px]`}>
        
    </div>
  )
}

export default DropDownBg