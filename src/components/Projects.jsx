import React, {useEffect, useState} from "react";
import { assets, projectsData } from "../assets/assets"
import { motion } from "framer-motion";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024){
        setCardsToShow(projectsData.length);
      }else{
        setCardsToShow(1);
      }
    };
      updateCardsToShow();

      window.addEventListener('resize', updateCardsToShow);
      return ()=> window.removeEventListener('resize', updateCardsToShow);
  },[])

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  }
   const prevProject = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20
    lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <motion.h1
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-4xl
       font-bold mb-2 text-center"
      >
        Projects
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Completed
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: -10 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center
       text-gray-500 mb-8
        max-w-80 mx-auto"
      >
        Crafting Spaces, Building Legacies-Explore Our Portfolio
      </motion.p>

      <div className="flex justify-end items-center mb-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevProject} 
          className="p-3 bg-gray rounded mr-2" 
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previus" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextProject} 
          className="p-3 bg-gray rounded mr-2" 
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </motion.button>
      </div>

      <div className="overflow-hidden">
        <motion.div 
          className="flex gap-8
           transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex-shrink-0 w-full sm:w-1/4"
            >
              <img src={project.image} alt={project.title} className="w-full h-auto mb-14"/>
              <div className="absolute left-0 bottom-5 flex justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-white w-3/4 px-4 py-2 shadow-md"
                  >
                    <h2 className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {project.price} <span className="px-1">|</span>  {project.location}
                    </p>
                  </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;