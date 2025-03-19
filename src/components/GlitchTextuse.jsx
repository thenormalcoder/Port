import React from 'react'
import GlitchText from './GlitchText'

const GlitchTextuse = () => {
  return (
    <div className='flex justify-center items-center mx-auto my-72'>
  
  <GlitchText
    speed={1}
    enableShadows={true}
    enableOnHover={false}
    className='custom-class'
  >
    thenormalcoder
  </GlitchText>
    </div>
  )
}

export default GlitchTextuse
