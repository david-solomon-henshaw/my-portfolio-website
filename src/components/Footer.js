// src/components/Footer.js

import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4">
          <p>&copy; {new Date().getFullYear()} Solomon David Henshaw. All rights reserved.</p>
        </div>
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-100"
          >
            <FaLinkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-100"
          >
            <FaGithub size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-100"
          >
            <FaTwitter size={24} />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
        <div className="text-gray-400 text-sm">
          <p>Crafted with care by Solomon David Henshaw</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
