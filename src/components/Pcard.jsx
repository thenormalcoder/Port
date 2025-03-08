import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { useRef,useState,useEffect } from 'react';
export default function Pcard() {
    const typedElement = useRef(null);
    
    useEffect(() => {
      const options = {
        strings: ['Web Developer About the project ', 'AI Model Specialist About the project Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, numquam?', 'Hackathon Winner About the project Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, numquam?'],
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
        className='relative w-80 h-96 rounded-xl px-4 py-2 overflow-hidden shadow-lg hover:shadow-2xl bg-white'
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          className='absolute inset-0 border-4 border-transparent rounded-xl'
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
        <div className='cursor-pointer'>
        <img src='https://imgeng.jagran.com/images/2022/jul/opticalillusionfinal1656681351053.jpg'
          alt='Card image'
          className='w-full h-64 object-cover rounded-t-xl mb-1 cursor-pointer'
        />
        </div>
        
        <h2 className='text-xl font-semibold mb-2 text-blue-600 text-center'>Animated Card</h2>
        <span ref={typedElement} className='mx-auto text-black text-center'></span>
        
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

