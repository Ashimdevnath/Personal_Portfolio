import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import logo from '../assets/image/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#FB6542] py-4 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Social Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="https://www.facebook.com/ashim.devnath.566/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
            <FaFacebook size={24} />
          </a>
          <a href="https://x.com/AshimDevnath4" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.linkedin.com/in/ashim-devnath/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Ashimdevnath" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
            <FaGithub size={24} />
          </a>
        </div>

        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Email */}
        <div className="font-bold text-white">
          <a href="mailto:ashimdevnath7261@gamil.com" className="hover:text-gray-200">
            ashimdevnath7261@gamil.com
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-white mt-4">
        <p>Copyright © 2024 Personal Portfolio</p>
      </div>
    </footer>
  );
};

export default Footer;
