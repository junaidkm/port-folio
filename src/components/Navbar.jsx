import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onResumeOpen }) => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Experience', target: 'experience' },
    { label: 'Projects', target: 'projects' },
    { label: 'Contact', target: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background solid/glass toggle
      setScrolled(window.scrollY > 20);

      // Section spy
      const scrollPosition = window.scrollY + 150;
      for (const link of navLinks) {
        const el = document.getElementById(link.target);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.target);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glassmorphism-nav shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => scrollToSection('home')}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
                JK
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-white font-sans bg-clip-text transition-colors">
                Junaid<span className="text-indigo-500">.K</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => scrollToSection(link.target)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === link.target
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-500/10'
                      : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right Buttons: Theme Toggle & Resume */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* View Resume Button */}
              <button
                onClick={onResumeOpen}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-500/10 transition-all hover:scale-105 active:scale-95"
              >
                <Briefcase className="w-4 h-4" />
                Resume
              </button>
            </div>

            {/* Mobile Actions (Menu & Theme toggle) */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden glassmorphism border-b border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <button
                    key={link.target}
                    onClick={() => scrollToSection(link.target)}
                    className={`block w-full text-left px-4 py-2.5 rounded-lg text-base font-medium transition-all ${
                      activeSection === link.target
                        ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-500/10'
                        : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-2 px-4 border-t border-slate-200 dark:border-slate-800">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onResumeOpen();
                    }}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md"
                  >
                    <Briefcase className="w-5 h-5" />
                    View Resume
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
