import React from 'react'
import GridDistortion from './GridDistortion'
const Griduse = () => {
  return (
    <div>
      

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <GridDistortion
    imageSrc="https://picsum.photos/1920/1080?grayscale"
    grid={10}
    mouse={0.1}
    strength={0.15}
    relaxation={0.9}
    className="custom-class"
  />
</div>
    </div>
  )
}

export default Griduse
