import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <motion.section
      id="contact"
      className="flex flex-col min-h-screen bg-black relative overflow-hidden" // Set to solid black
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Blob Background */}
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
            fill="url(#blobGradient)" // Apply gradient
            d="M0,64L30,85.3C60,107,120,149,180,165.3C240,181,300,171,360,160C420,149,480,139,540,144C600,149,660,171,720,160C780,149,840,107,900,96C960,85,1020,107,1080,128C1140,149,1200,171,1260,176C1320,181,1380,171,1410,165.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
          ></path>
        </svg>
      </div>

      {/* Main content */}
      <div className="flex-grow flex items-center justify-center z-10">
        <div className="w-full max-w-md sm:max-w-lg lg:max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center">Contact</h2>

          <form className="mt-8 space-y-12">
            <div className="border-b border-gray-600 pb-12">
              <motion.div
                className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 backdrop-blur-md bg-black bg-opacity-70 border border-white rounded-lg p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="col-span-full">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 flex items-center">
                    <FaUser className="mr-2 text-white" />
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-white sm:text-sm bg-gray-800 text-white"
                    required
                  />
                </div>

                <div className="col-span-full">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 flex items-center">
                    <FaEnvelope className="mr-2 text-white" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-white sm:text-sm bg-gray-800 text-white"
                    required
                  />
                </div>

                <div className="col-span-full">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 flex items-center">
                    <FaCommentDots className="mr-2 text-white" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-white sm:text-sm bg-gray-800 text-white"
                    required
                  ></textarea>
                </div>
              </motion.div>
            </div>

            {/* Submit Button */}
            <motion.div
              className="mt-6 flex items-center justify-end gap-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
           
              <button
                type="submit"
                className="rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Send
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;
