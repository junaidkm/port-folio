import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData } from '../data/portfolioData';
import { Award } from 'lucide-react';

const Achievements = () => {
  return (
    <section 
      id="achievements" 
      className="py-20 bg-white dark:bg-[#0b0f19] transition-colors relative overflow-hidden"
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
            Milestones
          </motion.h2>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2"
          >
            Honors & Achievements
          </motion.h3>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Centered Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievementsData.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glassmorphism p-6 md:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/80 shadow-md flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/15 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white text-base uppercase font-sans tracking-wide leading-snug">
                  {ach.title}
                </h4>
                <p className="text-[10px] text-indigo-500 font-mono mt-1 mb-2">
                  {ach.institution}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  {ach.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
