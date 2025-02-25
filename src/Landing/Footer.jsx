import React from 'react'
import img from '../assets/logo-udemy new.svg'
import img1 from '../assets/world-icon-png-6.png'

const Footer = () => {
  return (
    <div>
        <div className='flex lg:flex-row flex-col justify-around pr-25  border-b-[1px]  pb-20 bg-gray-700 p-5 text-white'>
            <div className='flex flex-col px-10'>
                <h1 className=' flex pb-5'>About</h1>
                <p>About</p>
                <p>Career</p>
                <p>Contact Us</p>
                <p>Blog</p>
                <p>Investors</p>
            </div>
            <div className='flex flex-col px-10'>
                <h1 className=' flex pb-5'>Discovery Udemy</h1>
                <p>Get the App</p>
                <p>Teach on Udemy</p>
                <p>Planing and Pricing</p>
                <p>Afiliate</p>
                <p>Help and Support</p>
            </div>
            <div className='flex flex-col px-10'>
                <h1 className=' flex pb-5'>Udemy for Business</h1>
                <p>Udemy Business</p>
            </div>
            <div className='flex flex-col px-10'>
                <h1 className=' flex pb-5'>Legal & Accessibility</h1>
                <p>Accessibility statement</p>
                <p>Privacy Policy</p>
                <p>Sitemap</p>
                <p>Terms</p>
            </div>
        </div>
            <div className='flex items-center justify-between p-8  bg-gray-950 text-white'>
                <div className='flex gap-5 items-center'>
                    <img src={img} className='w-18' alt="logo" />
                    <p>© 2025 Udemy, Inc.</p>
                </div>
                <p>Cookie Setting</p>
                <div className='flex gap-3 items-center'>
                    <img src={img1} className='w-[20px] h-[20px] bg-white' alt="world" />
                    <p>English</p>
                </div>

            </div>
    </div>
  )
}

export default Footer