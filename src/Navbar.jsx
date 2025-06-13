import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { id: 'mainy', label: 'Home' },
    { id: 'aboutMey', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'project', label: 'Projects' },
    { id: 'contact', label: 'Contact Me' },
  ];

  return (
    <div className="fixed top-0 left-0 z-[1000] w-full bg-[#151925] transition-all duration-300">
      <div className="w-[90%] mx-auto flex justify-between items-center h-[100px]">
        {/* Logo */}
        <div className="text-white font-[Poppins] font-semibold text-xl">
          Portfolio
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-[55%] justify-around">
          {navItems.map((item, index) => (
            <ScrollLink
              key={index}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-140}
              duration={600}
              className="relative w-[120px] h-[30px] text-[#03B0FD] text-[18px] font-medium font-[Inter] cursor-pointer transition-colors duration-400 hover:text-white focus:text-white after:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-400 hover:after:left-0 hover:after:w-full"
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#151925] py-6 space-y-4">
          {navItems.map((item, index) => (
            <ScrollLink
              key={index}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-100}
              duration={600}
              onClick={() => setIsOpen(false)}
              className="text-[#03B0FD] text-[18px] font-medium font-[Inter] cursor-pointer transition-colors duration-400 hover:text-white"
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
