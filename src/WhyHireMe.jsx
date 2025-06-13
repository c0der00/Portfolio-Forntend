import React from 'react';
import scholar from './images/scholarship.png';
import project from './images/project.png';
import leetcode from './images/leetcode.png';
import { motion } from 'framer-motion';

const cardData = [
  {
    img: scholar,
    title: '2025',
    subtitle: 'GTU',
  },
  {
    img: project,
    title: '3+',
    subtitle: 'Projects',
  },
  {
    img: leetcode,
    title: '45',
    subtitle: 'LeetCode Problems Solved',
  },
];

const WhyHireMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
      className="px-6 sm:px-10 lg:px-20 py-16 bg-[#0f0f0f]"
      id="whyhire"
    >
      <h2 className="text-white text-3xl sm:text-4xl font-medium font-poppins text-center mb-12">
        Why Hire Me?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {cardData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#1E2635] w-full max-w-[250px] h-[200px] rounded-[20px] pt-6 px-4 flex flex-col items-center text-center shadow-md hover:shadow-lg hover:scale-[1.03] transition-transform"
          >
            <img src={item.img} alt={item.subtitle} className="w-[70px] h-[70px] mb-2" />
            <h4 className="text-white text-2xl font-poppins">{item.title}</h4>
            <p className="text-white/60 text-sm font-light font-poppins mt-1">{item.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhyHireMe;
