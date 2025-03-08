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
    <div className=' flex flex-col justify-center items-center  mt-16 text-center px-48 py-10'>
    
    <img
        src="https://png.pngtree.com/png-clipart/20230322/original/pngtree-realistic-astronaut-illustration-png-image_8999483.png"
        alt="Floating"
        className="w-64 h-auto animate-float z-0"
      />
      <h1 className=" text-4xl font-bold ">
        <span>Hi everyone, Myself Jatin a</span>
        <br />
        <span ref={typedElement} className='mx-2 text-rose-500'></span>
      </h1>
      <h2 className=''>I'm a Enthusiastic learner of Data Structures and Algorithms ,MERN Stack and AI/ML Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium optio officia sed, fuga, suscipit atque iusto accusamus ullam amet ducimus error quis ut.</h2>
      <div className='flex px-20 justify-around mt-10'>
      <a href="https://www.linkedin.com/in/jatin-bhojwani-52548b1a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">
      {/* <button className='flex justify-between items-center  bg-blue-700 rounded-full cursor-pointer mx-5'>
       
       <img src="https://th.bing.com/th/id/OIP.6Ckm4MGXRjZgWQyRkjDDPgHaEK?rs=1&pid=ImgDetMain" className='px-2 py-1 rounded-3xl' width={80} height={40} alt="" />
       <span className='px-2'>Connect on LinkedIN</span>
      
     </button> */}
     <button
  className="relative flex items-center px-8 py-4 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group mx-3"
>

  <span
    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
  >
    <span
      className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
  >
    <span
      className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
  ></span>
  <span
    className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
    >Connect on LinkedIn</span
  >
</button>

     </a>
     <a href="https://unstop.com/u/explorer007">
     {/* <button className='flex justify-between items-center  bg-blue-700 rounded-full cursor-pointer'>
       
          <img src="https://th.bing.com/th/id/OIP.6Ckm4MGXRjZgWQyRkjDDPgHaEK?rs=1&pid=ImgDetMain" className='px-1 py-1 rounded-3xl' width={80}height={40}  alt="" />
          <span className='px-1'>Unstop</span>
         
        </button> */}
 {/* From Uiverse.io by Itskrish01   */}
<button
  className="relative flex items-center px-8 py-4 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
>

  <span
    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
  >
    <span
      className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    classN="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
  >
    <span
      className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
  ></span>
  <span
    className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
    >Connect on Unstop </span
  >
</button>

        </a>
      </div>
    </div>
  );
};

export default Header;
