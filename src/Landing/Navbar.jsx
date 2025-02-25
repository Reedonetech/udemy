import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import image1 from '../assets/download.png'
import image2 from '../assets/world-icon-png-6.png'
import image3 from '../assets/logo-udemy.svg'



const Navbar = () => {
  return (
    <div>
      <div className='lg:flex justify-between px-5 py-10 hidden'>
        <img src={image3} className='w-18' alt="" />
        <div className=' gap-5 px-10 items-center '>
            <div className='flex justify-between gap-5 items-center'>
                <p>Explore</p>
                <input type="search" name="" id="" placeholder='🔍 Search for anything' className='bg-amber-500 w-[40vw] h-[5vh] border-2 rounded-3xl px-[10px]' />
                <p>Udemy Business</p>
                <p>Tech Business</p>
                <img src={image1} className='w-[20px] h-[20px]' alt="" />
                <button  className='bg-fuchsia-600 text-blue-700 w-20 h-[30px] rounded'>Login</button>
                <button className='bg-blue-300 text-blue-700 w-20 h-[30px] rounded'>Sign Up</button>
                <img src={image2} className='w-[25px] h-[25px] border-2 border-emerald-500' alt="" />
            </div>
        </div>
    </div>
    <div className='lg:hidden flex items-center justify-around py-[15px]'>
       <CiMenuBurger className='text-[25px]'/>
       <img src={image3} className='w-18' alt="" />
       <div className='flex gap-[5px]'>
       <IoMdSearch className='text-[25px]'/>
       <TiShoppingCart className='text-[25px]'/>
       </div>


    </div>
    </div>
  )
}

export default Navbar