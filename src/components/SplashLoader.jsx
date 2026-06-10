import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500; // 1.5 seconds loading
    const intervalTime = 15;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(nextProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 300); // Small pause at 100%
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        y: -100,
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 text-white font-sans"
    >
      <div className="relative flex flex-col items-center">
        {/* Background Glowing Sphere */}
        <div className="absolute w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />

        {/* Circular SVG Progress */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="54"
              className="stroke-slate-800"
              strokeWidth="4"
              fill="transparent"
            />
            <motion.circle
              cx="64"
              cy="64"
              r="54"
              className="stroke-indigo-500"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 54}
              strokeDashoffset={2 * Math.PI * 54 * (1 - progress / 100)}
              transition={{ ease: "easeOut" }}
            />
          </svg>
          <span className="absolute text-xl font-bold font-mono tracking-tight">
            {progress}%
          </span>
        </div>

        {/* Text Loader */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-center"
        >
          <h1 className="text-xl font-bold tracking-widest text-slate-100 font-sans uppercase">
            Junaid K
          </h1>
          <p className="text-sm text-indigo-400 mt-1 font-mono uppercase tracking-wider">
            Front End Developer Portfolio
          </p>
        </motion.div>

        {/* Loading bar fallback bottom */}
        <div className="w-48 h-[2px] bg-slate-800 rounded-full mt-8 overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SplashLoader;
