import React from "react";
import { assets, testimonialsData } from "../assets/assets.js";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="container mx-auto py-16 px-4 lg:px-32 w-full overflow-hidden bg-gray-50"
      id="Testimonials"
    >
      <motion.h1
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl font-extrabold mb-4 text-center text-gray-800"
      >
        Customer{" "}
        <span className="underline underline-offset-8 decoration-red-500 font-light">
          Testimonials
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: -10 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center text-gray-500 mb-14 max-w-xl mx-auto text-lg"
      >
        Real stories from those who found home with us.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-10">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white max-w-xs border border-gray-200 shadow-xl rounded-2xl px-8 py-10 flex flex-col items-center transition-transform hover:shadow-2xl duration-200"
          >
            <motion.img
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="w-20 h-20 rounded-full border-4 border-red-100 shadow mb-4 object-cover"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="text-lg text-gray-800 font-semibold">{testimonial.name}</h2>
            <p className="text-gray-400 mb-3 text-sm">{testimonial.title}</p>
            <div className="flex justify-center gap-1 mb-3">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <motion.img 
                  key={i} 
                  src={assets.star_icon} 
                  alt="star" 
                  className="w-5 h-5"
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
            <p className="text-gray-600 text-base italic">"{testimonial.text}"</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;