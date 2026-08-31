import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Mail, Building, User, Briefcase, Share2, Copy, Check } from 'lucide-react';
import { WaitlistFormData } from '../types';

export const WaitlistCTA: React.FC = () => {
  const [formData, setFormData] = useState<WaitlistFormData>({
    fullName: '',
    email: '',
    companyName: '',
    role: 'Procurement / Supply Chain Lead',
    businessSize: '₦5M - ₦25M / month',
    primaryChannel: 'WhatsApp'
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [queueNumber, setQueueNumber] = useState<number>(314);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Randomize a realistic queue spot
      setQueueNumber(Math.floor(Math.random() * 50) + 280);
    }, 800);
  };

  const handleCopyLink = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="waitlist-cta" className="py-20 md:py-28 bg-[#0A4A4A] text-[#FDF8F0] relative overflow-hidden">
      {/* African pattern overlay */}
      <div className="absolute inset-0 bg-african-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#D4A747]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#8BA888]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-br from-[#062E2E] to-[#0A4A4A] rounded-3xl p-8 sm:p-12 border border-[#D4A747]/40 shadow-2xl">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D4A747]/40 text-[#D4A747] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Limited Early Access Cohort
            </div>

            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FDF8F0] tracking-tight">
              Ready to Transform Your Procurement?
            </h2>

            <p className="text-base text-[#FDF8F0]/85 leading-relaxed">
              Join Nigeria's leading procurement teams, SME owners, and supply managers on the Jara early access waitlist.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center max-w-lg mx-auto border border-[#D4A747]/50 space-y-5"
            >
              <div className="w-16 h-16 bg-[#D4A747] text-[#0A4A4A] rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4A747] font-bold">Registration Confirmed</span>
                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-white mt-1">
                  You're #{queueNumber} on the VIP Waitlist!
                </h3>
                <p className="text-xs sm:text-sm text-[#FDF8F0]/80 mt-2">
                  Thank you, <strong>{formData.fullName}</strong>. We've reserved early access for <strong>{formData.companyName || 'your organization'}</strong>. A dedicated onboarding invitation will be sent to <strong>{formData.email}</strong>.
                </p>
              </div>

              <div className="bg-black/30 p-4 rounded-xl space-y-2 text-xs">
                <span className="text-[#8BA888] font-medium block">Want priority VIP onboarding? Share your link:</span>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={`https://jara.africa/join?ref=${formData.fullName.toLowerCase().replace(/\s+/g, '') || 'vip'}`}
                    className="w-full bg-white/10 border border-white/20 rounded px-2.5 py-1.5 text-[11px] text-white font-mono"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="bg-[#D4A747] text-[#0A4A4A] px-3 py-1.5 rounded font-bold flex items-center gap-1 shrink-0 cursor-pointer"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-[#D4A747] hover:underline"
              >
                Submit another application
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-semibold text-[#FDF8F0]/90 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#D4A747]" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Chidi Okafor"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-[#FDF8F0] placeholder-white/40 focus:outline-none focus:border-[#D4A747] transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-semibold text-[#FDF8F0]/90 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#D4A747]" />
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="chidi@company.ng"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-[#FDF8F0] placeholder-white/40 focus:outline-none focus:border-[#D4A747] transition-colors"
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-semibold text-[#FDF8F0]/90 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-[#D4A747]" />
                    Company / Organization Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Prime Agro Foods Ltd"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-[#FDF8F0] placeholder-white/40 focus:outline-none focus:border-[#D4A747] transition-colors"
                  />
                </div>

                {/* Role Dropdown */}
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-semibold text-[#FDF8F0]/90 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#D4A747]" />
                    Your Role / Title *
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-[#073535] border border-white/20 rounded-xl px-4 py-3 text-sm text-[#FDF8F0] focus:outline-none focus:border-[#D4A747] transition-colors"
                  >
                    <option value="Procurement / Supply Chain Lead">Procurement / Supply Chain Lead</option>
                    <option value="Managing Director / CEO">Managing Director / CEO</option>
                    <option value="Finance Director / CFO">Finance Director / CFO</option>
                    <option value="Operations & Warehouse Manager">Operations & Warehouse Manager</option>
                    <option value="Informal Trader / SME Retailer">Informal Trader / SME Retailer</option>
                    <option value="Government / Public MDA Official">Government / Public MDA Official</option>
                  </select>
                </div>

                {/* Spend Band */}
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-semibold text-[#FDF8F0]/90">
                    Est. Monthly Procurement Spend (₦)
                  </label>
                  <select
                    value={formData.businessSize}
                    onChange={(e) => setFormData({ ...formData, businessSize: e.target.value })}
                    className="w-full bg-[#073535] border border-white/20 rounded-xl px-4 py-3 text-sm text-[#FDF8F0] focus:outline-none focus:border-[#D4A747] transition-colors"
                  >
                    <option value="Under ₦5M / month">Under ₦5M / month</option>
                    <option value="₦5M - ₦25M / month">₦5M - ₦25M / month</option>
                    <option value="₦25M - ₦100M / month">₦25M - ₦100M / month</option>
                    <option value="₦100M+ / month (Enterprise)">₦100M+ / month (Enterprise)</option>
                    <option value="Public Agency / State MDA">Public Agency / State MDA</option>
                  </select>
                </div>

                {/* Primary Channel */}
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-semibold text-[#FDF8F0]/90">
                    Primary Current Channel
                  </label>
                  <select
                    value={formData.primaryChannel}
                    onChange={(e) => setFormData({ ...formData, primaryChannel: e.target.value })}
                    className="w-full bg-[#073535] border border-white/20 rounded-xl px-4 py-3 text-sm text-[#FDF8F0] focus:outline-none focus:border-[#D4A747] transition-colors"
                  >
                    <option value="WhatsApp & Phone Calls">WhatsApp & Phone Calls</option>
                    <option value="Corporate Email & Excel">Corporate Email & Excel</option>
                    <option value="Paper Invoices & Receipts">Paper Invoices & Receipts</option>
                    <option value="ERP (SAP / Oracle / Sage)">Legacy ERP (SAP / Oracle / Sage)</option>
                  </select>
                </div>

              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#D4A747] to-[#C29536] hover:from-[#E5B858] hover:to-[#D4A747] text-[#0A4A4A] font-bold text-base py-4 rounded-xl shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Securing Your Priority Spot...' : 'Get Early Access'}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs text-[#8BA888] pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4A747]" />
                  No credit card required
                </span>
                <span>•</span>
                <span>Instant confirmation</span>
                <span>•</span>
                <span>Exclusive cohort perks</span>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
