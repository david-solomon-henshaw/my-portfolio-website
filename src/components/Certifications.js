import { motion } from 'framer-motion';
import { FaCertificate, FaSchool } from 'react-icons/fa';

const certifications = [
  { name: 'Coursera - Full-Stack Web Development', icon: <FaCertificate size={24} /> },
  { name: 'Coursera - Data Science Specialization', icon: <FaSchool size={24} /> },
  // Add more certifications as needed
];

const Certifications = () => {
  return (
    <section className="py-16 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-indigo-400">
                {cert.icon}
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
