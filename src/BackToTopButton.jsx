import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[1000]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="group relative w-[50px] h-[50px] rounded-full bg-neutral-900 border-none font-semibold flex items-center justify-center shadow-[0_0_0_4px_rgba(180,160,255,0.25)] cursor-pointer overflow-hidden transition-all duration-300 hover:w-[140px] hover:rounded-full hover:bg-violet-300"
        >
          <svg
            className="w-3 transition-transform duration-300 group-hover:-translate-y-full"
            viewBox="0 0 384 512"
          >
            <path
              fill="white"
              d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
            />
          </svg>
          <span className="absolute bottom-[-20px] group-hover:bottom-2 text-white text-[0px] group-hover:text-sm transition-all duration-300">
            Back to Top
          </span>
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
