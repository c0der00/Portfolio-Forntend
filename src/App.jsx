import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Mains from './Mains';
import Skills from './Skill';
import WhyHireMe from './WhyHireMe';
import Projects from './project';
import ContactForm from './ContactForm';
import AboutMe from './Aboute_Me'
import './index.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className='bg-black'>
      {isLoading ? (
        <div className="flex justify-center items-center mt-[24%]">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className="w-5 h-2.5 mx-1 rounded bg-blue-500 animate-wave"
              style={{ animationDelay: `${index * 0.1}s` }}
            ></div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <Navbar />
          <Mains id="mainy" />
          <AboutMe id="aboutMey" />
          <WhyHireMe />
          <Skills id="skills" />
          <Projects id="project" />
          <ContactForm id="contact" />
        </div>
      )}
    </div>
  );
}

export default App;

