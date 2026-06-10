import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

// Layout & Helper Components
import ScrollProgress from './components/ScrollProgress';
import SplashLoader from './components/SplashLoader';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

// Portfolio Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Languages from './sections/Languages';
import Contact from './sections/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor Scroll for Back To Top Button visibility
  useEffect(() => {
    const handleScrollVisibility = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScrollVisibility);
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* 1. Loading splash screen overlay */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <SplashLoader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Container */}
      {!isLoading && (
        <div className="relative min-h-screen text-slate-800 bg-white dark:text-slate-100 dark:bg-[#0b0f19] selection:bg-indigo-500/30 selection:text-indigo-200 transition-colors duration-300">
          {/* Top visual indicators */}
          <ScrollProgress />
          
          {/* Header Navigation */}
          <Navbar onResumeOpen={() => setIsCVOpen(true)} />

          {/* Interactive Background Canvas */}
          <AmbientBackground />

          {/* Primary View Sections */}
          <main className="relative z-10">
            <Hero 
              onResumeOpen={() => setIsCVOpen(true)}
              onContactClick={() => handleScrollToSection('contact')}
              onProjectsClick={() => handleScrollToSection('projects')}
            />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Achievements />
            <Languages />
            <Contact />
          </main>

          {/* Footer content */}
          <Footer />

          {/* Floating Back To Top Button */}
          <AnimatePresence>
            {showBackToTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                onClick={handleBackToTop}
                className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl hover:shadow-indigo-600/30 dark:shadow-indigo-500/10 transition-all hover:-translate-y-1 active:scale-95 border border-indigo-500/20"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Resume Viewer overlay */}
          <AnimatePresence>
            {isCVOpen && (
              <ResumeModal 
                isOpen={isCVOpen} 
                onClose={() => setIsCVOpen(false)} 
              />
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}

export default App;
