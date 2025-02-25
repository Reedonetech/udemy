import React from 'react'
import image5 from '../assets/volkswagen_logo.svg'
import image6 from '../assets/samsung_logo.svg'
import image7 from '../assets/cisco_logo.svg'
import image8 from '../assets/vimeo_logo_resized-2.svg'
import image9 from '../assets/hewlett_packard_enterprise_logo.svg'
import image10 from '../assets/citi_logo.svg'
import image11 from '../assets/ericsson_logo.svg'

const Logo = () => {
  return (
    <div className='py-10 pb-15'>
        <div className='items-center flex justify-center py-5'>
            <p className='text-xl text-center text-gray-600'>Trusted by over 16,000 companies and millions of learners around the world</p>
        </div>
        <div className='flex lg:flex-row grid-rows-4 lg:px-20 gap-10 px-1 justify-between'>
            <img src={image5} className='w-10' alt="volks" />
            <img src={image6} className='w-10' alt="samsung" />
            <img src={image7} className='w-10' alt="cisco" />
            <img src={image8} className='w-10' alt="vimeo" />
            <img src={image9} className='w-10' alt="hewlett" />
            <img src={image10} className='w-10' alt="citi" />
            <img src={image11} className='w-10' alt="ericsson" />

        </div>
    </div>
  )
}

export default Logo