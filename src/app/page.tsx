'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Globe,
  BarChart3,
  Sparkles,
  Users,
  Twitter,
  Github,
  Linkedin,
  ChevronDown,
} from 'lucide-react';

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

const faqData = [
  {
    q: 'How fast is the setup process?',
    a: 'You can go from zero to a live production environment in less than 5 minutes with our pre-configured CLI and templates.',
  },
  {
    q: 'Does it support Tailwind v4?',
    a: 'Yes, it is built from the ground up to leverage the performance and features of Tailwind CSS v4.',
  },
  {
    q: 'Is there a free trial for the Pro plan?',
    a: 'Absolutely. We offer a 14-day free trial for the Pro plan with no credit card required upfront.',
  },
  {
    q: 'Can I export my code anytime?',
    a: 'Yes. We believe in no vendor lock-in. You can export your entire project as a standard Next.js application at any time.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white text-slate-900 selection:bg-blue-600/10 selection:text-blue-600 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_50%_0%,_rgba(37,99,235,0.08),transparent_70%)]" />
        </div>
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-bold tracking-widest uppercase mb-8"
            >
              <Sparkles size={14} className="text-blue-600" />
              <span>Version 4.0 is Live</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-6xl md:text-[5.5rem] font-black tracking-tight mb-8 leading-[0.9] text-balance"
            >
              Design like a pro. <br />
              <span className="text-blue-600">Ship like a giant.</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed text-pretty"
            >
              The premium boilerplate for Next.js developers who value speed,
              aesthetic perfection, and clean architecture.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all active:scale-95 flex items-center justify-center gap-2">
                Start Building Free <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                Documentation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* LOGO CLOUD */}
      <section className="py-16 border-y border-slate-100 bg-slate-50/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale pointer-events-none">
            {['VERCEL', 'STRIPE', 'LINEAR', 'OPENAI', 'GITHUB'].map((logo) => (
              <span key={logo} className="text-lg font-black tracking-tighter">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section id="solutions" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">
              The Solution
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Built for scale, <br />
              designed for speed.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 p-10 bg-slate-900 text-white rounded-[2.5rem] flex flex-col justify-between min-h-[350px] relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 mb-8">
                <Globe />
              </div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4">
                  Global Content Delivery
                </h4>
                <p className="text-slate-400 max-w-sm">
                  Deploy to 300+ edge locations worldwide for sub-millisecond
                  latency.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] group-hover:bg-blue-600/30 transition-colors pointer-events-none" />
            </div>
            <div className="md:col-span-4 p-10 bg-blue-600 text-white rounded-[2.5rem] flex flex-col justify-between min-h-[350px]">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 mb-8">
                <Shield />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-4">Enterprise Security</h4>
                <p className="text-blue-100/70">
                  Military-grade protection for your data and users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-32 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <Feature
              icon={<Zap className="text-blue-600" />}
              title="Lightning Fast"
              desc="Optimized for Core Web Vitals to ensure your site stays fast."
            />
            <Feature
              icon={<BarChart3 className="text-indigo-600" />}
              title="Real-time Analytics"
              desc="Deep insights into your users' behavior without tracking scripts."
            />
            <Feature
              icon={<Users className="text-violet-600" />}
              title="Team Sync"
              desc="Collaborate in real-time with your entire engineering team."
            />
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto rounded-[3.5rem] bg-slate-900 text-white p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden text-left">
            <div className="relative z-10 max-w-xs">
              <h2 className="text-4xl font-bold mb-6">Simple, fair pricing.</h2>
              <p className="text-slate-400 mb-8">
                One plan. Everything included. No hidden fees.
              </p>
              <div className="text-6xl font-black mb-2">
                $49
                <span className="text-lg font-normal text-slate-500">/mo</span>
              </div>
              <p className="text-xs text-blue-400 font-bold uppercase tracking-widest">
                Unlimited Usage
              </p>
            </div>
            <div className="relative z-10 w-full md:w-auto">
              <ul className="space-y-4 mb-10">
                {['Priority Support', 'Custom Domains', 'Advanced SEO'].map(
                  (f) => (
                    <li key={f} className="flex items-center gap-3 font-bold">
                      <CheckCircle2 size={20} className="text-blue-500" /> {f}
                    </li>
                  ),
                )}
              </ul>
              <button className="w-full md:w-[200px] py-4 bg-white text-slate-900 rounded-2xl font-black hover:bg-blue-50 transition-all active:scale-95">
                Join Now
              </button>
            </div>
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(37,99,235,0.15),transparent)] pointer-events-none" />
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION (NEW) --- */}
      <section id="faq" className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-20">
            <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">
              Support
            </h2>
            <h3 className="text-4xl font-bold tracking-tight text-slate-900">
              Frequently Asked Questions
            </h3>
          </div>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <FaqItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="text-xl font-black tracking-tighter mb-12 flex justify-center items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded-lg shadow-lg shadow-blue-500/20" />{' '}
            LANDING<span className="text-blue-600">PAGE</span>
          </div>
          <div className="flex justify-center gap-8 mb-12">
            <Twitter
              className="text-slate-400 hover:text-blue-400 cursor-pointer transition-colors"
              size={20}
            />
            <Github
              className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors"
              size={20}
            />
            <Linkedin
              className="text-slate-400 hover:text-blue-700 cursor-pointer transition-colors"
              size={20}
            />
          </div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            © 2026 LandingPage. Crafted with precision.
          </p>
        </div>
      </footer>
    </div>
  );
}

// --- REFACTORED SUB-COMPONENTS ---

function Feature({ icon, title, desc }: any) {
  return (
    <div className="group">
      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:shadow-md transition-shadow">
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-3">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border border-slate-100 rounded-[2rem] transition-all duration-300 overflow-hidden ${
        isOpen
          ? 'bg-slate-50/50 border-blue-100'
          : 'bg-white hover:border-slate-200'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between text-left"
      >
        <span className="font-bold text-lg text-slate-900">{question}</span>
        <div
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`}
        >
          <ChevronDown size={20} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-8 pb-8 text-slate-500 leading-relaxed text-sm">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

