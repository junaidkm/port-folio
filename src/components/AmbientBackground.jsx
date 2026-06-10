import React from 'react';
import { motion } from 'framer-motion';

const AmbientBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Glow Ball 1 */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -100, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-indigo-500/20 dark:bg-indigo-600/10 blur-[80px] md:blur-[120px] blob"
      />

      {/* Glow Ball 2 */}
      <motion.div
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 80, -60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/15 dark:bg-purple-600/10 blur-[100px] md:blur-[140px] blob"
      />

      {/* Glow Ball 3 */}
      <motion.div
        animate={{
          x: [0, 60, -80, 0],
          y: [0, 60, 100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-pink-500/15 dark:bg-pink-600/5 blur-[90px] md:blur-[130px] blob"
      />

      {/* Glow Ball 4 - Teal/Cyan accent */}
      <motion.div
        animate={{
          x: [0, -50, 50, 0],
          y: [0, -50, -50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6
        }}
        className="absolute top-10 right-10 w-[280px] h-[280px] rounded-full bg-cyan-500/10 dark:bg-cyan-600/5 blur-[70px] md:blur-[100px] blob"
      />
    </div>
  );
};

export default AmbientBackground;
