import { motion } from 'framer-motion';

export default function Card1() {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="w-96 h-64 p-6 bg-black text-white border-4 border-white rounded-lg shadow-md"
        whileHover={{ background: 'linear-gradient(to right, rgba(248,113,113,1), rgba(236,72,153,1), rgba(220,38,38,1))', scale: 1.05, borderColor: 'rgb(255, 255, 255)' }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-purple-500 to-blue-600  hover:bg-gradient-to-r hover:from-white-400 hover:via-white-500 hover:to-red-700 "
         
          transition={{ duration: 0.5 }}
        >
          Card Heading
        </motion.h2>
        <motion.p className="text-sm"
          whileHover={{ color: 'rgb(255,255,255)' }}
        >This is a description inside the card with smaller text size.</motion.p>
      </motion.div>
    </div>
  );
}
