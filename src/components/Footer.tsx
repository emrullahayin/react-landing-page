'use client';

import React from 'react';
import { Twitter, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Product: ['Solutions', 'Features', 'Pricing', 'Changelog'],
  Company: ['About', 'Careers', 'Blog', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Cookie Policy', 'Security'],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4">
            <div
              className="flex items-center gap-2 mb-6 group cursor-pointer"
              onClick={scrollToTop}
            >
              <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:rotate-12 transition-transform">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">
                Landing<span className="text-blue-600">Page</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-sm">
              The next-generation boilerplate for elite developers. Build,
              scale, and dominate the market with our high-performance
              framework.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                All Systems Operational
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-6">
                  {category}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors inline-flex items-center group"
                      >
                        {link}
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all ml-1"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-6">
              Subscribe to our newsletter
            </h4>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm font-medium outline-none focus:border-blue-600 focus:bg-white transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-slate-900 text-white px-4 rounded-xl hover:bg-blue-600 transition-all">
                <Mail size={18} />
              </button>
            </div>
            <p className="mt-4 text-[11px] text-slate-400 leading-relaxed italic">
              Receive the latest updates, components, and news. No spam, ever.
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-6">
            <Twitter
              size={20}
              className="text-slate-400 hover:text-blue-500 cursor-pointer transition-colors"
            />
            <Github
              size={20}
              className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors"
            />
            <Linkedin
              size={20}
              className="text-slate-400 hover:text-blue-700 cursor-pointer transition-colors"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              © 2026 LandingPage Inc. Built with Precision.
            </p>
            <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg border border-slate-100">
              <span className="text-[10px] font-black text-slate-500">EN</span>
              <div className="w-px h-3 bg-slate-200" />
              <span className="text-[10px] font-black text-slate-300 hover:text-slate-500 cursor-pointer transition-colors">
                TR
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
