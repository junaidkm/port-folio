import React from 'react';
import { motion } from 'framer-motion';
import { languagesData } from '../data/portfolioData';
import { Languages as LangIcon, Globe } from 'lucide-react';

const Languages = () => {
  return (
    <section 
      id="languages" 
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
            Communication Channels
          </motion.h2>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2"
          >
            Languages Spoken
          </motion.h3>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Central Card */}
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glassmorphism p-6 md:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/80 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/15 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <LangIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white tracking-wide text-lg">
                  Linguistic Abilities
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Fluent in multiple languages for global collaboration
                </p>
              </div>
            </div>

            {/* Language List */}
            <div className="space-y-5">
              {languagesData.map((lang, index) => {
                const levels = { English: 'Professional Proficiency', Malayalam: 'Native / Bilingual', Hindi: 'Conversational' };
                const percent = { English: 90, Malayalam: 100, Hindi: 70 };
                
                return (
                  <motion.div 
                    key={lang}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-bold text-slate-800 dark:text-slate-200 font-sans">{lang}</span>
                      <span className="font-mono text-indigo-500 dark:text-indigo-400 font-semibold text-xs">{levels[lang]}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percent[lang]}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" 
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <Globe className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>Comfortable working in remote, distributed, and cross-functional teams</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Languages;
