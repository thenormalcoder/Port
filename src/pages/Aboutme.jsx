import React from 'react'
import TiltShineCard from '../components/TiltShineCard'
import programmerImage from '../assets/Programmer solid image.png';

const Aboutme = () => {
  return (
    <>
    
    <div id="about" className='flex justify-center flex-col items-center '>
        <hr  className='text h-2 bg-white'/>
      <h1 className='my-16 text-5xl'>ABOUT ME </h1>
      <div className=' flex justify-between px-24 '>
      {/* <img src="/Programmer solid image.png" alt="" className='w-80 h-full rounded-full mb-4 px-10'/> */}
      <img src={programmerImage} alt="" className='w-80 h-full rounded-full mb-4 px-10'/>

      <div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus numquam aliquam laborum dolor nostrum. Sed commodi obcaecati architecto perspiciatis velit repudiandae illum veniam.</h1>
        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, nostrum dolor? Cum consequuntur repellendus magni, animi illo quae.</h2>
        <div className='marking flex justify-evenly py-5 mt-2'>
            <TiltShineCard/>
            <TiltShineCard/>
            <TiltShineCard/>
        </div>
      </div>
      </div>
    </div>
    <div className='flex justify-around  py-7'>
        <div className='flex flex-col justify-center items-center'>
            <h1>10+</h1>
            <br />
            <h1>Years of Experience</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h1>10+</h1>
            <br />
            <h1>Years of Experience</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h1>10+</h1>
            <br />
            <h1>Years of Experience</h1>
        </div>
    </div>
    </>
  )
}

export default Aboutme
