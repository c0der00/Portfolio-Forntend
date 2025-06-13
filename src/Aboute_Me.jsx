import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
      className="mt-[10%] px-4"
      id="aboutMey"
    >
        <h2 className="text-white font-medium text-3xl sm:text-4xl font-poppins text-center mb-8">
        About Me
      </h2>
      <div className="flex justify-center items-center px-4">
        <p className="text-white text-opacity-80 text-base sm:text-lg md:text-xl font-light font-poppins text-center max-w-3xl leading-relaxed">
          Hello! I'm Hardik Vandarvala, a budding Full Stack Developer and Java Developer enthusiast. I am diving into front-end and back-end technologies, as well as exploring Spring and Node learning tools like Spring Boot and Node.js . Excited to connect and collaborate on innovative projects!
        </p>
      </div>
    </motion.div>
  );
};

export default AboutMe;
