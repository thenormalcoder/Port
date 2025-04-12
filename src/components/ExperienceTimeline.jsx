import React, { useEffect, useState } from 'react';
import './ExperienceTimeline.css';

const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'at "PurposeBuddy"',
    description1: '• Developed a REST API using PostManAPI and PostgreSQL to store data from learning management systems',
    description2:'• Developed a full-stack web application using Flask, React and Docker to analyze GitHub data ',
    
    date: '(July 2024 - Sep 2024)',
  },
  {
    title: 'Student Director',
    company: 'at "Unstop"',
    description1: '• Supervised 15+ student executives across 5+ campuses, ensuring 100% task completion',
    description2:'• Boosted event participation by 40% in NIT Manipur,selected as the best Student Director in Northeast',
    date: '(Oct 2024 - Present)',
  },
  {
    title: 'Campus Ambassador Intern',
    company: 'at "Physics Wallah"',
    description1: '•Increased campus engagement by 30% through organized events such as workshops and seminars',
    description2:'•Generated 100+ College Reviews (from IIT’s and NIT’s), that help students choose a better College.',
    date: '(April 2024 - Present)',
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
    <div id='experience' className='flex flex-col mt-28'>
    <h1  className='font-bold text-4xl text-center mx-auto mt-36 md:mt-24' >Experiences</h1>
    <div className="timeline-container md:flex md:flex-col "  >
      <div className="vertical-line "></div>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`experience-block ${index % 2 === 0 ? 'left' : 'right'} ${
            index <= activeIndex ? 'visible' : ''
          }`}
        >
           
          <h3 className='text-black font-bold text-xl'>&lt;{exp.title}&gt;</h3>
          <h4 className='text-black'>{exp.company}</h4>
          <p>{exp.description1}</p>
          <p>{exp.description2}</p>
          <span>{exp.date}</span>
          </div>
        
      ))}
    </div>
    </div>
    </>
  );
};

export default ExperienceTimeline;

