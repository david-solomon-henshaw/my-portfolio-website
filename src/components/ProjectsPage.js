
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaAws, FaReact, FaDatabase, FaPython, FaCamera, FaNode } from 'react-icons/fa';
import { SiFirebase, SiFlask, SiRender } from 'react-icons/si'; // Added Flask, Firebase, and Render icons
import licensePlateGif from '../assets/License Plate App.gif'; // Adjust the path based on the location of your gif

const projects = [
  {
    name: 'Trash Collection Record-Taking App',
    description: 'A comprehensive application for managing trash collection records for a waste management company. Built to streamline operations and improve record-keeping.',
    technologies: [
      { name: 'React', icon: <FaReact size={20} /> },
      { name: 'Node.js', icon: <FaNode size={30} /> },
      { name: 'MongoDB', icon: <FaDatabase size={20} /> },
    ],
    repoLink: 'https://github.com/yourusername/trash-collection-app',
    demoLink: 'https://yourtrashcollectionapp.live',
    image: 'https://via.placeholder.com/600x400', // Replace with actual image URL
  },
  {
    name: 'Gym Tracker App',
    description: 'A fitness tracking application built with AWS, React, and Amplify to help users monitor their workouts and progress efficiently.',
    technologies: [
      { name: 'React', icon: <FaReact size={20} /> },
      { name: 'AWS', icon: <FaAws size={20} /> },
      { name: 'Amplify', icon: <FaAws size={20} /> }, // Replaced SiAmplify with a generic AWS icon
    ],
    repoLink: 'https://github.com/yourusername/gym-tracker-app',
    demoLink: 'https://yourgymtrackerapp.live',
    image: 'https://via.placeholder.com/600x400', // Replace with actual image URL
  },
  {
    name: 'License Plate Scanner Web App',
    description: 'A web application designed for estate security and management, featuring license plate recognition to enhance safety and convenience for residents.',
    technologies: [
      { name: 'React', icon: <FaReact size={20} /> },
      { name: 'Firebase', icon: <SiFirebase size={20} /> }, // Firebase for frontend hosting
      { name: 'Flask', icon: <SiFlask size={20} /> },       // Flask for backend
      { name: 'Render', icon: <SiRender size={20} /> },     // Render for hosting the API
      { name: 'Python', icon: <FaCamera size={20} /> },     // Python for image processing
      { name: 'Github', icon: <FaGithub size={20} /> }
    ],
    repoLink: 'https://github.com/yourusername/license-plate-scanner',
    demoLink: 'https://yourlicenseplatescanner.live',
    image: licensePlateGif, // License plate GIF
  },
];

const Projects = () => {
  return (
    <section id='projects' className="py-16 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-white text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <motion.div
              key={project.name}
              className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-white">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-4 mb-4">
                {project.technologies.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-2 text-gray-300">
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-4">
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-100 flex items-center gap-2 transition-colors duration-300"
                >
                  <span className="hidden md:inline">Code</span>
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-100 flex items-center gap-2 transition-colors duration-300"
                >
                  <FaExternalLinkAlt size={24} />
                  <span className="hidden md:inline">Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
