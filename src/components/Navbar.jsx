import { useEffect, useState } from 'react'
import { assets } from '../assets/assets.js'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if(showMobileMenu) {
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  },[showMobileMenu])
  
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={assets.logo} 
          alt="logo" 
          className="h-10 w-auto" 
        />
        <ul className='hidden md:flex gap-8 text-white font-semibold'>
          {['Home', 'About', 'Projects', 'Testimonials'].map((item, index) => (
            <motion.li
              key={index}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a 
                href={`#${item === 'Home' ? 'Header' : item}`}
                className='transition-colors duration-200 px-3 py-2 rounded-md hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white'
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='hidden md:block bg-gradient-to-r bg-white text-gray-900 px-8 py-2 rounded-full shadow-lg font-semibold hover:from-blue-600 hover:to-blue-800 transition-colors duration-200'
        >
          SignUp
        </motion.button>
        <motion.img
          whileTap={{ scale: 0.9 }}
          src={assets.menu_icon}
          className='md:hidden w-7 cursor-pointer'
          alt="menu"
          onClick={() => setShowMobileMenu(true)}
        />
      </div>
      
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className='md:hidden fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all z-20'
          >
            <div className='flex justify-end p-6 cursor-pointer'>
              <motion.img
                whileTap={{ scale: 0.9 }}
                src={assets.cross_icon}
                className='w-6'
                alt="close"
                onClick={() => setShowMobileMenu(false)}
              />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
              {['Home', 'About', 'Projects', 'Testimonials'].map((item, index) => (
                <motion.a
                  key={index}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  href={`#${item === 'Home' ? 'Header' : item}`}
                  className='px-4 py-2 rounded-full inline-block'
                  onClick={() => setShowMobileMenu(false)}
                >
                  {item}
                </motion.a>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar