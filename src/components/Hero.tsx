import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, MessageSquare, TrendingDown, MapPin, Building, Activity } from 'lucide-react';

interface HeroProps {
  onOpenWaitlist: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWaitlist }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-b from-[#0A4A4A] via-[#073535] to-[#0A4A4A] text-[#FDF8F0] overflow-hidden flex items-center"
    >
      {/* Background Animated Gradient Mesh & Pattern */}
      <div className="absolute inset-0 bg-african-pattern opacity-15 pointer-events-none"></div>
      
      {/* Radiant glow orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#D4A747]/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-[#8BA888]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#C77D4A]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Tag Badge / Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-[#D4A747]"></div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#D4A747]/40 backdrop-blur-md">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4A747] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4A747]"></span>
                </span>
                <span className="text-xs font-semibold text-[#D4A747] uppercase tracking-widest">
                  Intelligence for African Commerce
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] text-[#FDF8F0] tracking-tight">
              Smart Procurement.<br />
              <span className="text-[#D4A747]">
                African Solutions.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#FDF8F0]/85 font-normal leading-relaxed max-w-2xl">
              Jara is the AI-powered procurement platform built for Nigeria—bringing transparency, efficiency, and value to every transaction from local market stalls to multinational conglomerates.
            </p>

            {/* Key Value Micro-pills */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center gap-1.5 text-xs text-[#FDF8F0]/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">
                <CheckCircle2 className="w-4 h-4 text-[#D4A747]" />
                <span>WhatsApp & Email Native</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#FDF8F0]/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">
                <ShieldCheck className="w-4 h-4 text-[#8BA888]" />
                <span>Tamper-Proof Audit Trails</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#FDF8F0]/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">
                <Zap className="w-4 h-4 text-[#D4A747]" />
                <span>Priced in Naira (₦)</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
              <button
                id="hero-join-waitlist-btn"
                onClick={onOpenWaitlist}
                className="bg-gradient-to-r from-[#D4A747] to-[#C29536] hover:from-[#E5B858] hover:to-[#D4A747] text-[#0A4A4A] font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-[#D4A747]/20 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Join the Waitlist</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="#how-it-works"
                id="hero-how-it-works-btn"
                className="inline-flex items-center justify-center gap-2 border border-[#D4A747]/60 hover:border-[#D4A747] bg-white/5 hover:bg-white/10 text-[#FDF8F0] font-semibold text-base px-7 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 cursor-pointer text-center"
              >
                <span>See How It Works</span>
              </a>
            </div>

            {/* Social Trust / Backing Strip */}
            <div className="pt-6 border-t border-white/10 w-full flex flex-wrap items-center gap-6 text-xs text-[#FDF8F0]/70">
              <span className="font-semibold uppercase tracking-wider text-[#8BA888]">
                Built for Nigerian Hubs:
              </span>
              <div className="flex items-center gap-4 text-xs font-medium">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#D4A747]" /> Lagos</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#D4A747]" /> Kano</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#D4A747]" /> Abuja</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#D4A747]" /> Port Harcourt</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#D4A747]" /> Onitsha</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Visual & Glowing Network Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Main Interactive Visual Card */}
            <div className="relative rounded-2xl bg-gradient-to-br from-[#062E2E]/90 to-[#0A4A4A]/90 p-5 sm:p-6 border border-[#D4A747]/30 shadow-2xl backdrop-blur-xl overflow-hidden">
              
              {/* African Network Matrix Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-[#D4A747]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#8BA888]"></div>
                  <span className="text-xs font-mono text-[#8BA888] ml-2">jara-procure-ai // v2.6.4</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#D4A747] bg-[#D4A747]/10 px-2 py-0.5 rounded-md border border-[#D4A747]/30">
                    <Activity className="w-3 h-3 animate-pulse" />
                    <span>Live Sync</span>
                  </div>
                  <span className="bg-[#D4A747] text-[#0A4A4A] text-[10px] font-mono font-bold tracking-tight px-2.5 py-1 rounded-md shadow-xs">
                    SYSTEM STATUS: OPTIMIZED
                  </span>
                </div>
              </div>

              {/* Central Visual: Stylized Map & Supply Flow Nodes */}
              <div className="relative h-64 sm:h-72 w-full rounded-xl bg-[#041D1D]/80 border border-white/5 p-4 flex flex-col justify-between overflow-hidden">
                {/* SVG Network Visual of Nigeria Nodes */}
                <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 400 300" fill="none">
                  {/* Grid Lines */}
                  <line x1="40" y1="60" x2="360" y2="60" stroke="#D4A747" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
                  <line x1="40" y1="150" x2="360" y2="150" stroke="#D4A747" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
                  <line x1="40" y1="240" x2="360" y2="240" stroke="#D4A747" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />

                  {/* Supply Flow Vectors */}
                  <path d="M 80,220 Q 180,120 300,90" stroke="#D4A747" strokeWidth="2" strokeDasharray="6 4" className="animate-pulse" />
                  <path d="M 300,90 Q 240,160 210,240" stroke="#8BA888" strokeWidth="2" />
                  <path d="M 80,220 Q 150,230 210,240" stroke="#C77D4A" strokeWidth="1.5" />
                  <path d="M 190,70 Q 230,120 300,90" stroke="#D4A747" strokeWidth="1.5" strokeDasharray="4 2" />

                  {/* Nodes for Cities */}
                  {/* Lagos */}
                  <circle cx="80" cy="220" r="8" fill="#0A4A4A" stroke="#D4A747" strokeWidth="3" />
                  <circle cx="80" cy="220" r="3" fill="#D4A747" />
                  <text x="50" y="244" fill="#FDF8F0" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Lagos</text>

                  {/* Kano */}
                  <circle cx="300" cy="90" r="8" fill="#0A4A4A" stroke="#8BA888" strokeWidth="3" />
                  <circle cx="300" cy="90" r="3" fill="#8BA888" />
                  <text x="312" y="95" fill="#FDF8F0" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Kano</text>

                  {/* Abuja */}
                  <circle cx="210" cy="150" r="7" fill="#0A4A4A" stroke="#D4A747" strokeWidth="2.5" />
                  <circle cx="210" cy="150" r="2.5" fill="#D4A747" />
                  <text x="222" y="154" fill="#FDF8F0" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Abuja FCT</text>

                  {/* Port Harcourt */}
                  <circle cx="210" cy="240" r="6" fill="#0A4A4A" stroke="#C77D4A" strokeWidth="2" />
                  <circle cx="210" cy="240" r="2" fill="#C77D4A" />
                  <text x="220" y="246" fill="#FDF8F0" fontSize="10" fontFamily="sans-serif">Port Harcourt</text>

                  {/* Kaduna */}
                  <circle cx="190" cy="70" r="5" fill="#0A4A4A" stroke="#8BA888" strokeWidth="2" />
                  <circle cx="190" cy="70" r="2" fill="#8BA888" />
                  <text x="140" y="70" fill="#8BA888" fontSize="10" fontFamily="sans-serif">Kaduna</text>
                </svg>

                {/* Overlay live status banner */}
                <div className="relative z-10 flex items-center justify-between text-xs text-[#FDF8F0]">
                  <div className="bg-[#0A4A4A]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#D4A747]/30 flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span className="text-[11px] font-medium">WhatsApp Quotation Parsed</span>
                  </div>
                  <span className="text-[11px] text-[#8BA888] font-mono">1.2s latency</span>
                </div>

                {/* Extraction Mini Preview */}
                <div className="relative z-10 bg-[#0A4A4A]/95 p-3 rounded-lg border border-white/10 shadow-lg space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#8BA888] font-medium">Auto-Extracted Order:</span>
                    <span className="text-[#D4A747] font-bold">₦11,125,000</span>
                  </div>
                  <div className="text-[11px] text-[#FDF8F0]/90 font-mono truncate">
                    250x 50kg Grains @ ₦44,500/bag • Net-7 Terms
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-[#8BA888] pt-1 border-t border-white/5">
                    <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                      <TrendingDown className="w-3 h-3" /> ₦875,000 (7.3% under market)
                    </span>
                    <span className="text-white/60">PO #8921 Sealed</span>
                  </div>
                </div>
              </div>

              {/* Floating Highlight Badges */}
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#D4A747]/20 flex items-center justify-center text-[#D4A747] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#8BA888] font-medium">Audit Integrity</div>
                    <div className="text-sm font-bold text-[#FDF8F0]">100% Immutable</div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#8BA888]/20 flex items-center justify-center text-[#8BA888] shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#8BA888] font-medium">Time Saved</div>
                    <div className="text-sm font-bold text-[#FDF8F0]">65% Per Order</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Decorative Floating Corner Badge */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-[#FDF8F0] text-[#0A4A4A] px-4 py-3 rounded-xl shadow-2xl border border-[#D4A747]/30 animate-float-slow">
              <div className="w-8 h-8 rounded-full bg-[#0A4A4A] flex items-center justify-center text-[#D4A747] font-serif font-bold text-base">
                ₦
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-[#0A4A4A]">Naira Intelligence</div>
                <div className="text-[10px] text-[#2C2C2C]/70">Auto-hedged benchmark rates</div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
