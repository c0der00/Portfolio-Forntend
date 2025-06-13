import React from 'react';
import { motion } from 'framer-motion';
import SemiDonutChart from './SemiDonutChart';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: '-100px', once: true }}
      className="px-6 sm:px-10 lg:px-20 py-16 bg-[#0f0f0f]"
      id="skills"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold text-[#03B0FD] text-center mb-12 font-poppins">
        Skills
      </h2>

      {/* Languages Section */}
      <div>
        <h3 className="text-2xl sm:text-2xl text-white/70 font-normal mb-6 font-poppins">
          Languages
        </h3>
          <div className="flex justify-center flex-wrap gap-6">
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="HTML" />
          <SemiDonutChart percentage={50} fill="#03B0FD" txt="CSS" />
          <SemiDonutChart percentage={60} fill="#03B0FD" txt="JavaScript" />
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="Sql" />
          <SemiDonutChart percentage={50} fill="#03B0FD" txt="C" />
          <SemiDonutChart percentage={60} fill="#03B0FD" txt="Java" />
        </div>
      </div>

      {/* Libraries Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ margin: '-100px', once: true }}
        className="mt-16"
      >
        <h3 className="text-2xl sm:text-2xl text-white/70 font-normal mb-6 font-poppins">
          Libraries & Tools
        </h3>

        <div className="flex justify-center flex-wrap gap-6">
          <SemiDonutChart percentage={60} fill="#03B0FD" txt="ReactJS" />
          <SemiDonutChart percentage={65} fill="#03B0FD" txt="NodeJS" />
          <SemiDonutChart percentage={60} fill="#03B0FD" txt="Spring Boot" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
