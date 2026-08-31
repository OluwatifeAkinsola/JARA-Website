import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Quote, Star, MapPin, Building, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Enterprise' | 'Agro' | 'Retail'>('All');

  const filteredTestimonials = filter === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.sector === filter);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F5F0E8] relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8BA888]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A4A4A]/10 border border-[#0A4A4A]/20 text-[#0A4A4A] text-xs font-semibold uppercase tracking-wider">
            <Quote className="w-3.5 h-3.5 text-[#D4A747]" />
            Social Proof & Case Studies
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A4A4A] tracking-tight">
            Trusted by Those Who Know African Procurement
          </h2>

          <p className="text-base sm:text-lg text-[#2C2C2C]/80 leading-relaxed">
            Real feedback from supply chain directors, factory owners, and procurement leaders across Lagos, Kano, and Abuja.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center gap-2 mb-12">
          {(['All', 'Enterprise', 'Agro', 'Retail'] as const).map((sector) => (
            <button
              key={sector}
              onClick={() => setFilter(sector)}
              className={`text-xs px-4 py-2 rounded-full font-bold transition-all duration-200 cursor-pointer ${
                filter === sector
                  ? 'bg-[#0A4A4A] text-[#D4A747] shadow-md'
                  : 'bg-white text-[#2C2C2C]/70 hover:text-[#0A4A4A] border border-gray-200'
              }`}
            >
              {sector} {sector === 'All' ? 'Sectors' : ''}
            </button>
          ))}
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTestimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-[#0A4A4A]/5 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Sector pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#D4A747]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#0A4A4A] bg-[#0A4A4A]/10 px-2.5 py-0.5 rounded-full">
                    {t.sector} Focus
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#2C2C2C]/90 italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#0A4A4A]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full ${t.avatarBg} text-[#FDF8F0] flex items-center justify-center font-serif font-bold text-lg shadow-sm shrink-0`}>
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0A4A4A]">{t.name}</h4>
                    <p className="text-xs text-[#2C2C2C]/70">{t.role}</p>
                    <div className="flex items-center gap-2 text-[11px] text-[#8BA888] font-medium mt-0.5">
                      <span>{t.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-0.5"><MapPin className="w-3 h-3 text-[#C77D4A]" /> {t.location}</span>
                    </div>
                  </div>
                </div>

                {/* Verified Metric Badge */}
                <div className="bg-[#0A4A4A] text-[#FDF8F0] rounded-xl px-3.5 py-2 text-right self-end sm:self-auto shrink-0 shadow-sm">
                  <div className="font-serif-title font-extrabold text-[#D4A747] text-base leading-none">
                    {t.metric}
                  </div>
                  <div className="text-[10px] text-[#8BA888] font-medium mt-0.5">
                    {t.metricLabel}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
