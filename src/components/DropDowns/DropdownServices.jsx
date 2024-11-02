import React from 'react'
import gsap from 'gsap'

import dropS from '../../asset/dropS.webp'


const DropdownServices = () => {

    const handleMouseLeave = () => {
        gsap.to('.dropDownS', {
            display: 'none',
            opacity: 0,
            duration: .4
        })
        gsap.to('.nav', {
            backgroundColor: '#0E0F11',
            duration: 0
        })
    }

  return (
    <div className='fixed opacity-0 dropDownS hidden top-0 w-full h-screen justify-center'>
        <div className='bg-[#1A1B1E] w-[700px] h-[50vh] mt-[15vh] rounded-[25px] px-[50px] py-[20px] flex justify-between items-center'>
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
                            <div key={index} className='cursor-pointer dropBox'>
                                <h1>{elem.title}</h1>
                                <h1 className='tracking-tight text-[#ffffff72]'>{elem.desc}</h1>
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-[40%] h-[91%] flex flex-col justify-between rounded-[20px] bg-[#0E0F11] px-[20px] py-[25px]'>
                <div className=' flex flex-col gap-[10px] tracking-tight'>
                    <h1 className='text-[16px]'>View all Services</h1>
                    <h1 className='text-[13px]'>We don't stop there, check out all the services we offer here at Shape</h1>
                </div>
                <div>
                    <img src={dropS} className='w-[100%] rounded-[20px]' alt="" />
                </div>
            </div>
        </div>
        <div onMouseEnter={handleMouseLeave} className='absolute w-full h-full bg-[#2f2f2fbd] top-0 left-0 -z-[1]'></div>
    </div>
  )
}

export default DropdownServices