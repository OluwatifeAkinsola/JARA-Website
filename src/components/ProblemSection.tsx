import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Users, TrendingUp, XCircle, CheckCircle, ArrowRight, FileQuestion, MessageSquareOff, AlertOctagon, CheckCheck, Sparkles } from 'lucide-react';
import { STATISTICS } from '../data/content';

export const ProblemSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'statistics'>('comparison');

  return (
    <section id="problem" className="py-20 md:py-28 bg-[#FDF8F0] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8BA888]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A747]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C77D4A]/10 border border-[#C77D4A]/30 text-[#C77D4A] text-xs font-semibold uppercase tracking-wider">
            <AlertOctagon className="w-3.5 h-3.5" />
            The Current Reality
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A4A4A] tracking-tight">
            Procurement in Nigeria is Broken.
          </h2>

          <p className="text-base sm:text-lg text-[#2C2C2C]/80 leading-relaxed">
            Fragmented supplier communication across disparate WhatsApp chats, paper receipts, bureaucratic inefficiency, and corruption risk exclude viable SMEs and cost businesses billions of Naira annually in invisible leakage.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {STATISTICS.map((stat, idx) => {
            const Icon = idx === 0 ? AlertTriangle : idx === 1 ? Users : TrendingUp;
            const accentColor = idx === 0 ? 'text-[#C77D4A]' : idx === 1 ? 'text-[#0A4A4A]' : 'text-[#D4A747]';
            const bgAccent = idx === 0 ? 'bg-[#C77D4A]/10' : idx === 1 ? 'bg-[#0A4A4A]/10' : 'bg-[#D4A747]/15';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white border border-[#0A4A4A]/5 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-11 h-11 rounded-lg ${bgAccent} ${accentColor} flex items-center justify-center mb-5`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="font-serif-title text-4xl sm:text-5xl font-extrabold text-[#0A4A4A] mb-2 tracking-tight">
                    {stat.value}
                  </div>

                  <div className="text-base font-bold text-[#2C2C2C] mb-3 leading-snug">
                    {stat.label}
                  </div>
                </div>

                <div className="text-xs text-[#2C2C2C]/70 leading-relaxed pt-3 border-t border-[#0A4A4A]/5">
                  {stat.subtext}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Side-by-Side Contrast Visual Card */}
        <div className="bg-[#F5F0E8] rounded-3xl p-6 sm:p-10 border border-[#0A4A4A]/10 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#0A4A4A]">
              The Cost of Chaos vs. The Power of Jara
            </h3>
            <p className="text-sm text-[#2C2C2C]/75 mt-2">
              See the stark operational difference between traditional manual procurement and Jara's AI intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Left: Traditional Chaotic Way */}
            <div className="rounded-2xl bg-white/80 p-6 sm:p-8 border border-red-200/80 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500/10 text-red-700 text-[11px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                Traditional Chaos
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <XCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#2C2C2C]">Manual & Vulnerable</h4>
                    <p className="text-xs text-[#2C2C2C]/60">Typical African business workflow today</p>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-[#2C2C2C]/80">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span>
                    <span><strong>Scattered Channels:</strong> Quotes lost across hundreds of unorganized WhatsApp messages, voice notes, and SMS.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span>
                    <span><strong>Manual PO Drudgery:</strong> 45-60 minutes spent copying data into Excel and drafting error-prone LPOs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span>
                    <span><strong>Procurement Leakage:</strong> Invisible 15-25% price inflation from rogue supplier markups and unverified middle-men.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span>
                    <span><strong>Zero Audit Trail:</strong> Missing physical receipts and undocumented approvals make year-end audit a painful nightmare.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-red-100 bg-red-50/60 rounded-xl p-3 text-xs text-red-800 font-medium">
                ⚠️ Outcome: 18+ hours lost weekly, high fraud vulnerability, delayed stock delivery.
              </div>
            </div>

            {/* Right: Jara AI Digital Streamlined Way */}
            <div className="rounded-2xl bg-gradient-to-br from-[#0A4A4A] to-[#073535] p-6 sm:p-8 text-[#FDF8F0] shadow-xl flex flex-col justify-between relative overflow-hidden border border-[#D4A747]/40">
              <div className="absolute top-0 right-0 bg-[#D4A747] text-[#0A4A4A] text-[11px] font-extrabold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                Jara AI Precision
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#D4A747]/20 flex items-center justify-center text-[#D4A747]">
                    <CheckCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#FDF8F0]">Automated & Tamper-Proof</h4>
                    <p className="text-xs text-[#8BA888]">The future of Nigerian commerce</p>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-[#FDF8F0]/90">
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-[#D4A747] shrink-0 mt-1" />
                    <span><strong>Unified Intelligence:</strong> WhatsApp, voice notes, and emails automatically parsed into structured line-item data in seconds.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-[#D4A747] shrink-0 mt-1" />
                    <span><strong>Instant PO Creation:</strong> Standardized digital Purchase Orders generated in 2 clicks with automated market rate validation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-[#D4A747] shrink-0 mt-1" />
                    <span><strong>Price Benchmark Defense:</strong> Real-time alerts when supplier quotes exceed the prevailing Nigerian market benchmark.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-[#D4A747] shrink-0 mt-1" />
                    <span><strong>Cryptographic Audit Trails:</strong> Immutable timestamped records of every quote, approval, and delivery for effortless audits.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 bg-white/10 rounded-xl p-3 text-xs text-[#D4A747] font-semibold flex items-center justify-between">
                <span>⚡ Outcome: 65% faster orders, zero duplicate payments, guaranteed audit readiness.</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
