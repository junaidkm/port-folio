import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin, Briefcase, Sparkles, Terminal } from 'lucide-react';
import { personalInfo, heroData } from '../data/portfolioData';

const Hero = ({ onResumeOpen, onContactClick, onProjectsClick }) => {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing Effect
  useEffect(() => {
    const roles = heroData.roles;
    const currentRole = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 1500); // Wait at complete word
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex(prev => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-white dark:bg-[#0b0f19] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Area (7 cols on lg) */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
          >
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            <span className="text-xs font-semibold uppercase tracking-wider font-mono">
              Available for Internships & Junior Roles
            </span>
          </motion.div>

          {/* Name & Headline */}
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl font-mono text-slate-600 dark:text-indigo-300 font-bold"
            >
              Hi, I am <span className="text-indigo-600 dark:text-indigo-400 font-sans text-2xl font-extrabold block sm:inline">{personalInfo.name}</span>
            </motion.h2>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15]"
            >
              Building Modern, <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Responsive & Smart
              </span> <br />
              Web Applications
            </motion.h1>

            {/* Typing effect display */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-8 flex items-center justify-center lg:justify-start space-x-1.5"
            >
              <Terminal className="w-5 h-5 text-indigo-500" />
              <span className="text-lg md:text-xl font-mono font-semibold text-slate-800 dark:text-slate-200">
                {typedText}
              </span>
              <span className="w-2 h-5 bg-indigo-500 animate-pulse inline-block" />
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              {heroData.subheadline}
            </motion.p>
          </div>

          {/* Call-to-actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <button
              onClick={onProjectsClick}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 dark:shadow-indigo-500/10 hover:shadow-indigo-600/30 transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button
              onClick={onContactClick}
              className="px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              Contact Me
            </button>
            
            <button
              onClick={onResumeOpen}
              className="flex items-center gap-1.5 px-6 py-3.5 rounded-xl font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-500/5 hover:bg-indigo-500/10 border border-indigo-500/20 hover:border-indigo-500/30 transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <Briefcase className="w-4 h-4" />
              <span>Get Resume</span>
            </button>
          </motion.div>

          {/* Social Icons & Email snippet */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center lg:justify-start space-x-6 pt-4 border-t border-slate-200 dark:border-slate-800"
          >
            <div className="flex space-x-4">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 hover:scale-110 transition-transform" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 hover:scale-110 transition-transform" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 hover:scale-110 transition-transform" />
              </a>
            </div>
            <div className="hidden sm:block text-xs font-mono text-slate-500 dark:text-slate-400">
              junaidntd@gmail.com
            </div>
          </motion.div>
        </div>

        {/* Graphic Area (5 cols on lg) */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[400px] aspect-square flex items-center justify-center"
          >
            {/* Outer Spinning Glow Rings */}
            <div className="absolute inset-0 rounded-full border border-indigo-500/20 dark:border-indigo-500/10 animate-spin-slow" />
            <div className="absolute inset-4 rounded-full border border-purple-500/20 dark:border-purple-500/10 animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Floating Widget 1 - React Tag */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 glassmorphism p-3 rounded-2xl flex items-center gap-2 shadow-xl border border-white/40 dark:border-slate-800"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-500/15 flex items-center justify-center text-indigo-500 font-bold font-mono">
                ⚛️
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-mono">Framework</p>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-100">React.js</p>
              </div>
            </motion.div>

            {/* Floating Widget 2 - Stats Tag */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-6 -right-6 glassmorphism p-3 rounded-2xl flex items-center gap-2 shadow-xl border border-white/40 dark:border-slate-800"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-500 text-sm font-bold">
                ⚡
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-mono">Performance</p>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-100">100% Responsive</p>
              </div>
            </motion.div>

            {/* Main Illustration Circle */}
            <div className="relative w-72 h-72 rounded-full overflow-hidden bg-gradient-to-tr from-indigo-500/20 to-purple-600/30 flex items-center justify-center shadow-inner">
              <svg 
                viewBox="0 0 200 200" 
                className="w-56 h-56 text-indigo-600 dark:text-indigo-400 drop-shadow-xl"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Character / Computer Illustration */}
                {/* Background computer lines */}
                <rect x="25" y="45" width="150" height="90" rx="10" stroke="currentColor" strokeWidth="6" fill="rgba(99,102,241,0.05)" />
                <rect x="35" y="55" width="130" height="70" rx="4" stroke="currentColor" strokeWidth="2" />
                <line x1="85" y1="135" x2="65" y2="165" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                <line x1="115" y1="135" x2="135" y2="165" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                <line x1="50" y1="165" x2="150" y2="165" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                
                {/* Laptop code graphic */}
                <path d="M45 75 L65 75 M45 85 L75 85 M45 95 L55 95" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                <path d="M120 75 L150 75 M130 85 L150 85" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                
                {/* Coding Symbol </> in center */}
                <text x="80" y="105" fill="currentColor" fontSize="26" fontFamily="Courier" fontWeight="bold">&lt;/&gt;</text>
                
                {/* Floating elements */}
                <circle cx="100" cy="35" r="8" className="fill-pink-500 animate-pulse" />
                <polygon points="175,60 185,75 165,75" className="fill-yellow-500 animate-bounce-slow" />
              </svg>
            </div>
            
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
