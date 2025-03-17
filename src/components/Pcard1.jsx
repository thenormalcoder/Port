import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { useRef,useState,useEffect } from 'react';
export default function Pcard1() {
    const typedElement = useRef(null);
    
    useEffect(() => {
      const options = {
        strings: ['Web Developer About the project'],
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
        <img src='https://imgeng.jagran.com/images/2022/jul/opticalillusionfinal1656681351053.jpg'
          alt='Card image'
          className='w-72 h-64 object-cover rounded-t-xl mb-1 cursor-pointer absolute'
        />
        <a href="https://github.com/thenormalcoder" target="_blank" rel="noopener noreferrer">
          <svg className="w-10 h-8 text-gray-800 hover:text-blue-500 transition relative left-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.207 11.387.599.111.793-.26.793-.577 0-.285-.011-1.042-.016-2.045-3.338.725-4.042-1.61-4.042-1.61-.545-1.384-1.33-1.753-1.33-1.753-1.086-.743.082-.728.082-.728 1.2.084 1.833 1.234 1.833 1.234 1.068 1.831 2.803 1.302 3.486.996.108-.773.419-1.302.763-1.602-2.665-.303-5.467-1.332-5.467-5.931 0-1.31.467-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.302 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.003.404 2.293-1.552 3.3-1.23 3.3-1.23.654 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.922.43.371.824 1.104.824 2.225 0 1.607-.015 2.902-.015 3.296 0 .319.192.692.8.574C20.565 21.796 24 17.298 24 12 24 5.37 18.63 0 12 0z" />
          </svg>
        </a>
        </div>
        
        <h2 className='text-xl font-semibold mb-2 text-blue-600 text-center relative top-56'>Animated Card</h2>
        <span ref={typedElement} className='mx-auto text-black text-center relative top-56 py-2'></span>
        <motion.div
          className='absolute inset-x-0 bottom-0 px-4 py-2 text-center bg-gray-400 opacity-30 rounded-b-xl h-56'
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          
          <p className='text-white '>This card has an animated border and hover effect!</p>
          <p className='text-white text-center'>About the project Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, numquam?</p>
          <p className='text-white text-center cursor-pointer'>Live Link</p>
          
        </motion.div>
      </motion.div>
    </div>
  );
}

