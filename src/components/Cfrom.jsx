import React from 'react'
import Contact from './Contact'
import Homepage from '../pages/Homepage'
import BounceCardsuse from './BounceCardsuse'


const Cfrom = () => {
  return (
    <div className='flex justify-evenly items-center flex-col md:flex-row'>
    
    <BounceCardsuse/>
      <Contact/>
      
    </div>
  )
}

export default Cfrom
