import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-[1000] flex justify-center items-center w-full h-[100px] bg-[#151925] transition-all duration-300">
      <div className="w-[90%] flex justify-between items-center">
        <div className="w-[35%] flex justify-start">
          <h2 className="text-white font-[Poppins] font-semibold text-xl">Portfolio</h2>
        </div>
        <div className="w-[55%] flex justify-around">
          {['mainy', 'aboutMey', 'skills', 'project', 'contact'].map((section, index) => (
            <ScrollLink
              key={index}
              to={section}
              spy={true}
              smooth={true}
              offset={-140}
              duration={600}
              className="relative w-[120px] h-[30px] text-[#03B0FD] text-[18px] font-medium font-[Inter] cursor-pointer transition-colors duration-400 hover:text-white focus:text-white after:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-400 hover:after:left-0 hover:after:w-full"
            >
              {section === 'mainy'
                ? 'Home'
                : section === 'aboutMey'
                ? 'About Me'
                : section === 'skills'
                ? 'Skills'
                : section === 'project'
                ? 'Projects'
                : 'Contact Me'}
            </ScrollLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
