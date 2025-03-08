import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Header = () => {
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
    <div className='bg-black flex flex-col justify-center items-center  mt-16 text-center px-48 mb-14'>
        <img
        src="https://png.pngtree.com/png-clipart/20230322/original/pngtree-realistic-astronaut-illustration-png-image_8999483.png"
        alt="Floating"
        className="w-64 h-auto animate-float"
      />
      <h1 className="text-white text-4xl font-bold ">
        <span>Hi everyone, Myself Jatin a</span>
        <br />
        <span ref={typedElement} className='mx-2'></span>
      </h1>
      <h2>I'm a Enthusiastic learner of Data Structures and Algorithms ,MERN Stack and AI/ML Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium optio officia sed, fuga, suscipit atque iusto accusamus ullam amet ducimus error quis ut.</h2>
      <div className='flex px-20 justify-around mt-10'>
      <a href="https://www.linkedin.com/in/jatin-bhojwani-52548b1a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><button className='flex justify-between items-center  bg-blue-700 rounded-full cursor-pointer mx-5'>
       
       <img src="/linkedin_logo.png" className='px-1' width={45} alt="" />
       <span className='px-1'>Connect on LinkedIN</span>
      
     </button>
     </a>
     <a href="https://unstop.com/u/explorer007"><button className='flex justify-between items-center  bg-blue-700 rounded-full cursor-pointer'>
       
          <img src="/unstop-.webp" className='px-1 rounded-full' width={45}  alt="" />
          <span className='px-1'>Unstop</span>
         
        </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
