import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, Star, CheckCircle } from 'lucide-react';

const Education = () => {
  // Focus tags mapper helper
  const bcaFocus = [
    'Programming', 'Web Development', 'Databases', 'Software Engineering',
    'React.js', 'JavaScript', 'Firebase', 'REST APIs', 'Full Stack Development'
  ];

  const humanitiesAchievements = [
    'Conducted research project on Social Issues'
  ];

  return (
    <section 
      id="education" 
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
            Academic Foundation
          </motion.h2>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2"
          >
            Education & Background
          </motion.h3>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Education Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {educationData.map((edu, index) => {
            const isBCA = edu.degree.includes('Bachelor');
            const focusPoints = isBCA ? bcaFocus : humanitiesAchievements;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glassmorphism p-6 md:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/80 shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Year block */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/15 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="flex items-center gap-1 text-xs font-mono font-bold text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.duration}
                    </span>
                  </div>

                  {/* Degree Title & Institution */}
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">
                    {edu.institution}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-sans">
                    {edu.details}
                  </p>
                </div>

                {/* Sub-Focus tags or Achievements list */}
                <div className="border-t border-slate-100 dark:border-slate-800/80 pt-6">
                  <h5 className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    {isBCA ? <Star className="w-4 h-4 text-indigo-500" /> : <Award className="w-4 h-4 text-indigo-500" />}
                    <span>{isBCA ? 'Key Focus Areas' : 'Key Achievements'}</span>
                  </h5>

                  {isBCA ? (
                    <div className="flex flex-wrap gap-2">
                      {focusPoints.map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-medium hover:bg-indigo-500/10 hover:text-indigo-600 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {focusPoints.map((ach) => (
                        <li key={ach} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Education;
