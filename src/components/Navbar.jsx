import { useEffect, useState } from 'react'
import { assets } from '../assets/assets.js'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if(showMobileMenu) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    }else{
      document.body.style.overflow = 'auto'; // Allow scrolling when menu is closed
    }
    return () => {
      document.body.style.overflow = 'auto'; // Reset overflow when component unmounts
    };
  },[showMobileMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt="logo" className="h-10 w-auto" />
        <ul className='hidden md:flex gap-8 text-white font-semibold'>
          <li>
            <a href="#Header"
              className='transition-colors duration-200 px-3 py-2 rounded-md hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white'>
              Home
            </a>
          </li>
          <li>
            <a href="#About"
              className='transition-colors duration-200 px-3 py-2 rounded-md hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white'>
              About
            </a>
          </li>
          <li>
            <a href="#Projects"
              className='transition-colors duration-200 px-3 py-2 rounded-md hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white'>
              Projects
            </a>
          </li>
          <li>
            <a href="#Testimonials"
              className='transition-colors duration-200 px-3 py-2 rounded-md hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white'>
              Testimonials
            </a>
          </li>
        </ul>
        <button className='hidden md:block bg-gradient-to-r bg-white text-gray-900 px-8 py-2 rounded-full shadow-lg font-semibold hover:from-blue-600 hover:to-blue-800 transition-colors duration-200'>
          SignUp
        </button>
        <img
          src={assets.menu_icon}
          className='md:hidden w-7 cursor-pointer'
          alt="menu"
          onClick={() => setShowMobileMenu(true)}
        />
      </div>
      {/* mobile menu  */}
      {showMobileMenu && (
        <div className='md:hidden fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all z-20'>
          <div className='flex justify-end p-6 cursor-pointer'>
            <img
              src={assets.cross_icon}
              className='w-6'
              alt="close"
              onClick={() => setShowMobileMenu(false)}
            />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <a
              href="#Header"
              className='px-4 py-2 rounded-full inline-block'
              onClick={() => setShowMobileMenu(false)}
            > Home </a>
            <a
              href="#About"
              className='px-4 py-2 rounded-full inline-block'
              onClick={() => setShowMobileMenu(false)}
            > About </a>
            <a
              href="#Projects"
              className='px-4 py-2 rounded-full inline-block'
              onClick={() => setShowMobileMenu(false)}
            > Projects </a>
            <a
              href="#Testimonials"
              className='px-4 py-2 rounded-full inline-block'
              onClick={() => setShowMobileMenu(false)}
            > Testimonials </a>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
