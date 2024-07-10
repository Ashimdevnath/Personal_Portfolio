import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';
import profileImage from '../assets/image/ProfileImage.png'; // Replace with your actual image path

const Introduction = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
      <div className="flex flex-col md:flex-row items-center md:items-start mb-8 md:mb-0 md:mr-8 lg:ml-40">
        <div className="flex flex-col items-center md:items-start mb-4 md:mr-8">
          <a href="https://www.linkedin.com/in/ashim-devnath/"  target="_blank" className="text-2xl  text-gray-700 hover:text-gray-900 mt-2 mb-6 md:block hidden ">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/ashim__devnath/"  target="_blank" className="text-2xl text-gray-700 hover:text-gray-900 mb-6 md:block hidden">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/ashim.devnath.566/"  target="_blank" className="text-2xl text-gray-700 hover:text-gray-900 mb-6 md:block hidden">
            <FaFacebook />
          </a>
          <a href="https://github.com/Ashimdevnath"  target="_blank" className="text-2xl text-gray-700 hover:text-gray-900 mb-6 md:block hidden">
            <FaGithub />
          </a>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2">I'm Web Developer</h1>
          <h2 className="text-2xl md:text-4xl text-gray-700 mb-4">Ashim A. Devnath</h2>
          <p className="text-base md:text-lg text-gray-600 mb-4 md:mr-16">
            I am passionate about building responsive and user-friendly web applications.
          </p>
          <button className="px-6 py-3 bg-[#FB6542] text-white rounded hover:bg-[#d94625]">
            Learn more
          </button>
        </div>
      </div>
      <div className="flex-shrink-0 w-full md:w-auto">
        <img src={profileImage} alt="Profile" className="rounded-lg w-full md:w-auto h-auto md:h-[40rem]" />
      </div>
    </section>
  );
};

export default Introduction;
