import React from 'react'
import TiltedCard from './TiltedCard'
import ag from '../assets/AgartalaHackathon.jpg';

const Tiltedcarduse = () => {
  return (
    <div>
     <TiltedCard
  imageSrc={ag}
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Arjuna Hackathon Grand Finalist"
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

export default Tiltedcarduse
