import React from 'react'

const DropDownMenu = () => {
  return (
    <div className='dropdownmenu hidden w-full mt-[40px] opacity-0 flex-col justify-around gap-[15px]'>
        <div className='flex items-center gap-[10px]'>
            <div className='w-[5px] h-[5px] bg-white rounded-full'></div>
            <h1 className='text-[13px]'>Have a look around</h1>
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