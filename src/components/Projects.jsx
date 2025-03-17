import React from 'react';
import Pcard from './Pcard';
import Pcard1 from './Pcard1';



const Projects = () => {
 
  return (
    <>
    <div id="projects" className='py-16'>
    <h2 className='text-2xl font-bold text-black px-20'>My Work</h2>
    <h1 className='text-6xl font-bold text-black px-20 pb-6'>Projects</h1>
    <p className='text-black px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quis tenetur doloribus illo provident numquam est? Eveniet commodi excepturi repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquam eum velit quae, ratione accusamus commodi dolorem accusantium minus repellat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, doloribus? Dicta tenetur officiis, corrupti iure molestiae a eaque est tempore!</p>
    <div className='flex justify-around items-center px-40 '>
        
    <Pcard1/>
    <Pcard1/>
    <Pcard1/>
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
