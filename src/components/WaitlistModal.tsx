import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, User, Mail, Building, Briefcase, ShieldCheck } from 'lucide-react';
import { WaitlistFormData } from '../types';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-lg bg-[#0A4A4A] text-[#FDF8F0] rounded-3xl p-6 sm:p-8 border border-[#D4A747]/40 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#FDF8F0]/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-[#D4A747] text-[#0A4A4A] rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif-title text-2xl font-bold text-white">
              Welcome to the Jara Cohort!
            </h3>
            <p className="text-xs text-[#FDF8F0]/80">
              We've registered <strong>{formData.fullName}</strong> ({formData.email}) for prioritized early access. Our onboarding team will reach out shortly.
            </p>
            <button
              onClick={onClose}
              className="w-full bg-[#D4A747] text-[#0A4A4A] font-bold text-sm py-3 rounded-xl shadow mt-2 cursor-pointer hover:bg-[#E5B858]"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#D4A747] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Priority Waitlist Application
            </div>

            <h3 className="font-serif-title text-2xl font-bold text-[#FDF8F0] mb-1">
              Join Jara Early Access
            </h3>
            <p className="text-xs text-[#FDF8F0]/70 mb-5">
              Experience the intelligence behind modern African procurement.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="text-[#FDF8F0]/90 font-medium flex items-center gap-1">
                  <User className="w-3 h-3 text-[#D4A747]" /> Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Amina Bello"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:border-[#D4A747]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[#FDF8F0]/90 font-medium flex items-center gap-1">
                  <Mail className="w-3 h-3 text-[#D4A747]" /> Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="amina@dantata-agro.ng"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:border-[#D4A747]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[#FDF8F0]/90 font-medium flex items-center gap-1">
                  <Building className="w-3 h-3 text-[#D4A747]" /> Company Name
                </label>
                <input
                  type="text"
                  placeholder="Dantata Agro Mills"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:border-[#D4A747]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="space-y-1">
                  <label className="text-[#FDF8F0]/90 font-medium">Role</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-[#073535] border border-white/20 rounded-lg px-2 py-2 text-white text-xs"
                  >
                    <option value="Procurement Lead">Procurement Lead</option>
                    <option value="Executive / CEO">Executive / CEO</option>
                    <option value="Finance VP">Finance VP</option>
                    <option value="Retailer / Trader">Retailer / Trader</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[#FDF8F0]/90 font-medium">Monthly Spend</label>
                  <select
                    value={formData.businessSize}
                    onChange={(e) => setFormData({ ...formData, businessSize: e.target.value })}
                    className="w-full bg-[#073535] border border-white/20 rounded-lg px-2 py-2 text-white text-xs"
                  >
                    <option value="Under ₦5M">Under ₦5M</option>
                    <option value="₦5M - ₦25M">₦5M - ₦25M</option>
                    <option value="₦25M - ₦100M">₦25M - ₦100M</option>
                    <option value="₦100M+">₦100M+</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#D4A747] to-[#C29536] text-[#0A4A4A] font-bold text-sm py-3 rounded-xl shadow-lg mt-3 flex items-center justify-center gap-1.5 cursor-pointer hover:from-[#E5B858]"
              >
                <span>{isSubmitting ? 'Submitting...' : 'Claim Early Access Spot'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
