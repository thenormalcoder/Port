import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { useRef,useState,useEffect } from 'react';
import p1photo from '../assets/p1photo.png';
import git1 from '../assets/git1.jpeg';
export default function Pcard1() {
    const typedElement = useRef(null);
    
    useEffect(() => {
      const options = {
        strings: ['React+Tailwind Css+NodeJs+MongoDB'],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true,
      };
      const typed = new Typed(typedElement.current, options);
  
      return () => {
        typed.destroy(); // Cleanup the typing animation on component unmount
      };
    }, []);
  return (
    <div className='flex justify-center items-center mt-10 '>
      <motion.div
        className='relative w-80 h-[370px] rounded-xl px-4 py-2 overflow-hidden shadow-lg hover:shadow-2xl bg-white'
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          className='absolute inset-0 border-4 border-transparent rounded-xl flex '
          animate={{
            borderColor: [
              'rgba(255,0,0,0.5)',
              'rgba(0,255,0,0.5)',
              'rgba(0,0,255,0.5)',
              'rgba(255,255,0,0.5)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <div className='cursor-pointer flex '>
        <img src={p1photo}
          alt='Card image'
          className='w-72 h-64 object-cover rounded-t-xl mb-1 cursor-pointer absolute'
        />
        <a href="https://github.com/thenormalcoder" target="_blank" rel="noopener noreferrer">
        <img src={git1} alt="" className='relative left-0 w-12 h-10 rounded-xl' />
          
        </a>
        </div>
        
        <h2 className='text-xl font-semibold mb-2 text-blue-600 text-center relative top-56'>Project:"Mera Bestie"</h2>
        <span ref={typedElement} className='mx-auto text-black text-center relative top-56 py-2'></span>
        <motion.div
          className='absolute inset-x-0 bottom-0 px-4 py-2 text-center bg-gray-400 opacity-30 rounded-b-xl h-60'
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          
          <p className='text-white font-bold '>About the Project</p>
          <p className='text-white text-center font-bold '>An Online Platform for Gift Items,Stationary and What Not!!</p>
          <p className='text-white text-center font-bold'>Users can easily buy and track their orders</p>
          <p className='text-white text-center font-bold'>Specialised Admin Dashboard </p>
          <p className='text-white text-center cursor-pointer font-bold'><a href="https://project-mern-frontend.onrender.com" className='border-2 border-black hover:font-bold px-2 py-1 hover:bg-blue-500'>Live Link</a></p>
          
        </motion.div>
      </motion.div>
    </div>
  );
}

