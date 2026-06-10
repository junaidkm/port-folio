import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';
import { Calendar, Briefcase, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  return (
    <section 
      id="experience" 
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
            Employment Journey
          </motion.h2>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2"
          >
            Professional Experience
          </motion.h3>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Vertical Timeline Wrapper */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical central bar */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-indigo-500/20 transform -translate-x-1/2" />

          {experienceData.map((exp, index) => (
            <div key={index} className="relative mb-12 md:mb-16">
              
              {/* Timeline Center Node */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                className="absolute left-4 md:left-1/2 top-2 w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg border-4 border-slate-50 dark:border-[#0c1322] transform -translate-x-1/2 z-10"
              >
                <Briefcase className="w-3.5 h-3.5" />
              </motion.div>

              {/* Timeline Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                
                {/* Left Side (Empty on desktop for alignment, duration on mobile/desktop toggle) */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="pl-12 md:pl-0 md:text-right flex flex-col md:justify-center items-start md:items-end"
                >
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-xs font-mono font-bold mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white">
                    {exp.company}
                  </h4>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                    {exp.role}
                  </p>
                </motion.div>

                {/* Right Side - Responsibilities Card */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="pl-12 md:pl-0"
                >
                  <div className="glassmorphism p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 shadow-md">
                    <h5 className="font-bold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
                      Core Contributions & Work Scope
                    </h5>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
