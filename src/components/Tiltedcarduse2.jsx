import React from 'react'
import TiltedCard from './TiltedCard'
import ki from '../assets/KimoWinner.jpg';
const Tiltedcarduse2 = () => {
  return (
    <div>
      <TiltedCard
              imageSrc={ki}
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="IntraNIT KIMO Winner"
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

export default Tiltedcarduse2
