import React from 'react'
import Card1 from './Card1'
import Tiltedcarduse from './Tiltedcarduse'
import Tiltedcarduse1 from './Tiltedcarduse1'
import Tiltedcarduse2 from './Tiltedcarduse2'


const Achievements = () => {
  return (
    <div className='mt-16 py-16' id="Achievements">
       {/* <h2 className='text-2xl font-bold text-black px-20  mt-14'>Winning Movements</h2> */}
       <h1 className='md:text-6xl text-5xl font-bold text-black md:px-20 px-8 pb-8'>Achievements</h1>
       <p className='text-black md:px-20 px-8 pb-8'>The following achievements highlight my dedication and commitment to excellence across various domains. Each accomplishment showcases my ability to excel in competitive environments, consistently perform at a high level, and contribute meaningfully to both academic and extracurricular pursuits. These achievements reflect my continuous growth and pursuit of mastery.</p>
       <div className='flex items-center justify-between md:px-80 md:flex-row flex-col mb-10'>
       <Tiltedcarduse/>
       <Tiltedcarduse1/></div>
       <div className='flex items-center justify-center md:px-80 '>
       <Tiltedcarduse2/>
       </div>
       
    </div>
  )
}

export default Achievements
