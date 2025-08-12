import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row bg-blue-900 rounded-lg px-6 md:px-10 lg:px-20 py-10'>
      
       {/* Left Side  */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 py-6 md:py-0'>
             <h1 className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight'>
                Book Appointment <br /> 
                 With Trusted Doctors
             </h1>
             <div className='flex items-center gap-4 text-white text-sm font-light'>
                <img className='w-24 h-24 object-cover rounded-full' src={assets.group_profiles} alt="Group of trusted doctors" />
                 <p className='max-w-xs'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
             </div>
             <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm hover:scale-105 transition-all duration-300'>
                Book appointment <img className='w-4 h-4' src={assets.arrow_icon} alt="Arrow icon" />
             </a>
        </div>

         {/* Right Side */}
         <div className='md:w-1/2 relative flex items-end justify-center md:justify-end'>
                <img className='w-full max-w-md h-auto object-contain' src={assets.header_img} alt="Medical professionals" />
         </div>
    </div>
  )
}

export default Header
