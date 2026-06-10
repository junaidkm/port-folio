import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code, CheckCircle, AlertTriangle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!form.name.trim()) tempErrors.name = 'Name is required';
    if (!form.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Please provide a valid email address';
    }
    if (!form.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!form.message.trim()) {
      tempErrors.message = 'Message content is required';
    } else if (form.message.trim().length < 10) {
      tempErrors.message = 'Message should be at least 10 characters long';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear error for field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Mock API delays
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      
      // Fire confetti celebration!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#a855f7', '#ec4899']
      });

      // Clear Form
      setForm({ name: '', email: '', subject: '', message: '' });

      // Auto close toast
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }, 1200);
  };

  const contactDetails = [
    { icon: Mail, label: 'Email Me', val: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Call Me', val: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/ /g, '')}` },
    { icon: MapPin, label: 'Location', val: personalInfo.location, href: null },
  ];

  const socialLinks = [
    { icon: Github, href: personalInfo.socials.github, name: 'GitHub' },
    { icon: Linkedin, href: personalInfo.socials.linkedin, name: 'LinkedIn' },
    { icon: Code, href: personalInfo.socials.leetcode, name: 'LeetCode' }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 bg-slate-50 dark:bg-[#0c1322] transition-colors relative overflow-hidden"
    >
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/5 dark:bg-indigo-600/5 blur-[120px] pointer-events-none z-0" />

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
            Communication
          </motion.h2>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2"
          >
            Get In Touch
          </motion.h3>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Direct Details Side (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
              Let's build something epic
            </h4>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-sans mb-8">
              I am open to Front-End Developer and React.js Developer positions. If you have any inquiries, project proposals, or simply want to say hello, feel free to drop a message!
            </p>

            {/* Communication Details Cards */}
            <div className="space-y-4">
              {contactDetails.map((det, idx) => {
                const Icon = det.icon;
                const Content = () => (
                  <div className="flex items-center gap-4 glassmorphism p-4 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 shadow-sm hover:border-indigo-500/20 transition-all hover:scale-[1.02] cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/15 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 font-mono tracking-wider">{det.label}</p>
                      <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">{det.val}</p>
                    </div>
                  </div>
                );
                
                return det.href ? (
                  <a key={idx} href={det.href} className="block">{Content()}</a>
                ) : (
                  <div key={idx}>{Content()}</div>
                );
              })}
            </div>

            {/* Social handles list */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80">
              <p className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider mb-3 font-mono">Or Connect with me on</p>
              <div className="flex gap-3">
                {socialLinks.map((soc, idx) => {
                  const Icon = soc.icon;
                  return (
                    <a
                      key={idx}
                      href={soc.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 transition-all hover:scale-105"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{soc.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form Side (7 cols) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glassmorphism p-6 md:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/80 shadow-lg space-y-4">
              <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Send a Message</h4>

              {/* Name field */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-300 font-mono">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-950/40 border text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all ${
                    errors.name ? 'border-rose-500/70 focus:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500'
                  }`}
                />
                {errors.name && (
                  <p className="text-[10px] text-rose-500 flex items-center gap-1 mt-1 font-mono">
                    <AlertTriangle className="w-3.5 h-3.5" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email & Subject grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-300 font-mono">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="name@email.com"
                    className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-950/40 border text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all ${
                      errors.email ? 'border-rose-500/70 focus:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[10px] text-rose-500 flex items-center gap-1 mt-1 font-mono">
                      <AlertTriangle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-300 font-mono">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleInputChange}
                    placeholder="Work inquiry, project, etc."
                    className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-950/40 border text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all ${
                      errors.subject ? 'border-rose-500/70 focus:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[10px] text-rose-500 flex items-center gap-1 mt-1 font-mono">
                      <AlertTriangle className="w-3.5 h-3.5" /> {errors.subject}
                    </p>
                  )}
                </div>
              </div>

              {/* Message field */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-300 font-mono">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleInputChange}
                  placeholder="Hi Junaid, let's discuss..."
                  className={`w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-950/40 border text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all resize-none ${
                    errors.message ? 'border-rose-500/70 focus:border-rose-500' : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500'
                  }`}
                />
                {errors.message && (
                  <p className="text-[10px] text-rose-500 flex items-center gap-1 mt-1 font-mono">
                    <AlertTriangle className="w-3.5 h-3.5" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-500/10 transition-all active:scale-[0.98] disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* Floating Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-6 left-1/2 z-[100] max-w-sm w-full bg-slate-900 dark:bg-slate-950 border border-slate-800 text-white rounded-2xl p-4 shadow-2xl flex items-start gap-3.5"
          >
            <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold">Message sent successfully!</p>
              <p className="text-xs text-slate-400 mt-0.5 leading-normal">
                Thank you for reaching out. Junaid will get in touch with you shortly.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Contact;
