import React from 'react'
import BounceCards from './BounceCards';

const BounceCardsuse = () => {
    const images = [
        "https://picsum.photos/400/400?grayscale",
        "https://picsum.photos/500/500?grayscale",
        "https://picsum.photos/600/600?grayscale",
        "https://picsum.photos/700/700?grayscale",
        "https://picsum.photos/300/300?grayscale"
      ];
      
      const transformStyles = [
        "rotate(5deg) translate(-150px)",
        "rotate(0deg) translate(-70px)",
        "rotate(-5deg)",
        "rotate(5deg) translate(70px)",
        "rotate(-5deg) translate(150px)"
      ];
      
  return (
    <div>
    


<BounceCards
  className="custom-bounceCards"
  images={images}
  containerWidth={600}
  containerHeight={300}
  animationDelay={1}
  animationStagger={0.08}
  easeType="elastic.out(1, 0.5)"
  transformStyles={transformStyles}
  enableHover={true}
/>
    </div>
  )
}

export default BounceCardsuse
