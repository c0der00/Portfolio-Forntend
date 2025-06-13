import React from 'react';
import Card from './Card';
import Blog from './images/Bo.jpg';
import Freelancer from './images/free.jpg';
import video from './images/snake.jpg';
import { motion } from 'framer-motion';

const Projects = () => {
  const cards = [
    {
      imageUrl: Blog,
      altText: 'Blog application',
      title: 'Blog Website',
      description:
        'A dynamic and responsive Blog website showcasing blogs. project made using reactjs and appwrite.',
      explore: 'https://github.com/c0der00/Blog_ReactJS',
    },
    {
      imageUrl: Freelancer,
      altText: 'Freelance Point',
      title: 'Freelancer point',
      description:
        'A dynamic and responsive freelancer website. Freelancers can create profiles, showcase their skills, and search for job listings that match their expertise. Employers can post job listings, review freelancer profiles, and hire suitable candidates.',
      explore: 'https://github.com/c0der00/freelance-point',
    },
    {
      imageUrl: video,
      altText: 'Video Streaming',
      title: 'VidHubs',
      description:
        "A full stack project for a Video Streaming plateform where user can upload, view, and share videos along with like, comment, and subscription features",
      explore: 'https://github.com/c0der00/VidHubs',
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: '-100px', once: true }}
      id="project"
      className="bg-[#151925] py-16 px-6 sm:px-10 lg:px-20"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold text-[#03B0FD] text-center mb-12 font-poppins">
        Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Card
              imageUrl={card.imageUrl}
              altText={card.altText}
              title={card.title}
              description={card.description}
              explore={card.explore}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
