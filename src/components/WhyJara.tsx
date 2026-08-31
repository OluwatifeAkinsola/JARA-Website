import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, ShieldAlert, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { WHY_JARA_PILLARS } from '../data/content';

interface WhyJaraProps {
  onOpenWaitlist: () => void;
}

export const WhyJara: React.FC<WhyJaraProps> = ({ onOpenWaitlist }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return Compass;
      case 'Sparkles': return Sparkles;
      case 'ShieldAlert': return ShieldAlert;
      case 'Layers': return Layers;
      default: return Sparkles;
    }
  };

  return (
    <section id="why-jara" className="py-20 md:py-28 bg-[#FDF8F0] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[#D4A747]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A747]/20 border border-[#D4A747]/40 text-[#0A4A4A] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A747]" />
            Unique Value Proposition
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A4A4A] tracking-tight">
            Why Jara?
          </h2>

          <p className="text-base sm:text-lg text-[#2C2C2C]/80 leading-relaxed">
            Built for Nigeria. Powered by AI. Designed for everyone. Jara is the intelligence behind African commerce.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {WHY_JARA_PILLARS.map((pillar, idx) => {
            const Icon = getIcon(pillar.icon);

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-white border border-[#0A4A4A]/5 rounded-xl p-8 shadow-sm hover:shadow-md hover:border-[#D4A747]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#0A4A4A] text-[#D4A747] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#8BA888]">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif-title text-2xl font-bold text-[#0A4A4A] mb-2">
                    {pillar.title}
                  </h3>

                  <div className="text-sm font-semibold text-[#C77D4A] mb-3">
                    {pillar.headline}
                  </div>

                  <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0A4A4A]/10 flex flex-wrap gap-2">
                  {pillar.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="text-xs bg-white text-[#0A4A4A] font-semibold px-3 py-1 rounded-md border border-[#0A4A4A]/10 shadow-xs"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Meaning of 'Jara' in Nigerian Culture Callout */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0A4A4A] to-[#073535] p-8 text-[#FDF8F0] shadow-xl border border-[#D4A747]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2">
              <span className="font-serif-title text-2xl font-bold text-[#D4A747]">The Spirit of "Jara"</span>
              <span className="text-xs bg-[#D4A747]/20 text-[#D4A747] px-2.5 py-0.5 rounded-full font-medium">Nigerian Heritage</span>
            </div>
            <p className="text-sm text-[#FDF8F0]/85 max-w-2xl leading-relaxed">
              In Nigerian trade culture, <em>"Jara"</em> means that extra value, top-up, or bonus a trusted merchant adds to your purchase. We built our platform to bring that very same extra value, transparency, and bonus savings to every single procurement transaction in Africa.
            </p>
          </div>

          <button
            onClick={onOpenWaitlist}
            className="shrink-0 bg-[#D4A747] hover:bg-[#E5B858] text-[#0A4A4A] font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Claim Your Early Value</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
