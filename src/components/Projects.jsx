import React from 'react';
import Pcard from './Pcard';
import Pcard1 from './Pcard1';
import Pcard2 from './Pcard2';
import Pcard3 from './Pcard3';

const Projects = () => {
 
  return (
    <>
    <div id="projects" className='py-16'>
    <h2 className='text-2xl font-bold text-black px-20'>My Work</h2>
    <h1 className='text-6xl font-bold text-black px-20 pb-6'>Projects</h1>
    <p className='text-black px-20'>Following projects showcase my skills and experience through real-world examples of my work. Each Project is briefly described with links to GITHUB and Live Deployment. It reflects my ability to solve complex problems,work with different technologies,and manage projects effectively.</p>
    <div className='flex justify-around items-center px-40 '>
        
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
