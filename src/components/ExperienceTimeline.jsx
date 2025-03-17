import React, { useEffect, useState } from 'react';
import './ExperienceTimeline.css';

const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'at PurposeBuddy',
    description: '•Developed a REST API using PostManAPI and PostgreSQL to store data from learning management systems • Developed a full-stack web application using Flask, React and Docker to analyze GitHub data • Explored ways to visualize GitHub collaboration in a classroom setting',
    date: 'July 2024 - Sep 202',
  },
  {
    title: 'Full Stack Developer',
    company: 'at Meta',
    description: 'Developing and maintaining web applications...',
    date: 'Jan 2023 - Present',
  },
  {
    title: 'Software Engineer',
    company: 'at Google',
    description: 'Working with product teams to design and develop...',
    date: 'Feb 2021 - Dec 2021',
  },
];

const ExperienceTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 1000); // 1 second per experience card
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div id='experience' className='flex flex-col mt-20'>
    <h1  className='font-bold text-4xl text-center mx-auto mt-16' >Experiences</h1>
    <div className="timeline-container"  >
      <div className="vertical-line"></div>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`experience-block ${index % 2 === 0 ? 'left' : 'right'} ${
            index <= activeIndex ? 'visible' : ''
          }`}
        >
          <h3 className='text-black font-bold text-xl'>&lt;{exp.title}&gt;</h3>
          <h4>{exp.company}</h4>
          <p>{exp.description}</p>
          <span>{exp.date}</span>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default ExperienceTimeline;

