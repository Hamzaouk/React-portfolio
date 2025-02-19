import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/Logo.png"
import { FaLinkedin, FaGithub, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    if (sectionId === 'admin') {
      navigate('/admin');
      setIsMenuOpen(false);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.offsetTop - 96;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
    { id: 'admin', label: 'Admin page', className: 'text-red-500 hover:text-red-400' }
  ];

  const socialLinks = [
    { href: "https://linkedin.com/in/your-profile", Icon: FaLinkedin },
    { href: "https://github.com/your-username", Icon: FaGithub },
    { href: "https://twitter.com/your-handle", Icon: FaSquareXTwitter },
    { href: "https://instagram.com/your-profile", Icon: FaInstagram }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-[0_4px_6px_-1px_rgba(255,255,255,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src={logo} 
                alt="logo" 
                onClick={() => scrollToSection('hero')} 
                className="cursor-pointer h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-6">
                {navigationItems.map((item) => (
                  <li 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`cursor-pointer transition-colors duration-200 ${
                      item.className || 'text-white hover:text-gray-400'
                    }`}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Social Icons */}
            <div className="hidden md:flex items-center justify-center gap-4 text-2xl">
              {socialLinks.map(({ href, Icon }, index) => (
                <a 
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition-colors duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-400 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black">
            {navigationItems.map((item) => (
              <div
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                  item.className || 'text-white hover:text-gray-400'
                }`}
              >
                {item.label}
              </div>
            ))}
            
            {/* Mobile Social Icons */}
            <div className="flex items-center justify-center gap-4 text-2xl pt-4 border-t border-gray-700">
              {socialLinks.map(({ href, Icon }, index) => (
                <a 
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition-colors duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div className="h-24"></div>
    </>
  );
};

export default Navbar;