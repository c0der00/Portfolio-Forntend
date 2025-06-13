import React from 'react';

const Card = ({ imageUrl, altText, title, description, explore }) => {
  return (
    <div className="flex flex-col bg-[#1E2635] rounded-lg overflow-hidden shadow-[0_1rem_2rem_rgba(0,0,0,0.15)] cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_1.5rem_3rem_rgba(0,0,0,0.3)] w-full max-w-[40rem] min-h-[32rem] mx-auto">
      <img
        className="w-full h-48 sm:h-56 md:h-64 object-cover"
        src={imageUrl}
        alt={altText}
      />
      <div className="flex flex-col justify-between flex-grow p-6 sm:p-8">
        <h1 className="text-white text-2xl sm:text-3xl font-semibold mb-4">{title}</h1>
        <p className="text-[#f7f7f7a0] text-base sm:text-lg leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        <button
          onClick={() => window.open(explore, '_blank')}
          className="w-full text-lg sm:text-xl text-[#739efc] py-3 rounded-md transition duration-200 hover:bg-[rgba(230,236,255,0.2)]"
        >
          Explore <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
