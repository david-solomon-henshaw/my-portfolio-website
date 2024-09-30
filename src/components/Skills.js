import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
        <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <li className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl text-blue-500 mb-4">💻</div>
            <h3 className="text-xl font-semibold text-gray-900">JavaScript</h3>
          </li>
          {/* Add more skills as needed */}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
