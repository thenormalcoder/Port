import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css'; 

const experiences = [
  {
    date: 'Jan 2022 - Jan 2023',
    role: 'Web Developer',
    company: 'Shopify',
    details: [
      'Developing and maintaining web applications using React.js and other technologies.',
      'Collaborating with cross-functional teams.',
      'Ensuring responsive design and cross-browser compatibility.',
    ],
  },
  {
    date: 'Jan 2023 - Present',
    role: 'Full stack Developer',
    company: 'Meta',
    details: [
      'Developing web applications using React.js.',
      'Collaborating with cross-functional teams.',
      'Ensuring cross-browser compatibility.',
    ],
  },
  // Add more experiences here
];

const Experience = () => {
  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Work Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            key={index}
            initial={{ x: index % 2 === 0 ? '-100vw' : '100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 2, type: 'spring' }}
          >
            <div className="content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.date}</p>
              <ul>
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
        <div className="md:timeline-line"></div>
      </div>
    </div>
  );
};

export default Experience;
