import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/image/Logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleHireMeClick = () => {
    window.location.href = 'https://wa.me/9574449365';
  };
  
  return (
    <nav className="bg-[#F1F1F2] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="ml-8">
          <img src={Logo} alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link to="/" className="hover:bg-[#FB6542] px-3 py-2 rounded">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:bg-[#FB6542] px-3 py-2 rounded">
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:bg-[#FB6542] px-3 py-2 rounded">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:bg-[#FB6542] px-3 py-2 rounded">
              Contact
            </Link>
          </li>
        </ul>

        {/* Hire Me Button */}
        <div className="mr-8">
          <button
            className="bg-[#FB6542] text-white px-4 py-2 rounded hover:bg-[#d94625]"
            onClick={handleHireMeClick}
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="outline-none mobile-menu-button">
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className="space-y-4 px-2 py-4">
          <li>
            <Link
              to="/"
              className="block text-sm px-2 py-4 hover:bg-[#FB6542] transition duration-300"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block text-sm px-2 py-4 hover:bg-[#FB6542] transition duration-300"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="block text-sm px-2 py-4 hover:bg-[#FB6542] transition duration-300"
              onClick={toggleMobileMenu}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block text-sm px-2 py-4 hover:bg-[#FB6542] transition duration-300"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
