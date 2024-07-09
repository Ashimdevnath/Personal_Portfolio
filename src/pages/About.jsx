import React from 'react';
import aboutImage from '../assets/image/ShadowImage.jpg'; // Replace with your actual image path
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Me</h2>
        <p className="text-center text-gray-600 mb-12">
          I am a web developer with a passion for creating innovative and user-friendly web applications.
        </p>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-[#FB6542] rounded-lg shadow-lg" style={{ zIndex: '-1', margin: '20px' }}></div>
              <img src={aboutImage} alt="About" className="rounded-lg shadow-lg" />
            </div>
          </div>
          
          <div className="lg:w-2/3 lg:pl-8">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Developing With a Passion While Exploring The World
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
            <p className="text-gray-600 mb-4">
              Let's talk with me.
            </p>
            <p className="text-gray-600 mb-4">
              ashimdevnath7261@gmail.com
            </p>
            
            <div className="flex space-x-4 text-[#FB6542] mb-4">
              <a href="#" className="text-2xl hover:text-gray-700">
                <FaLinkedin />
              </a>
              <a href="#" className="text-2xl hover:text-gray-700">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-gray-700">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl hover:text-gray-700">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Frontend and Backend Developer</h3>
          <div className="w-24 h-1 bg-[#FB6542] mb-4"></div>
          <p className="text-gray-600 mb-4">
            I have expertise in both frontend and backend development, creating seamless and efficient web applications.
          </p>
          
          <div className="space-y-4">
            
            <div>
              <p className="text-gray-600">HTML</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-[#FB6542] h-2.5 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div>
              <p className="text-gray-600">CSS</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-[#FB6542] h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <p className="text-gray-600">JavaScript</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-[#FB6542] h-2.5 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div>
              <p className="text-gray-600">React Js</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-[#FB6542] h-2.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
          
          <button className="mt-6 px-6 py-3 bg-[#FB6542] text-white rounded hover:bg-[#d94625]">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
