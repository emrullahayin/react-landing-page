'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Solutions', id: 'solutions' },
  { name: 'Features', id: 'features' },
  { name: 'Pricing', id: 'pricing' },
  { name: 'FAQ', id: 'faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    window.addEventListener('scroll', handleScroll);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleLogoClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', window.location.pathname);
    }
    setActiveSection('');
    setIsOpen(false);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setActiveSection(id);
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-2 group outline-none"
        >
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-blue-600/20">
            <div className="w-3.5 h-3.5 bg-white rounded-full" />
          </div>
          <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">
            Landing<span className="text-blue-600">Page</span>
          </span>
        </button>

        <div className="hidden md:flex items-center bg-slate-100/50 p-1 rounded-2xl border border-slate-200/50">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-5 py-2 text-sm font-bold transition-all relative rounded-xl ${
                activeSection === item.id
                  ? 'text-blue-600'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-white shadow-sm border border-slate-200/50 rounded-xl"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-bold text-slate-600 hover:text-slate-900 px-4 transition-colors">
            Log in
          </button>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-xl shadow-slate-900/10 flex items-center gap-2">
            Get Started <ArrowRight size={16} />
          </button>
        </div>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-200 text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-lg font-bold p-4 rounded-xl text-left transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="h-px bg-slate-100 my-4" />
              <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
