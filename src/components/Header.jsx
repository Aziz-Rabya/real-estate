import Navbar from "./Navbar"
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="min-h-screen
     mb-4 bg-cover bg-center
      flex items-center w-full overflow-hidden" style={{backgroundImage: "url('src/assets/header_img.png"}} id="Header">
      <Navbar />

      <div className="container text-center items-center
       mx-auto py-4 px-6 md:px-20 
       lg:px32 text-white">
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl
           md:text-[82px] max-w-3xl
            font-semibold pt-20 mx-auto"
        >
            Explore homes that fit your dreams
        </motion.h2>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-x-6 mt-16"
        >
            <a href="#Projects" className="border border-white px-8 py-3 rounded">Projects</a>
            <a href="#Contact" className="bg-blue-500 px-8 py-3 rounded">Contact Us</a>
        </motion.div>
      </div>
    </div>
  )
}

export default Header