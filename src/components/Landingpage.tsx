import React from 'react';
import Spline from '@splinetool/react-spline';
import leftSvg from '../assets/left.svg';

const Landingpage: React.FC = () => {
  return (
    <>
      <div className="main-container relative min-h-screen w-screen bg-[#070707] overflow-hidden flex flex-col md:flex-row items-center justify-between px-4 md:px-12">
        {/* Left SVG decoration with adjusted positioning */}
        <img
          src={leftSvg}
          alt="Left decoration"
          className="absolute top-[-32%] left-[-30%] md:top-[-32%] md:left-[-30%] z-0 w-auto h-auto max-w-[50%] opacity-80 pointer-events-none left-svg"
        />

        {/* Text content */}
        <div className="relative z-10 md:w-1/2 w-full text-center md:text-left pt-32 pb-12 md:pt-40 content-wrapper">
          <p className="text-sm tracking-widest text-gray-400 uppercase">
            Creative Web Design Agency!
          </p>
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            <span className="block">CREATIVE <span className="text-indigo-500">MINDS</span>.</span>
            <span className="block">POWERFUL <span className="text-indigo-500">CODE</span>.</span>
            <span className="block">WELCOME TO <span className="text-indigo-500">WEBDRAVE</span>.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10">
            Creating innovative web solutions for the digital future
          </p>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-black rounded-full font-bold text-black hover:bg-gray-100 transition duration-300">
              <span className="w-6 h-6 flex items-center justify-center bg-white text-black rounded-full">→</span>
              Contact
            </button>
          
        </div>

        {/* Spline 3D model */}
        <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end overflow-visible spline-wrapper">
          <div className="w-[100%] max-w-[600px] h-[400px] md:h-[100vh] px-4 md:px-0">
            <Spline scene="https://prod.spline.design/dBgM7heoEmjDSdB7/scene.splinecode" />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .main-container {
            transform: scale(0.65);
            transform-origin: top left;
            width: 154%;
            min-height: 154vh;
            overflow: visible !important;
          }

          .left-svg {
            transform: scale(1.4);
            transform-origin: top left;
          }

          .content-wrapper {
            padding-top: 12vh !important;
          }

          .spline-wrapper {
            transform: translateY(-8%);
            height: 50vh !important;
          }

          /* Additional mobile-specific styles */
          .content-wrapper {
            text-align: center; /* Ensure text is centered on mobile */
          }

          .spline-wrapper {
            display: none; /* Hide the 3D model on very small screens */
          }

          .buttons-container {
            flex-direction: column; /* Stack buttons vertically on mobile */
            gap: 1rem; /* Add more spacing between buttons */
          }
        }

        @media (max-width: 480px) {
          .main-container {
            transform: scale(0.5);
            width: 200%;
            min-height: 200vh;
          }

          .left-svg {
            transform: scale(2);
          }

          .content-wrapper {
            padding-top: 20vh !important; /* Increase padding for better spacing */
          }

          .spline-wrapper {
            display: none; /* Hide the 3D model on very small screens */
          }

          .buttons-container {
            gap: 1.5rem; /* Even more spacing between buttons */
          }
        }
      `}</style>
    </>
  );
};

export default Landingpage;