import React from 'react';
import leftSvg from '../assets/left.svg';

const Landingpage: React.FC = () => {
  return (
    <>
      <div className="relative min-h-screen w-screen max-w-[100%] bg-[#070707] overflow-hidden">
        {/* Left SVG decoration at top left corner */}
        <img 
          src={leftSvg} 
          alt="Left decoration" 
          className="absolute top-[-32%] left-[-30%] z-0 w-auto h-auto max-w-[50%] opacity-80"
        />
        
        {/* Content container */}
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Welcome to <span className="text-gradient">WebDrave</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Creating innovative web solutions for the digital future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:opacity-90 transition-all">
                Get Started
              </button>
              <button className="px-8 py-3 rounded-md border border-white/20 text-white font-medium hover:bg-white/10 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landingpage;