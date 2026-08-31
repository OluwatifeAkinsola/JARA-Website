import React from 'react';
import { Sparkles, Mail, MapPin, Phone, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#062E2E] text-[#FDF8F0] border-t border-[#D4A747]/20 pt-16 pb-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-african-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4A747] to-[#B58A2B] p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full bg-[#0A4A4A] rounded-[10px] flex items-center justify-center">
                  <span className="font-serif text-[#D4A747] font-bold text-xl">J</span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-serif text-2xl font-bold tracking-tight text-[#FDF8F0] uppercase">
                    JA<span className="text-[#D4A747]">RA</span>
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A747]"></span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#8BA888] font-medium -mt-1">
                  Procurement AI
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#FDF8F0]/75 leading-relaxed max-w-sm">
              The intelligence behind African commerce. Building the transparent, AI-powered procurement infrastructure for modern African enterprises, SMEs, and traders.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {/* Social Media links */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 hover:border-[#D4A747] hover:bg-[#D4A747] hover:text-[#0A4A4A] flex items-center justify-center text-xs font-bold transition-all"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 hover:border-[#D4A747] hover:bg-[#D4A747] hover:text-[#0A4A4A] flex items-center justify-center text-xs font-bold transition-all"
                aria-label="Twitter / X"
              >
                𝕏
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 hover:border-[#D4A747] hover:bg-[#D4A747] hover:text-[#0A4A4A] flex items-center justify-center text-xs font-bold transition-all"
                aria-label="Instagram"
              >
                ig
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-xs">
            <h4 className="font-serif text-sm font-bold text-[#D4A747] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-[#FDF8F0]/80">
              <li><a href="#home" className="hover:text-[#D4A747] transition-colors">Home</a></li>
              <li><a href="#problem" className="hover:text-[#D4A747] transition-colors">The Problem</a></li>
              <li><a href="#features" className="hover:text-[#D4A747] transition-colors">Features & Mockups</a></li>
              <li><a href="#how-it-works" className="hover:text-[#D4A747] transition-colors">How It Works</a></li>
              <li><a href="#demo-section" className="hover:text-[#D4A747] transition-colors">Live AI Simulator</a></li>
              <li><a href="#about" className="hover:text-[#D4A747] transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Solutions by Segment */}
          <div className="space-y-3 text-xs">
            <h4 className="font-serif text-sm font-bold text-[#D4A747] uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-2 text-[#FDF8F0]/80">
              <li><a href="#solutions" className="hover:text-[#D4A747] transition-colors">Informal Market Traders</a></li>
              <li><a href="#solutions" className="hover:text-[#D4A747] transition-colors">Retailers & Pharmacies</a></li>
              <li><a href="#solutions" className="hover:text-[#D4A747] transition-colors">SME Manufacturers</a></li>
              <li><a href="#solutions" className="hover:text-[#D4A747] transition-colors">Large Conglomerates</a></li>
              <li><a href="#solutions" className="hover:text-[#D4A747] transition-colors">Public Sector MDAs</a></li>
            </ul>
          </div>

          {/* Contact & Locations */}
          <div className="space-y-3 text-xs">
            <h4 className="font-serif text-sm font-bold text-[#D4A747] uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-[#FDF8F0]/80">
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4A747] shrink-0 mt-0.5" />
                <span>hello@jara.africa</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4A747] shrink-0 mt-0.5" />
                <span>+234 (0) 1 888 JARA</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4A747] shrink-0 mt-0.5" />
                <span>Victoria Island, Lagos & Central Area, Abuja</span>
              </div>
            </div>
          </div>

        </div>

        {/* Natural Tones Stats Highlight Banner */}
        <div className="py-6 border-b border-white/10 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#D4A747]">95%</div>
            <div className="text-[10px] text-[#FDF8F0]/60 uppercase tracking-widest font-medium mt-0.5">Success Rate</div>
          </div>
          <div className="hidden sm:block w-[1px] h-8 bg-white/10"></div>
          <div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#D4A747]">10k+</div>
            <div className="text-[10px] text-[#FDF8F0]/60 uppercase tracking-widest font-medium mt-0.5">SMEs Onboarded</div>
          </div>
          <div className="hidden sm:block w-[1px] h-8 bg-white/10"></div>
          <div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#D4A747]">0%</div>
            <div className="text-[10px] text-[#FDF8F0]/60 uppercase tracking-widest font-medium mt-0.5">Data Leakage</div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FDF8F0]/60 gap-4">
          <div className="flex items-center gap-2">
            <span>© 2026 Jara Technologies Ltd. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1 text-[#8BA888]">
              🇳🇬 Proudly built for Nigeria & Pan-African commerce
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
