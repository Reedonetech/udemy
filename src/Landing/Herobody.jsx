import React from 'react'
import image4 from '../assets/download.jpeg'
const Herobody = () => {
    return (
        <div>
    <div className='lg:flex flex-col pt-[2%] lg:px-10 px-[20px] lg:gap-2 '>
            <h1 className='lg:text-[30px] font-black'>All the skills you need in one place</h1>
            <p>From critical skills to technical topics, Udemy supports your professional development.</p>
            <div className='flex flex-wrap gap-10 pt-5 border-b-1 pb-3'>
                <p><span className=' hover:text-sky-900 underline font-bold'>Data Science</span></p>
                <p><span  className=' hover:text-sky-900 underline font-bold'>IT Certificate</span></p>
                <p><span  className=' hover:text-sky-900 underline font-bold'>LeaderShip</span></p>
                <p><span  className=' hover:text-sky-900 underline font-bold'>Web Development</span></p>
                <p><span  className=' hover:text-sky-900 underline font-bold'>Communication</span></p>
                <p><span  className=' hover:text-sky-900 underline font-bold'>Business Analystic</span></p>
            </div>
            <div className='lg:flex grid grid-cols-2 grid-rows-2 pt-5 lg:gap-5 gap-10 items-center lg:justify-start'>
                <div className='w-[150px] flex flex-col h-[50px] bg-blue-700 rounded items-center text-center px-1 hover:text-red-600'>
                    <p>ChatGPT</p>
                    <p>4M+ Learner</p>
                </div>
                <div className='w-[150px] flex flex-col h-[50px] bg-blue-700 rounded items-center text-center px-1 hover:text-red-600'>
                    <p>Data Science</p>
                    <p>7M+ Learners</p>
                </div>
                <div className='w-[150px] flex flex-col h-[50px] bg-blue-700 rounded items-center text-center px-1 hover:text-red-600'>
                    <p>Python</p>
                    <p>47.7M+ Learners</p>
                </div>
                <div className='w-[150px] flex flex-col h-[50px] bg-blue-700 rounded items-center text-center px-1 hover:text-red-600'>
                    <p>Machine Learning</p>
                    <p>8M+ Learners</p>
                </div>
                <div className='w-[150px] flex flex-col h-[50px] bg-blue-700 rounded items-center text-center px-1 hover:text-red-600'>
                    <p>Deep Learning</p>
                    <p>2M+ Learners</p>
                </div>
                <div className='lg:w-[200px] w-[150px] flex flex-col lg:h-[50px] h-[75px] bg-blue-700 rounded items-center text-center px-1 hover:text-red-600'>
                    <p>Artificial Intelligence(AI)</p>
                    <p>3M+ Learners</p>
                </div>
                <div className='w-[150px] flex flex-col h-[50px] bg-blue-700 rounded items-center text-center px-1 hover:text-red-600'>
                    <p>Statics</p>
                    <p>1M+ Learners</p>
                </div>
                <div className='w-[150px] flex flex-col h-[50px] bg-blue-700 rounded items-center text-center px-1 hover:text-red-600'>
                    <p>Nature</p>
                    <p>4M+ Learners</p>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col gap-5 py-5'>
                <div className='flex-col border'>
                    <div>
                        <img src={image4} className='rounded lg:w-80 w-120' alt="" />
                    </div>
                    <div className='p-5'>
                        <p className='w-60'>ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More</p>
                        <p>4.5 ⭐⭐⭐⭐⭐ (44,584)</p>
                        <p><del>N</del>10,900 <del>N48,900</del></p>
                        <p>Bestseller</p>
                    </div>
                </div>
                <div className='flex-col border'>
                    <div>
                        <img src={image4} className='rounded lg:w-80 w-120' alt="" />
                    </div>
                    <div className='p-5'>
                        <p className='w-60'>ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More</p>
                        <p>4.5 ⭐⭐⭐⭐⭐ (44,584)</p>
                        <p><del>N</del>10,900 <del>N48,900</del></p>
                        <p>Bestseller</p>
                    </div>
                </div>
                <div className='flex-col border'>
                    <div>
                        <img src={image4} className='rounded lg:w-80 w-120' alt="" />
                    </div>
                    <div className='p-5'>
                        <p className='w-60'>ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More</p>
                        <p>4.5 ⭐⭐⭐⭐⭐ (44,584)</p>
                        <p><del>N</del>10,900 <del>N48,900</del></p>
                        <p>Bestseller</p>
                    </div>
                </div>
                <div className='flex-col border'>
                    <div>
                        <img src={image4} className='rounded lg:w-80 w-120' alt="" />
                    </div>
                    <div className='p-5'>
                        <p className='w-60'>ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More</p>
                        <p>4.5 ⭐⭐⭐⭐⭐ (44,584)</p>
                        <p><del>N</del>10,900 <del>N48,900</del></p>
                        <p>Bestseller</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <button className='w-70 bg-amber-600 h-10 text-center rounded text-stone-50 font-bold cursor-pointer'>Show All Data Science Course</button>
            </div>
        </div>
    </div>
  )
}

export default Herobody