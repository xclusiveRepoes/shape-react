import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Page1 from './components/Pages/Page1'
import gsap from 'gsap'
import Page2 from './components/Pages/Page2'
import Page3 from './components/Pages/Page3'
import Page4 from './components/Pages/Page4'
import Page5 from './components/Pages/Page5'
import Page6 from './components/Pages/Page6'
import Footer from './components/Pages/Footer'

const App = () => {
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


  

  const scrollHandler = (e) => {
    if(e.deltaY < 0) {
      gsap.to('.nav', {
        y: 0
      })
    }
    else {
      gsap.to('.nav', {
        y: '-200%'
      })
    }
  }



  return (
    <div className={`main text-${isClick ? 'black' : 'white'} bg-[${isClick ? 'white' : '#0E0F11'}] border-t-[1px] border-[#0E0F11]`}>
      <NavBar />
      <Hero />
      <div onWheel={scrollHandler} className='pages'>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Footer />
      </div>
    </div>
  )
}

export default App