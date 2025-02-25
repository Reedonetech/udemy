import React from 'react'
import image4 from '../assets/imgage.jpg'
import udm from '../assets/udm.png'


const Hero = () => {
  return (
    <div 
    className=' flex flex-col items-center lg:items-start'
    >
      <div className='flex items-center justify-center'>
            <img src={image4} className='lg:w-full lg:h-[65vh] h-[50vh] w-[90%] lg:flex hidden' alt="" />
            <img src={udm} className='   w-[90%] lg:hidden flex' alt="" />
        </div>
        <div className='lg:relative lg:bottom-[350px] lg:left-[50px] lg:shadow-2xl lg:w-[35vw] lg:h-[30vh] p-10'>
            <h1 className='lg:text-[30px] text-[20px] lg:font-bold font-semibold'>Save now. Learn anytime.</h1>
            <p>Get courses for as little as ₦7,900 and enjoy the freedom to learn the way you want (for less). Sale ends tomorrow.</p>
        </div>
        
    </div>
  )
}

export default Hero