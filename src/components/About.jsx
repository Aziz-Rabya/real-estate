import { assets } from "../assets/assets.js";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-col items-center 
    container mx-auto p-14 md:px-20
     lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <motion.h1
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl sm-text-4xl
       font-bold mb-2"
      >
        About{" "}
        <span
          className="underline
       underline-offset-4 decoration-1 under font-light"
        >
          Our Brand
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: -10 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-gray-500 maxy-w-80
      text-center mb-8"
      >
        Passionate About Properties, Dedicated to Your Vision
      </motion.p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <motion.img
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
        />
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start mt-10 text-gray-600"
        >
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pt-28">
            {[10, 12, 20, 25].map((num, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl font-medium text-gray-800">{num}+</p>
                <p>
                  {index === 0 ? "Years of Excellence" : 
                   index === 1 ? "Projects Completed" : 
                   index === 2 ? "Mn. Sq. Ft. Delivered" : "Ongoing Projects"}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="my-10 max-w-lg"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-2 rounded"
          >
            Learn more
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;