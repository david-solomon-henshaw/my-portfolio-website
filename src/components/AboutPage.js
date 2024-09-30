import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      className="py-16 bg-black relative overflow-hidden min-h-screen" // Added min-h-screen
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 backdrop-blur-md bg-black bg-opacity-70 border border-white rounded-lg p-6 shadow-lg">
          I am a passionate web developer with experience in building responsive and dynamic web applications. My journey began far from the tech world, working as a laundry man. Every day, I faced challenges that tested my resilience, but I always believed that hard work and dedication could pave the way to a better future.
        </p>
        <p className="mt-4 backdrop-blur-md bg-black bg-opacity-70 border border-white rounded-lg p-6 shadow-lg">
          Driven by my desire to change my circumstances, I dove into learning technology. Late nights and early mornings spent studying JavaScript, React, and Node.js transformed my dreams into reality. From washing clothes to writing code, I've come a long way.
        </p>
        <p className="mt-4 backdrop-blur-md bg-black bg-opacity-70 border border-white rounded-lg p-6 shadow-lg">
          I found inspiration in stories of successful developers who started from humble beginnings. This motivated me to embrace challenges and stay committed to my learning path. I began building small projects, each a stepping stone toward greater confidence and competence in my abilities.
        </p>
        <p className="mt-4 backdrop-blur-md bg-black bg-opacity-70 border border-white rounded-lg p-6 shadow-lg">
          My skills include JavaScript, React, Node.js, and more. I’m particularly passionate about creating intuitive user experiences and robust backend systems. I believe that technology should be accessible to everyone, and I strive to build applications that reflect this philosophy.
        </p>
        <p className="mt-4 backdrop-blur-md bg-black bg-opacity-70 border border-white rounded-lg p-6 shadow-lg">
          Beyond coding, I enjoy collaborating with others, sharing knowledge, and contributing to open-source projects. I find fulfillment in mentoring those who are just starting their journey in tech, as I remember the challenges I faced. 
        </p>
        <p className="mt-4 backdrop-blur-md bg-black bg-opacity-70 border border-white rounded-lg p-6 shadow-lg">
          My story is one of perseverance and hope. I am committed to continuous growth and learning in the tech industry, driven by the belief that anyone can rise above their circumstances with determination and effort. I am excited to see where this journey will take me and look forward to contributing my skills to impactful projects.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutMe;
