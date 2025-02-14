import React from 'react';
import logo from "../assets/Logo.png"
import { FaLinkedin, FaGithub, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.offsetTop - 96;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-[0_4px_6px_-1px_rgba(255,255,255,0.1)] flex items-center justify-between py-6 px-8">
        <div className="flex flex-shrink-0 items-center">
          <img 
            src={logo} 
            alt="logo" 
            onClick={() => scrollToSection('hero')} 
            className="cursor-pointer"
          />
        </div>
        
        <div className="flex items-center space-x-8">
          <ul className="flex space-x-6">
          <li 
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-gray-400 cursor-pointer transition-colors duration-200"
            >
              Home
            </li>
            <li 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-gray-400 cursor-pointer transition-colors duration-200"
            >
              About Me
            </li>
            <li 
              onClick={() => scrollToSection('skills')}
              className="text-white hover:text-gray-400 cursor-pointer transition-colors duration-200"
            >
              Skills
            </li>
            <li 
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-gray-400 cursor-pointer transition-colors duration-200"
            >
              Projects
            </li>
            <li 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-gray-400 cursor-pointer transition-colors duration-200"
            >
              Contact
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center gap-4 text-2xl">
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white cursor-pointer hover:text-gray-400 transition-colors duration-200"/>
          </a>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white cursor-pointer hover:text-gray-400 transition-colors duration-200"/>
          </a>
          <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter className="text-white cursor-pointer hover:text-gray-400 transition-colors duration-200"/>
          </a>
          <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white cursor-pointer hover:text-gray-400 transition-colors duration-200"/>
          </a>
        </div>
      </nav>
      <div className="h-24"></div>
    </>
  );
};

export default Navbar;