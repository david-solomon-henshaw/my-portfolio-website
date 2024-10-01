import React from 'react';
import Hero from './HeroSection';
import Projects from './ProjectsPage';
import Certifications from './Certifications';
import Technologies from './Technologies';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Hero />
      <Technologies />
      <Projects id="projects" />
      <Certifications id="certifications" />
      <Link
      to="/contact"
      smooth={true}
      duration={500}
      className="fixed bottom-4 right-4 bg-black text-white border-2 border-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 cursor-pointer"
    >
      Contact
    </Link>
    </div>
  );
};

export default Home;
