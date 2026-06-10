import React from 'react';
import { motion } from 'framer-motion';
import { X, Download } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4 overflow-hidden">
      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col my-4 h-[90vh]"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center space-x-2">
            <span className="h-2.5 w-2.5 rounded-full bg-indigo-500 animate-pulse" />
            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-200 font-sans">
              Resume Preview - Junaid K
            </h2>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="/junaid.pdf"
              download="Junaid_K_Resume.pdf"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Container */}
        <div className="flex-1 w-full h-full bg-slate-100 dark:bg-slate-950 overflow-hidden relative">
          {/* Iframe to embed the PDF */}
          <iframe
            src="/junaid.pdf#toolbar=0"
            className="w-full h-full border-0 relative z-10"
            title="Junaid K Resume"
          />
          
          {/* Fallback layout for mobile devices / browsers that block inline PDFs */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-900 text-center z-0">
            <div className="max-w-md space-y-4">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                If the PDF preview did not load automatically on your browser, you can view it by downloading the file below:
              </p>
              <a
                href="/junaid.pdf"
                download="Junaid_K_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume PDF</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResumeModal;
