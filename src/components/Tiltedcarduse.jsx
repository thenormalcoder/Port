import React from 'react'
import TiltedCard from './TiltedCard'

const Tiltedcarduse = () => {
  return (
    <div>
     <TiltedCard
  imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Achievement"
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
