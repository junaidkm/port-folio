import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import { Monitor, Server, Wrench, ShieldAlert } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend Development', icon: Monitor, data: skillsData.frontend },
    { id: 'backendAndApis', label: 'Backend & APIs', icon: Server, data: skillsData.backendAndApis },
    { id: 'tools', label: 'Development Tools', icon: Wrench, data: skillsData.tools },
    { id: 'professional', label: 'Professional Skills', icon: ShieldAlert, data: skillsData.professional },
  ];

  const currentCategory = categories.find(c => c.id === activeTab);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="skills" 
      className="py-20 bg-white dark:bg-[#0b0f19] transition-colors relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase"
          >
            Technical Assets
          </motion.h2>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2"
          >
            My Tech Stack & Capabilities
          </motion.h3>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700/80'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentCategory.data.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                className="glassmorphism p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 shadow-md group hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-slate-800 dark:text-slate-100 font-sans tracking-wide">
                    {skill.name}
                  </span>
                  <span className="text-xs font-bold font-mono text-indigo-600 dark:text-indigo-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar track */}
                <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800/80 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Skills;
