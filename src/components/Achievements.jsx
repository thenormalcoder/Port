import React from 'react'
import Card1 from './Card1'
import Tiltedcarduse from './Tiltedcarduse'


const Achievements = () => {
  return (
    <div className='mt-10 py-16' id="Achievements">
       <h2 className='text-2xl font-bold text-black px-20'>Winning Movements</h2>
       <h1 className='text-6xl font-bold text-black px-20 pb-8'>Achievements</h1>
       <p className='text-black px-20 pb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quis tenetur doloribus illo provident numquam est? Eveniet commodi excepturi repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquam eum velit quae, ratione accusamus commodi dolorem accusantium minus repellat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, doloribus? Dicta tenetur officiis, corrupti iure molestiae a eaque est tempore!</p>
       <div className='flex items-center justify-between px-80 mb-10'>
       <Tiltedcarduse/>
       <Tiltedcarduse/></div>
       <div className='flex items-center justify-between px-80 '>
       <Tiltedcarduse/>
       <Tiltedcarduse/></div>
       
    </div>
  )
}

export default Achievements
