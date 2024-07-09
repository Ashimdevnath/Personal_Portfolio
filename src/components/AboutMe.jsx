import React from 'react';
import aboutImage from '../assets/image/ShadowImage.jpg'; // Replace with your actual image path

const AboutMe = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Me</h2>
        <p className="text-center text-gray-600 mb-12">Passionate web developer with a love for creating dynamic and user-friendly web applications.</p>
        
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 px-4 md:px-0">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Developing With a Passion While Exploring The World.
            </h3>
            <div className="w-24 h-1 bg-[#FB6542] mb-4"></div>
            <p className="text-gray-600 mb-4">
              As a web developer, my passion for creating innovative solutions drives me to push the boundaries of what's possible. While exploring the world, I draw inspiration from diverse cultures and experiences, integrating unique perspectives into my work.
            </p>
            <p className="text-gray-600 mb-4">
              I approach every assignment with new and innovative ideas because I combine my passion for travel with my commitment to web development. My travels throughout the world have fueled my desire and enabled me to grow with an excitement that knows no bounds.
            </p>
            <p className="text-gray-600 mb-4">
              Driven by a passion for coding, I continuously strive to build user-centric web applications.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="px-6 py-3 bg-[#FB6542] text-white rounded hover:bg-[#d94625]">
                Contact Me
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-xs">
              <div className="absolute inset-0 bg-[#FB6542] rounded-lg shadow-lg" style={{ zIndex: '-1', top: '10px', left: '10px' }}></div>
              <img src={aboutImage} alt="About" className="rounded-lg shadow-lg relative" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
