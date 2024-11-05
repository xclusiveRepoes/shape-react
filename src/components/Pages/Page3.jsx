import React, { useEffect, useState } from 'react'
import Page3Button from '../Button/Page3Button'
import gsap from 'gsap'


import img1 from '../../asset/img1.webp'
import img2 from '../../asset/img2.webp'
import img3 from '../../asset/img3.webp'
import img4 from '../../asset/img4.webp'
import img5 from '../../asset/img5.webp'
import Shape from '../../asset/shape.webp'
import Page3CustomCursor from '../CustomCursor/Page3CustomCursor'

const Page3 = () => {

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

    const Elements = [
        {title: 'Brand Identity', img:img1},
        {title: 'Websites', img:img2},
        {title: 'SEO', img:img3},
        {title: 'Craft CMS', img:img4},
        {title: 'Shopify', img:img5},
    ]

    const handleMouseEnter = (index) => {
        gsap.to('.page3Hero', {
            color: '#ffffff5c'
        })
        gsap.to(`.page3Hero-${index}`, {
            color: 'white'
        })
    }
    const handleMouseLeave =() => {
        gsap.to('.page3Hero', {
            color: 'white'
        })
    }
    const handleMouseEnterPrime = () => {
        gsap.to('.shapeImg', {
            left: 183,
            duration: .3,
            ease: "power4.out",
        })
        gsap.to('.shapeTxt', {
            right: 80,
            duration: .4
        })
    }
    const handleMouseLeavePrime = () => {
        gsap.to('.shapeImg', {
            left: 7,
            duration: .3,
            ease: "power4.out",
        })
        gsap.to('.shapeTxt', {
            right: 20,
            duration: .4
        })
    }

  return (
    <div className={`page3 w-full min-h-screen ${isClick ? 'bg-black' : 'bg-[#1A1B1E]'} ${isClick && 'text-white'} rounded-t-[20px] pt-[50px] lg:pt-[100px] px-[15px] lg:px-[40px] xl:px-[6vw]`}>
        <Page3CustomCursor />
        <div className='sm:w-[350px] md:w-[450px] lg:flex lg:w-full justify-between lg:items-start'>
            <h1 className='flex items-center gap-[8px] text-[14px]'><div className='w-[5px] h-[5px] bg-white rounded-full'></div>Our Expertise</h1>
            <div className='w-[350px] md:w-[470px] lg:w-[295px]'><h1 className='mt-[15px] leading-[1] text-[30px] md:text-[40px]'>How we take your business to the next  level</h1></div>
            <div className='lg:w-[300px]'><h1 className='text-[#B1B1B1] mt-[20px] text-[15px] mb-[20px]'>We are a digital marketing agency with expertise, and we’re on a mission to help you take the next step in your business.</h1><Page3Button /></div>
        </div>
        <div className='relative'>
            <div className='py-[50px] lg:flex flex-col lg:items-end lg:mt-[30px]'>
                {
                    Elements.map((elem, index) => {
                        return(
                            <div onMouseLeave={handleMouseLeave} onMouseEnter={() => {handleMouseEnter(index)}} key={index} className={`${window.innerWidth>=1024 && 'page3box'} w-full lg:w-[67%] flex cursor-pointer items-center gap-[35px] py-[15px] lg:py-[15px] lg:gap-[0] border-b-[1px] border-[#ffffff35]`}>
                                <img src={elem.img} alt="" className='rounded-[15px] w-[90px] lg:w-0 md:w-[150px] h-[70px] md:h-[110px] lg:h-[100px] object-cover' />
                                <h1 className={`page3Hero page3Hero-${index} text-[8vw] text-[white] leading-[1] xl:pt-[20px] lg:text-[7vw]`}>{elem.title}</h1>
                            </div>
                        )
                    })
                }
            </div>
            <div onMouseEnter={handleMouseEnterPrime} onMouseLeave={handleMouseLeavePrime} className='py-[40px] lg:absolute bottom-0'>
                <div className='shapeBox cursor-pointer w-[250px] h-[75px] bg-[#0E0F11] rounded-full px-[7px] flex items-center'>
                    <img src={Shape} alt="" className='shapeImg lg:absolute left-[7px] w-[60px] h-[60px] rounded-full' />
                    <div className='shapeTxt lg:absolute right-[20px] leading-[1.1] text-[15px] pl-[10px]'>
                        <h1>Hear from Andy</h1>
                        <h1 className='text-[#B1B1B1]'>Co-founder of Shape</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page3