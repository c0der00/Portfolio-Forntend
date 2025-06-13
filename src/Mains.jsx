import github from './images/github.png';
import linked_in from './images/linked_in.png';
import { motion } from 'framer-motion';
import design from './images/ren-Photoroom.png'

const Main = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, delay: 0.2 }}
      id="mainy"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-20 py-10 gap-10"
    >
      {/* Left Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h3 className="text-white font-medium text-2xl font-poppins">Hey! It's Me</h3>
        <h2 className="text-[#03B0FD] text-4xl sm:text-5xl lg:text-6xl font-normal font-inder mt-2">
          Hardik Vandarvala
        </h2>
        <p className="text-white text-lg sm:text-xl font-light mt-4 font-poppins">
          I am a <span className="typewriter"></span>
        </p>

        {/* Socials */}
        <div className="flex items-center justify-center lg:justify-start mt-6 flex-wrap">
          <p className="text-white text-lg font-light font-poppins mr-4 mb-2">Follow me:</p>
          <div className="flex gap-4">
            <a href="https://github.com/c0der00" target="_blank" rel="noreferrer">
              <img src={github} alt="GitHub" className="w-7 h-7 hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/hardik-vandar-321ba3301/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linked_in} alt="LinkedIn" className="w-7 h-7 hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <a href="mailto:hardik.210180107052@gmail.com">
            <button className="px-6 py-3 rounded-full border-2 border-[#03B0FD] bg-[#151925] text-[#03B0FD] font-semibold text-sm font-inter hover:shadow-[0_0_20px_#6fc5ff50] hover:scale-105 transition-all">
              E-Mail Me
            </button>
          </a>
          <button
            onClick={() =>
              window.open(
                'https://drive.google.com/file/d/1JItaYVmPB3BgThGzhEfiUw8ARQT3ayuW/view?usp=sharing',
                '_blank'
              )
            }
            className="px-6 py-3 rounded-full bg-[#03B0FD] text-[#151925] font-semibold text-sm font-inter hover:bg-[#6fc5ff] hover:shadow-[0_0_20px_#6fc5ff50] hover:scale-105 transition-all"
          >
            Resume
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img
          className="w-64 h-1/2 sm:w-72 md:w-80 lg:w-[350px] h-auto"
          src={design}
          alt="design"
        />
      </div>
    </motion.div>
  );
};

export default Main;
