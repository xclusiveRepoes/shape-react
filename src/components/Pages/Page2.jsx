import React from 'react'
import v1 from '../../asset/v1.mp4'
import v2 from '../../asset/v2.webp'
import v3 from '../../asset/v3.webp'
import v4 from '../../asset/v4.webp'
import { TbUvIndex } from 'react-icons/tb'
import ContactBtn from '../Button/ContactBtn'
import GoogleImage from '../../asset/google.webp'
import CustomCursor from '../CustomCursor/CustomCursor'

const Page2 = () => {

    const data = [
        {date: '2023', name: 'Gary Neville', title: ['Refreshing Gary', 'Neville digital presence'], services: ['Branding', 'Website'], video: v1},
        {date: '2024', name: 'Enabl', title: ['Reimagining the built environment'], services: ['Branding', 'Website'], image: v2},
        {date: '2024', name: 'Sketch Studios', title: ['A workplace consultancy', 'creating inspiring environments'], services: ['Website', 'SEO'], image: v3},
        {date: '2024', name: 'Forma', title: ['Bringing architectural ideas to life', ], services: ['Branding', 'Website'], image: v4},

    ]
    const handleMouseEnter = () => {
        let video = document.querySelector('.page2Vid');
        video.play()
    }


  return (
    <div className='page2 w-full min-h-screen px-[20px] md:px-[40px] lg:px-[90px]'>
        <CustomCursor />
        <div className='flex flex-col gap-[15px] pb-[40px]'>
            <h1 className='flex items-center gap-[5px] text-[14px]'><div className='w-[6px] h-[6px] bg-white rounded-full'></div>Our Work</h1>
            <h1 className='leading-[1] text-[32px] md:text-[38px] lg:text-[55px]'>Take a look at <br /> our projects</h1>
        </div>
        <div className='w-full flex flex-col md:flex-row md:block flex-wrap items-center md:items-start md:justify-between gap-[40px] md:gap-0 lg:mt-[-100px] columns-2'>
            {
                data.map((elem, index) => {
                    return (
                        <div key={index} className={`page2Box overflow-hidden ${index === 0 && 'md:mt-[70px] lg:mt-[150px] pb-[40px]'}`}>
                            <div className='w-[87vw] h-[70vw] md:w-[44vw] sm:h-[60vw] md:h-[31vw] lg:w-[40vw] xl:w-[42vw] lg:h-[30vw] relative rounded-[20px] overflow-hidden'>
                                <div className='services absolute w-[210px] h-[45px] bg-[#0E0F11] right-0 top-[-100%] flex gap-[5px] pl-[15px] cursor-pointer'>
                                    {
                                        elem.services.map((element, i) => {
                                            return (
                                                <div key={i} className='w-[100px] h-[32px] bg-[#26282C] rounded-full flex items-center justify-center'>
                                                    <h1 className='text-[14px]'>{element}</h1>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                {
                                    index === 0 ? (
                                        <video onMouseEnter={handleMouseEnter} src={elem.video} muted loop className='page2Vid cursor-pointer w-full h-full object-cover object-top'></video>
                                    ) : (
                                        <img src={elem.image} className="w-full h-full object-cover cursor-pointer object-top" />
                                    )
                                }
                            </div>
                            <div className='py-[20px]'>
                                <div className='flex items-center gap-[10px] text-[#757576] text-[14px]'>
                                    <h1>{elem.date}</h1><div className='w-[5px] h-[5px] rounded-full bg-[#757576]'></div><h1>{elem.name}</h1>
                                </div>
                                <div className={`text-[21px] mt-[10px] leading-[1] lg:text-[28px] ${index != 2 && 'lg:flex'} lg:gap-1`}>
                                    {
                                        elem.title.map((item, number) => {
                                            return(
                                                <h1 key={number}>{item}</h1>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className='w-full py-[40px] flex flex-col items-center justify-center md:items-end md:px-[80px] gap-[20px] lg:mt-[-150px]'>
            <div className='flex flex-col items-center gap-[10px]'>
                <h1 className='text-[30px] md:text-[35px] leading-[1]'>Like what <br /> you see?</h1>
                <ContactBtn />
                <img src={GoogleImage} className='w-[150px] mt-[-10px]' />
            </div>
        </div>
    </div>
  )
}

export default Page2