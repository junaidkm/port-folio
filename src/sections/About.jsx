import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, aboutData } from '../data/portfolioData';
import { Code, Eye, Rocket, Laptop, Award } from 'lucide-react';

const About = () => {
  const icons = [Laptop, Rocket, Eye, Code, Award];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="about" 
      className="py-20 bg-slate-50 dark:bg-[#0c1322] transition-colors relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase"
          >
            About Me
          </motion.h2>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2"
          >
            Transforming Ideas Into Clean, Digital Realities
          </motion.h3>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Main Content Info Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Text Detail */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200">
              Who is Junaid K?
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
              {aboutData.description}
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
              With an academic foundation in computer applications and hands-on professional exposure in the industry, I bridge the gap between creative visual designs and high-performance technical engineering.
            </p>

            {/* Basic Info list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono text-slate-600 dark:text-slate-400 pt-2">
              <div>
                <span className="font-bold text-indigo-600 dark:text-indigo-400">Name: </span>
                {personalInfo.name}
              </div>
              <div>
                <span className="font-bold text-indigo-600 dark:text-indigo-400">Role: </span>
                {personalInfo.role}
              </div>
              <div>
                <span className="font-bold text-indigo-600 dark:text-indigo-400">Location: </span>
                Kozhikode, Kerala
              </div>
              <div>
                <span className="font-bold text-indigo-600 dark:text-indigo-400">Email: </span>
                {personalInfo.email}
              </div>
            </div>
          </motion.div>

          {/* Right Highlight cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {aboutData.highlights.map((hl, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`glassmorphism p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 shadow-md ${
                    idx === 4 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/15 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h5 className="font-bold text-slate-800 dark:text-slate-100 text-sm mb-1.5 uppercase font-sans">
                    {hl.title}
                  </h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                    {hl.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="border-t border-slate-200 dark:border-slate-800/80 pt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {aboutData.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 glassmorphism rounded-2xl border border-slate-200/40 dark:border-slate-800/50"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-mono mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
