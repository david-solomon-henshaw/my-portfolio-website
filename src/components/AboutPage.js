import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaRoad, FaHandsHelping } from 'react-icons/fa'; // Importing icons
import { GiWashingMachine } from 'react-icons/gi';

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      className="py-16 bg-black text-white relative overflow-hidden min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background blob */}
      <div className="absolute inset-0 z-0">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#1a1a1a', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#blobGradient)"
            d="M0,64L30,85.3C60,107,120,149,180,165.3C240,181,300,171,360,160C420,149,480,139,540,144C600,149,660,171,720,160C780,149,840,107,900,96C960,85,1020,107,1080,128C1140,149,1200,171,1260,176C1320,181,1380,171,1410,165.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>

        {/* Timeline Section */}
        <div className="relative wrap overflow-hidden p-10 h-full">
          {/* Straight Line - Hidden on mobile */}
          <div className="border-2 border-white absolute h-full left-1/2 transform -translate-x-1/2 hidden sm:block"></div>

          {/* Journey Block */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-0 sm:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
              <GiWashingMachine className="text-black w-full h-full p-1" />
            </div>
            <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4">
              <h3 className="text-xl font-bold">From Laundry to Code</h3>
              <p className="text-gray-300 text-sm leading-snug tracking-wide">
                My journey started far from the tech world. Working as a laundry man taught me resilience and determination. Every challenge was a step towards something greater.
              </p>
            </div>
          </div>

          {/* The Learning Path Block */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-0 sm:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
              <FaRoad className="text-black w-full h-full p-1" />
            </div>
            <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4">
              <h3 className="text-xl font-bold">The Learning Path</h3>
              <p className="text-gray-300 text-sm leading-snug tracking-wide">
                Driven by a desire for change, I spent countless hours learning JavaScript, React, and Node.js. Late nights and early mornings became the norm as I transitioned from washing clothes to writing code.
              </p>
            </div>
          </div>

          {/* Building Projects Block */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-0 sm:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
              <FaLaptopCode className="text-black w-full h-full p-1" />
            </div>
            <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4">
              <h3 className="text-xl font-bold">Building Projects</h3>
              <p className="text-gray-300 text-sm leading-snug tracking-wide">
                I built small projects, each a stepping stone toward greater confidence in web development. Today, I work on creating intuitive, responsive web applications using the latest technologies.
              </p>
            </div>
          </div>

          {/* Collaboration and Mentorship Block */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-0 sm:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
              <FaHandsHelping className="text-black w-full h-full p-1" />
            </div>
            <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4">
              <h3 className="text-xl font-bold">Collaboration and Mentorship</h3>
              <p className="text-gray-300 text-sm leading-snug tracking-wide">
                Beyond coding, I love collaborating with others and mentoring new developers. I remember the challenges I faced, and I aim to help others overcome them as I did.
              </p>
            </div>
          </div>

          {/* Exploring SoloLearn Block */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-0 sm:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
              <FaLaptopCode className="text-black w-full h-full p-1" />
            </div>
            <div className="order-1 bg-gray-800 rounded-lg shadow-xl w-full sm:w-5/12 px-6 py-4">
              <h3 className="text-xl font-bold">Exploring New Tools: SoloLearn</h3>
              <p className="text-gray-300 text-sm leading-snug tracking-wide">
                Recently, I started playing around with SoloLearn to further refine my coding skills. It's been a rewarding journey of continuous learning and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
