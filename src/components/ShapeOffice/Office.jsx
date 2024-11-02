import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"

import o1 from '../../asset/o0.webp'
import o2 from '../../asset/o1.webp'
import o3 from '../../asset/o2.webp'
import o4 from '../../asset/o3.webp'
import o5 from '../../asset/o4.webp'
import o6 from '../../asset/o5.webp'

const Office = () => {

    const carosel = useRef()
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(carosel.current.scrollWidth - carosel.current.offsetWidth)
    }, [])

    const data = [
        {img: o1, read: '6 min read', title: 'Our Culture, Our Value & Our Studio', desc: "In our own words, how important culture, values and studio environment is to us as a web design agency at MadeByShape"},
        {img: o2, read: '10 min read', title: "Why haven't we upscaled our web design agency?", desc: "Co-Founder of MadeByShape, Andy Golpys, explains why we haven't turned our digital agency of 10 staff into 30."},
        {img: o3, read: '4 min read', title: "Why our studio outside of Manchester works for us", desc: "Hi, I'm Andy Golpys, Co-Founder here at MadeByShape.&nbsp;I started my web career 18 years ago as a freelancer, whilst at University. I pr..."},
        {img: o4, read: '6 min read', title: "Types of clients we wnat to work with", desc: "Here at MadeByShape in Manchester, we want to creates website for nice people. Here's a list of the types of clients we want to work with."},
        {img: o5, read: '7 min read', title: "Celebrating 13 years of MadeByShape", desc: "We started MadeByShape in 2010. In this article we look back at how the Agency was created."},
        {img: o6, read: '4 min read', title: "Why I chose to work for a small design agency", desc: "The size of the business you work for should be well-considered when looking for a job in design. Here's why I chose to work for a small design agency..."},
    ]

  return (
    <motion.div ref={carosel} drag='x' dragConstraints={{right: 0, left: -width}} className='w-full py-[45px] flex gap-[30px]'>
        {
            data.map((elem, index) => {
                return (
                    <div key={index} className='officeBoxes w-[75vw] sm:w-[55vw] md:w-[50vw] lg:w-[33vw] xl:w-[28vw] flex-shrink-0'>
                        <div className='relative w-full'>
                            <img src={elem.img} className='w-full h-[220px] md:h-[250px] lg:h-[220px] xl:h-[250px] object-cover rounded-[15px] pointer-events-none' alt="" />
                        </div>
                        <div className='py-[25px] w-[80%]'>
                            <h1 className='flex items-center gap-[10px] text-[14px] text-[#ffffff97]'><div className='w-[5px] h-[5px] bg-white rounded-full'></div>{elem.read}</h1>
                            <h1 className='text-[19px] mt-[10px] lg:text-[30px] leading-[1]'>{elem.title} </h1>
                            <p className='mt-[15px] text-[15px] text-[#ffffff9c]'>{elem.desc}</p>
                        </div>
                    </div>
                )
            })
        }
    </motion.div>
  )
}

export default Office