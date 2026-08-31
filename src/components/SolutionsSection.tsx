import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShoppingBag, 
  Store, 
  Building2, 
  Building, 
  Landmark, 
  Check, 
  TrendingUp, 
  ArrowRight, 
  Sparkles,
  Users
} from 'lucide-react';
import { SOLUTIONS_SEGMENTS } from '../data/content';

interface SolutionsSectionProps {
  onOpenWaitlist: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenWaitlist }) => {
  const [activeSegmentId, setActiveSegmentId] = useState<string>('informal-traders');

  const activeSegment = SOLUTIONS_SEGMENTS.find(s => s.id === activeSegmentId) || SOLUTIONS_SEGMENTS[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag': return ShoppingBag;
      case 'Store': return Store;
      case 'Building2': return Building2;
      case 'Building': return Building;
      case 'Landmark': return Landmark;
      default: return Users;
    }
  };

  return (
    <section id="solutions" className="py-20 md:py-28 bg-[#F5F0E8] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-african-subtle-light opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A4A4A]/10 border border-[#0A4A4A]/20 text-[#0A4A4A] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A747]" />
            Tailored Industry Solutions
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A4A4A] tracking-tight">
            Built for Every Tier of African Business
          </h2>

          <p className="text-base sm:text-lg text-[#2C2C2C]/80 leading-relaxed">
            Whether you are managing a busy market stall in Balogun or directing supply chain operations for a multi-plant conglomerate, Jara adapts to your scale.
          </p>
        </div>

        {/* Segment Pill Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {SOLUTIONS_SEGMENTS.map((segment) => {
            const Icon = getIcon(segment.iconName);
            const isActive = segment.id === activeSegmentId;

            return (
              <button
                key={segment.id}
                onClick={() => setActiveSegmentId(segment.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#0A4A4A] text-[#D4A747] shadow-md ring-1 ring-[#D4A747]'
                    : 'bg-white text-[#2C2C2C]/80 hover:bg-[#FDF8F0] hover:text-[#0A4A4A] border border-[#0A4A4A]/5 shadow-xs'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#D4A747]' : 'text-[#8BA888]'}`} />
                <span>{segment.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Segment Feature Matrix Card */}
        <motion.div
          key={activeSegment.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[#FDF8F0] rounded-3xl p-6 sm:p-10 border border-[#0A4A4A]/15 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-xs font-bold text-[#8BA888] uppercase tracking-wider mb-1">
                  Target: {activeSegment.targetAudience}
                </div>
                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#0A4A4A]">
                  {activeSegment.title}
                </h3>
                <p className="text-sm font-semibold text-[#D4A747] mt-1">
                  "{activeSegment.tagline}"
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-red-50/70 border border-red-200/80 rounded-xl p-3.5 text-xs text-red-900">
                  <span className="font-bold text-red-800 uppercase block mb-1">The Critical Bottleneck:</span>
                  {activeSegment.painPoint}
                </div>

                <div className="bg-[#0A4A4A]/5 border border-[#0A4A4A]/15 rounded-xl p-3.5 text-xs text-[#0A4A4A]">
                  <span className="font-bold text-[#0A4A4A] uppercase block mb-1">The Jara AI Resolution:</span>
                  {activeSegment.jaraSolution}
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-[#0A4A4A] uppercase tracking-wider block mb-2.5">
                  Core Included Capabilities:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeSegment.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-[#2C2C2C] bg-white p-2 rounded-lg border border-gray-200">
                      <Check className="w-3.5 h-3.5 text-[#8BA888] font-bold shrink-0" />
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Metric & Persona Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0A4A4A] to-[#073535] rounded-2xl p-6 text-[#FDF8F0] shadow-xl border border-[#D4A747]/30 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <span className="text-xs font-mono text-[#8BA888]">IMPACT METRIC</span>
                  <span className="text-[10px] bg-[#D4A747] text-[#0A4A4A] px-2 py-0.5 rounded font-bold uppercase">
                    Verified ROI
                  </span>
                </div>

                <div className="text-center py-4">
                  <div className="font-serif-title text-4xl sm:text-5xl font-extrabold text-[#D4A747] mb-1">
                    {activeSegment.metric}
                  </div>
                  <div className="text-xs text-[#FDF8F0]/80 font-medium">
                    {activeSegment.metricLabel}
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-4 border border-white/10 space-y-2 text-xs">
                <div className="font-bold text-[#D4A747]">Why this segment chooses Jara:</div>
                <p className="text-[11px] text-[#FDF8F0]/85 leading-relaxed">
                  "No other platform bridges informal local market practices with structured digital financial reporting like Jara does."
                </p>
              </div>

              <button
                onClick={onOpenWaitlist}
                className="w-full bg-gradient-to-r from-[#D4A747] to-[#C29536] hover:from-[#E5B858] hover:to-[#D4A747] text-[#0A4A4A] font-bold text-xs py-3 rounded-xl shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Request Custom Segment Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
