import React, { useState } from "react";
import { motion } from "framer-motion";

const TiltShineCard = () => {
  const [shine, setShine] = useState({ x: 0, y: 0 });

  // Handle mouse movement to update shine position
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setShine({ x, y });
  };

  return (
    <motion.div
      className="relative w-64 h-80 bg-cover bg-center rounded-xl shadow-lg"
      style={{
        backgroundImage: `url('https://th.bing.com/th/id/OIP.W_JxYZQEgeA5wXOV9xawBAHaEK?w=1280&h=720&rs=1&pid=ImgDetMain')`,
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      whileHover={{
        rotateX: [0, 20, -20, 0], // Increased rotation for more tilt effect
        rotateY: [0, -20, 20, 0], // Stronger rotation on both axes
        transition: { duration: 0.5, ease: "easeOut" },
        boxShadow: '0px 10px 25px rgba(255, 255, 255, 0.3)', // Slightly more pronounced shine effect
      }}
    >
      {/* Shine effect */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.25), transparent)`, // Centered shine with subtle intensity
          pointerEvents: "none",
        }}
      ></div>
    </motion.div>
  );
};

export default TiltShineCard;
