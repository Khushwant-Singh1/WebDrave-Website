import React, { useState, useEffect } from 'react';
import '../assets/react.svg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll event to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close the sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.querySelector('#sidebar');
      const hamburger = document.querySelector('#hamburger');
      
      if (isOpen && 
          sidebar && 
          hamburger && 
          !sidebar.contains(event.target as Node) && 
          !hamburger.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 shadow-md transition-all duration-300 ${isScrolled ? 'bg-[#070707]' : 'bg-transparent'}`}>
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <div>
            <a href="/" className="flex items-center text-white no-underline">
              <img src="/src/assets/logo.svg" alt="WebDrave Logo" className="h-5 mr-2" />
            </a>
          </div>
          
          {/* Hamburger Menu Button - Two Lines Only */}
          <div 
            id="hamburger"
            className="flex flex-col justify-between w-7 h-3 cursor-pointer z-50" 
            onClick={toggleMenu}
          >
            <div className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'transform translate-y-[7px] rotate-45' : ''}`}></div>
            <div className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'transform rotate-[-45deg]' : ''}`}></div>
          </div>
        </div>
      </nav>

      {/* Side Menu */}
      <div 
        id="sidebar"
        className={`fixed top-0 right-0 w-[300px] h-full bg-[#070707] z-40 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div 
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center cursor-pointer text-white bg-white/10 rounded-full hover:bg-white/20 transition-all duration-200 hover:rotate-90"
          onClick={toggleMenu}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M 2,2 L 18,18 M 2,18 L 18,2" />
          </svg>
        </div>

        {/* Sidebar Content */}
        <div className="pt-20 px-8">
          <ul className="list-none p-0 m-0">
            <li className="my-6"><a href="/" onClick={toggleMenu} className="text-white no-underline text-lg font-medium block hover:text-[#646cff] transition-colors duration-200">Home</a></li>
            <li className="my-6"><a href="/services" onClick={toggleMenu} className="text-white no-underline text-lg font-medium block hover:text-[#646cff] transition-colors duration-200">Services</a></li>
            <li className="my-6"><a href="/about" onClick={toggleMenu} className="text-white no-underline text-lg font-medium block hover:text-[#646cff] transition-colors duration-200">About</a></li>
            <li className="my-6"><a href="/contact" onClick={toggleMenu} className="text-white no-underline text-lg font-medium block hover:text-[#646cff] transition-colors duration-200">Contact</a></li>
          </ul>
        </div>
      </div>
      
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/70 z-30 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`} 
        onClick={toggleMenu}
      ></div>
    </>
  );
};

export default Navbar;