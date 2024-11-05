import React, { useEffect, useState } from 'react'
import Page6Button from '../Button/Page6Button'
import Office from '../ShapeOffice/Office'
import Page6CustomCursor from '../CustomCursor/Page6CustomCursor'

const Page6 = () => {

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
    <div className='page6 w-full px-[25px] lg:flex overflow-x-hidden lg:px-[0] lg:pl-[75px] justify-between border-t-[1px] border-transparent'>
        <Page6CustomCursor />
        <div className='flex flex-col gap-[15px] w-[250px] lg:w-[22%] lg:pt-[110px]'>
            <h1 className='flex leading-[1] items-center gap-[5px]'><div className={`w-[5px] h-[5px] ${isClick ? 'bg-black' : 'bg-white'} rounded-full`}></div> Blog</h1>
            <h1 className='text-[30px] lg:text-[50px] leading-[1]'>The latest from our design studio</h1>
            <Page6Button />
        </div>
        <div className='w-full lg:w-[70%] overflow-x-hidden'>
            <Office />
        </div>
    </div>
  )
}

export default Page6