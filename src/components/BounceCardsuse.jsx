import React from 'react'
import BounceCards from './BounceCards';
import g1 from '../assets/g1.png';
import g2 from '../assets/g2.png';
import g3 from '../assets/g3.png';
import g4 from '../assets/g4.png';
import g5 from '../assets/g5.png';
const BounceCardsuse = () => {
    const images = [
        g1,
        g2,
        g3,
        g4,
        g5,
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
