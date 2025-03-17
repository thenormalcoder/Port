import React from 'react'
import RollingGallery from './RollingGallery'

const RolllingGalleryuse = () => {
  return (
    <div className='flex justify-center items-center'>
      <RollingGallery autoplay={true} pauseOnHover={true} />
    </div>
  )
}

export default RolllingGalleryuse
