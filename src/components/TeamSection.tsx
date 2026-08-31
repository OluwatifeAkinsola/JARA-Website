import React from 'react';
import { motion } from 'motion/react';
import { Users, Award, Shield, Linkedin, Sparkles } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/content';

export const TeamSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FDF8F0] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#D4A747]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A4A4A]/10 border border-[#0A4A4A]/20 text-[#0A4A4A] text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-[#D4A747]" />
            Founding Team & Vision
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A4A4A] tracking-tight">
            The Minds Behind Jara
          </h2>

          <p className="text-base sm:text-lg text-[#2C2C2C]/80 leading-relaxed">
            We are African technologists, supply chain practitioners, and AI researchers on a unified mission: eliminating friction and corruption from the $400B African procurement ecosystem.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-[#0A4A4A]/5 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#D4A747]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Avatar with Gradient */}
                <div className={`w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-tr ${member.avatarColor} flex items-center justify-center text-white shadow-md`}>
                  <span className="font-serif font-bold text-2xl tracking-wider">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                <div className="text-center mb-4">
                  <h3 className="font-serif-title text-lg font-bold text-[#0A4A4A]">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-[#C77D4A] mt-0.5">
                    {member.role}
                  </p>
                </div>

                <p className="text-xs text-[#2C2C2C]/80 leading-relaxed text-center mb-4">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-[#0A4A4A]/10 text-center">
                <span className="text-[10px] font-semibold text-[#8BA888] block">
                  {member.background}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement Box */}
        <div className="bg-[#0A4A4A] rounded-3xl p-8 sm:p-10 text-[#FDF8F0] shadow-xl border border-[#D4A747]/30 text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4A747]">
            <Award className="w-4 h-4" />
            Our Guiding Commitment
          </div>
          <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#FDF8F0]">
            "Building Technology That Reflects African Realities."
          </h3>
          <p className="text-sm sm:text-base text-[#FDF8F0]/85 leading-relaxed max-w-2xl mx-auto">
            We reject the idea that African businesses must adapt to rigid Western desktop workflows. By meeting merchants right inside WhatsApp and empowering procurement leaders with cutting-edge intelligence, we unlock unprecedented economic value for the continent.
          </p>
        </div>

      </div>
    </section>
  );
};
