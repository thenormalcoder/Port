import React from 'react'
import Contact from './Contact'
import Homepage from '../pages/Homepage'


const Cfrom = () => {
  return (
    <div className='flex justify-evenly items-center'>
      <img
        src="https://png.pngtree.com/png-clipart/20230322/original/pngtree-realistic-astronaut-illustration-png-image_8999483.png"
        alt="Floating"
        className="w-80 h-96 animate-float"
      />
      <Contact/>
      
    </div>
  )
}

export default Cfrom
