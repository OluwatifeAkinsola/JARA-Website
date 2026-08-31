import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PlugZap, Cpu, LineChart, CheckCircle2, ArrowRight, Sparkles, MessageCircle, FileSpreadsheet, BarChart2 } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/content';

export const HowItWorks: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#FDF8F0] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-[#D4A747]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A4A4A]/10 border border-[#0A4A4A]/20 text-[#0A4A4A] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A747]" />
            Seamless 3-Step Process
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A4A4A] tracking-tight">
            From Chaos to Clarity in Three Steps
          </h2>

          <p className="text-base sm:text-lg text-[#2C2C2C]/80 leading-relaxed">
            No massive 6-month enterprise onboarding. No software training required for your local vendors. Jara fits invisibly into how African commerce already operates.
          </p>
        </div>

        {/* 3 Steps Interactive Navigation / Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 relative">
          
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#0A4A4A]/20 via-[#D4A747] to-[#8BA888]/30 -translate-y-8 z-0"></div>

          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            const Icon = idx === 0 ? PlugZap : idx === 1 ? Cpu : LineChart;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative z-10 cursor-pointer rounded-xl p-7 transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#0A4A4A] text-[#FDF8F0] shadow-xl ring-2 ring-[#D4A747] transform -translate-y-1'
                    : 'bg-white text-[#2C2C2C] border border-[#0A4A4A]/5 hover:border-[#D4A747]/60 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`font-serif-title text-3xl font-extrabold ${isActive ? 'text-[#D4A747]' : 'text-[#0A4A4A]/40'}`}>
                      {step.number}
                    </span>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-[#D4A747] text-[#0A4A4A]' : 'bg-[#0A4A4A]/10 text-[#0A4A4A]'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className={`font-serif-title text-2xl font-bold mb-3 ${isActive ? 'text-[#FDF8F0]' : 'text-[#0A4A4A]'}`}>
                    {step.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-6 ${isActive ? 'text-[#FDF8F0]/85' : 'text-[#2C2C2C]/75'}`}>
                    {step.description}
                  </p>
                </div>

                {/* Sub-bullets */}
                <div className="space-y-2.5 pt-4 border-t border-current/10 text-xs">
                  {step.detailPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${isActive ? 'text-[#D4A747]' : 'text-[#8BA888]'}`} />
                      <span className={isActive ? 'text-[#FDF8F0]/90' : 'text-[#2C2C2C]/80'}>{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Step Detail Visual Box */}
        <div className="bg-[#F5F0E8] rounded-3xl p-6 sm:p-8 border border-[#0A4A4A]/10 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0A4A4A] text-[#D4A747] flex items-center justify-center font-serif font-bold text-xl shrink-0">
                {HOW_IT_WORKS_STEPS[activeStepIndex].number}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8BA888]">Active Step In Focus</span>
                <h4 className="text-xl font-bold text-[#0A4A4A]">
                  {HOW_IT_WORKS_STEPS[activeStepIndex].title}: {HOW_IT_WORKS_STEPS[activeStepIndex].previewLabel}
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-[#2C2C2C]/70">
                Ready to transform your workflow?
              </span>
              <a
                href="#waitlist-cta"
                className="bg-[#0A4A4A] hover:bg-[#135E5E] text-[#D4A747] font-bold text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
