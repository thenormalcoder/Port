

import React, { useState, useEffect } from 'react';
import photoImage from '../assets/sparkprofilephoto.jpg';
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import c4 from '../assets/c4.png'
import c5 from '../assets/c5.png'
import c6 from '../assets/c6.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images = [
  { src: c1 },
  { src: c2 },
  { src: c3 },
  { src: c6 },
  { src: c4 },
  { src: c5 },
];

export default function Imageg2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Infinite loop for images
  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Automatically loop through the images
  useEffect(() => {
    const interval = setInterval(goToNext, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative h-full w-full overflow-hidden flex items-center justify-center bg-black py-20 ">
      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 z-10 p-2 bg-black bg-opacity-30 hover:bg-opacity-50 text-black font-bold text-2xl rounded-full mx-2">
        <FaArrowLeft />
      </button>

      {/* Image container */}
      <div
        className="flex transition-transform duration-500 ease-in-out transform"
        style={{ transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-1/3 h-72 flex-shrink-0 px-3">
            <img
              src={img.src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover border-4 border-white rounded-3xl"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-0 z-10 p-2 bg-black bg-opacity-30 hover:bg-opacity-50 text-black font-bold text-2xl rounded-full mx-2"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}
