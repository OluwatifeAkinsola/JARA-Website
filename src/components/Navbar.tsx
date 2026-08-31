import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, Shield, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenWaitlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWaitlist }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Problem', href: '#problem' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Why Jara', href: '#why-jara' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A4A4A]/95 backdrop-blur-md shadow-lg border-b border-[#D4A747]/20 py-3'
          : 'bg-[#0A4A4A]/70 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            id="navbar-logo-link"
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4A747] to-[#B58A2B] p-0.5 shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#0A4A4A] rounded-[10px] flex items-center justify-center">
                <span className="font-serif-title text-[#D4A747] font-bold text-xl tracking-tight">J</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-serif-title text-2xl font-bold tracking-tight text-[#FDF8F0] uppercase">
                  JA<span className="text-[#D4A747]">RA</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A747] animate-pulse"></span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#8BA888] font-medium -mt-1">
                Procurement AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#FDF8F0]/85 hover:text-[#D4A747] text-sm font-medium transition-colors duration-200 py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4A747] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#demo-section"
              className="text-[#FDF8F0] hover:text-[#D4A747] text-xs font-semibold px-3 py-2 transition-colors duration-200 flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4A747]" />
              Live Demo
            </a>
            <button
              id="nav-cta-btn"
              onClick={onOpenWaitlist}
              className="bg-gradient-to-r from-[#D4A747] to-[#C29536] hover:from-[#E5B858] hover:to-[#D4A747] text-[#0A4A4A] font-bold text-sm px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-1.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get Early Access</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="nav-mobile-cta"
              onClick={onOpenWaitlist}
              className="bg-[#D4A747] text-[#0A4A4A] text-xs font-bold px-3 py-1.5 rounded shadow sm:hidden"
            >
              Join
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#FDF8F0] p-2 rounded-lg hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden bg-[#0A4A4A] border-b border-[#D4A747]/20 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl animate-in slide-in-from-top">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#FDF8F0] hover:text-[#D4A747] font-medium text-base py-2 px-3 rounded-md hover:bg-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="#demo-section"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#D4A747] font-semibold text-sm py-2 px-3 flex items-center justify-between rounded-md bg-white/5"
            >
              <span>Try Live AI Parser Demo</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWaitlist();
              }}
              className="w-full bg-[#D4A747] hover:bg-[#E5B858] text-[#0A4A4A] font-bold text-center py-3 rounded-lg shadow mt-2"
            >
              Get Early Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
