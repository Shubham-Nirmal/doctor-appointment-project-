import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-white py-12 px-6 md:px-10 lg:px-20'>
      <div className='max-w-7xl mx-auto'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8'>
          
          {/* Left Section - Company Information */}
          <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           </p>
          </div>

          {/* Middle Section - Company Links */}
          <div className='space-y-4'>
            <h4 className='text-gray-900 font-bold text-sm uppercase tracking-wide'>Company</h4>
            <ul className='space-y-2'>
              <li><a href="/" className='text-gray-600 text-sm hover:text-gray-900 transition-colors'>Home</a></li>
              <li><a href="/about" className='text-gray-600 text-sm hover:text-gray-900 transition-colors'>About us</a></li>
              <li><a href="/contact" className='text-gray-600 text-sm hover:text-gray-900 transition-colors'>Contact us</a></li>
              <li><a href="/privacy" className='text-gray-600 text-sm hover:text-gray-900 transition-colors'>Privacy policy</a></li>
            </ul>
          </div>

          {/* Right Section - Contact Information */}
          <div className='space-y-4'>
            <h4 className='text-gray-900 font-bold text-sm uppercase tracking-wide'>Get in Touch</h4>
            <div className='space-y-2'>
              <p className='text-gray-600 text-sm'>+1-212-456-7890</p>
              <p className='text-gray-600 text-sm'>greatstackdev@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className='border-t border-gray-200 pt-6'>
          <p className='text-center text-gray-500 text-sm'>
            Copyright 2024@ Prescripto - All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
