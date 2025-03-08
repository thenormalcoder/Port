
import React, { useState, useEffect } from 'react';

const images = [
 'sparkprofilephoto.jpg',
 'sparkprofilephoto.jpg',
 'sparkprofilephoto.jpg',
 'sparkprofilephoto.jpg',
 'sparkprofilephoto.jpg',
];

export default function Imageg2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Infinite loop for images
  const goToPrevious = () => {
    const firstIndex = currentIndex === 0;
    const newIndex = firstIndex ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const lastIndex = currentIndex === images.length - 1;
    const newIndex = lastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Automatically loop through the images
  useEffect(() => {
    const interval = setInterval(goToNext, 2000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative h-full w-full overflow-hidden flex items-center justify-center bg-black py-20">
      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 z-10 p-2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white font-bold text-2xl rounded-full mx-2">
        &#8249;
      </button>

      {/* Image container */}
      <div className="flex transition-transform duration-500 ease-in-out transform"
           style={{ transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}>
        {images.map((img, index) => (
          <div key={index} className="w-1/3 h-72 flex-shrink-0 px-3 ">
            <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover border-4 border-white rounded-3xl" />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-0 z-10 p-2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white font-bold text-2xl rounded-full mx-2">
        &#8250;
      </button>
    </div>
  );
}
