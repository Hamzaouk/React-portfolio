import logo from "../assets/Logo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-[0_4px_6px_-1px_rgba(255,255,255,0.1)] flex items-center justify-between py-6 px-8">
        <div className="flex flex-shrink-0 items-center">
          <img src={logo} alt="logo" />
        </div>
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <ul className="flex space-x-6">
            <li className="text-white hover:text-gray-400 cursor-pointer transition-colors duration-200">
              About Me
            </li>
            <li className="text-white hover:text-gray-400 cursor-pointer transition-colors duration-200">
              Projects
            </li>
            <li className="text-white hover:text-gray-400 cursor-pointer transition-colors duration-200">
              Skills
            </li>
            <li className="text-white hover:text-gray-400 cursor-pointer transition-colors duration-200">
              Contact
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center gap-4 text-2xl">
          <FaLinkedin className="text-white cursor-pointer hover:text-gray-400 transition-colors duration-200"/>
          <FaGithub className="text-white cursor-pointer hover:text-gray-400 transition-colors duration-200"/>
          <FaSquareXTwitter className="text-white cursor-pointer hover:text-gray-400 transition-colors duration-200"/>
          <FaInstagram className="text-white cursor-pointer hover:text-gray-400 transition-colors duration-200"/>
        </div>
      </nav>
      <div className="h-24"></div>
    </>
  );
};

export default Navbar;