import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import BasicButton from './BasicButton';
import BasicButton1 from './BasicButton1';

const Header1 = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Web Developer', 'AI Model Specialist', 'Hackathon Winner'],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy(); // Cleanup the typing animation on component unmount
    };
  }, []);

  return (
    <div className=' flex flex-col justify-center items-center  mt-24 text-center md:px-48 md:py-10'>
    
    <img
        src="https://png.pngtree.com/png-clipart/20230322/original/pngtree-realistic-astronaut-illustration-png-image_8999483.png"
        alt="Floating"
        className="w-64 h-auto animate-float z-0"
      />
      <h1 className=" text-4xl font-bold ">
        <span className='text-white font-bold'>Hi everyone, Myself Jatin a</span>
        <br />
        <span ref={typedElement} className='mx-2  font-semibold text-red-600 '></span>
        
      </h1>
      <h2 className='text-white font-bold'>"Driven Computer Science student from NIT Manipur, specializing in full-stack development, DSA, and AI-powered solutions, focused on crafting innovative, scalable technologies through impactful projects."</h2>
      <div className='flex px-20 justify-around mt-10 '>
     <BasicButton1/>
     <BasicButton/>
      </div>
    </div>
  );
};

export default Header1;
