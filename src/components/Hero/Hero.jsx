import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import ButtonHero from '../Button/ButtonHero';
import Video from './video.mp4'
import { useGSAP } from '@gsap/react';


const Hero = () => {

  const [isWheel, setIsWheel] = useState(false)

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


  useEffect(() => {
    gsap.to('.nav', {
      width: '70%',
      borderRadius: `${window.innerWidth<1024 ? '15px' : '100px'}`,
      scrollTrigger: {
        trigger: '.hero',
        scrub: 1,
        start: `${window.innerWidth<1024 ? 'top 5%' : 'top 20%'}`,
        end: `${window.innerWidth<1024 ? 'top 5%' : 'top 20%'}`,
      }
    })
    gsap.from('.nav', {
      backgroundColor: 'transparent',
      scrollTrigger: {
        trigger: '.hero', 
        scrub: 2,
        start: `${window.innerWidth<1024 ? 'top 5%' : 'top 20%'}`,
        end: `${window.innerWidth<1024 ? 'top 5%' : 'top 20%'}`,
      }
    })
  })

  const handleWheel = (e) => {
    if(e.deltaY> 0){
      setIsWheel(true)
    }
  }

  return (
    <div onWheel={handleWheel} className='hero relative w-full min-h-screen px-[25px] lg:px-[6vw] mt-[11vh] lg:mt-[20vh]'>
      <div className='absolute z-10 md:left-[100px] lg:left-[14vw] '>
        <div className={`flex items-start ${isClick ? 'bg-white' : 'bg-[#0E0F11]'}  sm:w-[425.5px] w-[304px] lg:w-[547px] h-[40px]`}>
          <h1 className='text-[14px] ml-[15px] flex items-center gap-[7px]'> <div className={`w-[7px] h-[7px] ${isClick ? 'bg-black' : 'bg-white'} -translate-y-[20%] rounded-full`}></div>Hiya, we’re Shape <div className='hi text-[18px] -ml-[5px]'>👋</div></h1>
        </div>
        <div className=''>
          {
            ['A web design and ', 'branding agency', 'in Manchester'].map((elem, index) => {
              return (
                <div key={index}><h1 className={`heroTxt text-[35px] sm:text-[50px] lg:text-[65px] ${isClick ? 'bg-white' : 'bg-[#0E0F11]'} inline-block leading-[.84] px-[10px] py-[5px]`}>{elem} </h1></div>
              )
            })
          }
        </div>
        <ButtonHero />
      </div>
      <div className='w-full h-[105vh] lg:h-[80vh] rounded-[10px] overflow-hidden'>
        <video src={Video} autoPlay loop muted className='w-full h-full object-cover'></video>
      </div>
    </div>
  )
}

export default Hero