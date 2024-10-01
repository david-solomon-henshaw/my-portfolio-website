import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaDatabase, FaGitAlt } from 'react-icons/fa';

const technologies = [
  { name: 'JavaScript', icon: <FaReact size={40} /> },
  { name: 'React', icon: <FaReact size={40} /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} /> },
  { name: 'HTML5', icon: <FaHtml5 size={40} /> },
  { name: 'CSS3', icon: <FaCss3Alt size={40} /> },
  { name: 'Python', icon: <FaPython size={40} /> },
  { name: 'MongoDB', icon: <FaDatabase size={40} /> },
  { name: 'Git', icon: <FaGitAlt size={40} /> },
];

const Technologies = () => {
  return (
    <section id="skills" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Technologies</h2>
        
        {/* Carousel container for mobile */}
        <div className="carousel-container md:hidden">
          <div className="carousel-track">
            {technologies.concat(technologies).map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="carousel-item bg-black p-4 rounded-lg flex flex-col items-center justify-center text-center border border-white"
                style={{
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
                }}
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
        
        {/* Standard grid for larger screens */}
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 hidden md:grid">
          {technologies.map((tech) => (
            <li
              key={tech.name}
              className="bg-black p-4 rounded-lg flex flex-col items-center justify-center text-center border border-white"
              style={{
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Technologies;