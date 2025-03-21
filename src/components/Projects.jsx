import React from 'react';
import Pcard from './Pcard';
import Pcard1 from './Pcard1';
import Pcard2 from './Pcard2';
import Pcard3 from './Pcard3';

const Projects = () => {
 
  return (
    <>
    <div id="projects" className='py-16 mt-10'>
    {/* <h2 className='text-2xl font-bold text-black md:px-20 text-center mt-5'>My Work</h2> */}
    <h1 className='md:text-6xl text-5xl font-bold text-black md:px-20 px-8 pb-6'>Projects</h1>
    <p className='text-black md:px-20 px-8'>Following projects showcase my skills and experience through real-world examples of my work. Each Project is briefly described with links to GITHUB and Live Deployment. It reflects my ability to solve complex problems,work with different technologies,and manage projects effectively.</p>
    <div className='flex md:flex-row justify-around items-center md:px-40 flex-col'>
        
    <Pcard1/>
    <Pcard2/>
    <Pcard3/>
    </div>
    {/* <div className='flex justify-around items-center px-64 '>
        
        <Pcard/>
        <Pcard/>
        
        </div> */}
    
        </div>
    </>
  );
};

export default Projects;
