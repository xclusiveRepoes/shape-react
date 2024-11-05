import React, { useEffect, useState } from 'react'
import Page5Button from '../Button/Page5Button'
import Marquee from '../Marquee/Marquee'

const Page5 = () => {

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
    <div className='page5 w-full sm:px-[45px] px-[25px] overflow-x-hidden'>
        <div className='w-full lg:flex items-start justify-between'>
            <div className='lg:w-[43%] xl:w-[45%] '>
                <h1 className='flex items-center gap-[5px] text-[15px] lg:hidden'><div className='w-[5px] h-[5px] rounded-full bg-white'></div>Sharing the love</h1>
                <h1 className='text-[30px] md:text-[35px] leading-[1] mt-[10px] lg:text-[45px] xl:text-[43px]'><h1 className='flex items-center gap-[5px] text-[15px] flex-shrink-0 lg:inline-block mr-[100px]'><div className='w-[5px] h-[5px] rounded-full bg-white lg:hidden '></div>Sharing the love</h1> A web design agency in Manchester that cares about you and your brand, no matter the size or what industry your business is in.</h1>
            </div>
            <div className={`page5Txt ${isClick ? 'text-black' : 'text-[#B1B1B1]'} mt-[20px] text-[15px] md:text-[16px] lg:w-[48%] xl:w-[40%] xl:text-[19px]`}>
                <h1>Born in 2010, MadeByShape is an Award-Winning Web Design Agency based in Manchester specialising in <a className={`${isClick ? 'text-[black]' : 'text-white'} ${isClick ? 'bg-[#e3e3e3]' : 'bg-[#26282C]'}`} href="">Web Design</a>, <a className={`${isClick ? 'text-[black]' : 'text-[#e3e3e3]'} ${isClick ? 'bg-[#e3e3e3]' : 'bg-[#26282C]'}`} href="">Branding</a>, <a className={`${isClick ? 'text-[black]' : 'text-[#e3e3e3]'} ${isClick ? 'bg-[#e3e3e3]' : 'bg-[#26282C]'}`} href="">eCommerce</a>, Digital Marketing and <a className={`${isClick ? 'text-[black]' : 'text-[#e3e3e3]'} ${isClick ? 'bg-[#e3e3e3]' : 'bg-[#26282C]'}`} href="">Organic SEO</a>. <br /> <br /></h1>
                <h1>Our content management system of choice is Craft CMS rather than WordPress, allowing you to manage your website pages, content and SEO easily. We're proud to be a verified Craft CMS and <a className={`${isClick ? 'text-[black]' : 'text-[#e3e3e3]'} ${isClick ? 'bg-[#e3e3e3]' : 'bg-[#26282C]'}`} href="">Craft Commerce</a> professional partner. <br /> <br /></h1>
                <h1>So, if you need a professional Manchester Web Design Agency to support you with your branding or website design, <a className={`${isClick ? 'text-[black]' : 'text-[#e3e3e3]'} ${isClick ? 'bg-[#e3e3e3]' : 'bg-[#26282C]'}`} href="">get in touch</a> with us today.</h1>
                <div className='py-[40px]'>
                <Page5Button />
            </div>
            </div>
        </div>
        <Marquee />
    </div>
  )
}

export default Page5