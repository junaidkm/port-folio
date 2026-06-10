import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import { ExternalLink, Github, Layers, Search, ShoppingCart, DollarSign, ListCollapse, ListTodo } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'E-Commerce', 'Utility'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(proj => proj.category === filter);



  return (
    <section 
      id="projects" 
      className="py-20 bg-slate-50 dark:bg-[#0c1322] transition-colors relative overflow-hidden"
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
            My Works
          </motion.h2>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2"
          >
            Selected Software Projects
          </motion.h3>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center space-x-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                filter === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/10'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat === 'All' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glassmorphism rounded-3xl border border-slate-200/50 dark:border-slate-800/80 shadow-lg overflow-hidden flex flex-col justify-between"
              >
                
                {/* Visual Mockup Area */}
                <div className="w-full aspect-[16/10] bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800/80 overflow-hidden relative group">
                  <img
                    src={proj.imageType === 'perfume_store' ? '/perfume_store.png' : '/expense_tracker.png'}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/10 dark:bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  
                  {/* Tech stack badge list on image */}
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                    {proj.tech.map((t) => (
                      <span 
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-900/80 text-white font-semibold font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-indigo-500 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                        {proj.type}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      {proj.title}
                    </h4>
                    
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      {proj.description}
                    </p>

                    {/* Features Dropdown list */}
                    <div className="space-y-1.5 pt-2">
                      <p className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        <span>Core Features</span>
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-xs text-slate-500 dark:text-slate-400 pl-1.5 leading-relaxed font-sans">
                        {proj.features.map((feat, i) => (
                          <li key={i}>{feat}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-500/10 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                    
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
