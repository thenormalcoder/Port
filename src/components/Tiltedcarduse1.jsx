import React from 'react'
import TiltedCard from './TiltedCard'
import un from '../assets/UnstopDirectorBadge.jpg';
const Tiltedcarduse1 = () => {
  return (
    <div>
       <TiltedCard
        imageSrc={un}
        altText="Kendrick Lamar - GNX Album Cover"
        captionText="Best Student Director Northeast"
        containerHeight="350px"
        containerWidth="350px"
        imageHeight="300px"
        imageWidth="300px"
        rotateAmplitude={50}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        
      /> 
    </div>
  )
}

export default Tiltedcarduse1
