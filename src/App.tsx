/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { FeaturesSection } from './components/FeaturesSection';
import { InteractiveParserDemo } from './components/InteractiveParserDemo';
import { HowItWorks } from './components/HowItWorks';
import { SolutionsSection } from './components/SolutionsSection';
import { WhyJara } from './components/WhyJara';
import { Testimonials } from './components/Testimonials';
import { TeamSection } from './components/TeamSection';
import { WaitlistCTA } from './components/WaitlistCTA';
import { Footer } from './components/Footer';
import { WaitlistModal } from './components/WaitlistModal';

export default function App() {
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);

  const handleOpenWaitlist = () => {
    setWaitlistModalOpen(true);
  };

  const handleCloseWaitlist = () => {
    setWaitlistModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FDF8F0] text-[#2C2C2C] flex flex-col selection:bg-[#D4A747] selection:text-[#0A4A4A]">
      {/* Sticky Navigation */}
      <Navbar onOpenWaitlist={handleOpenWaitlist} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenWaitlist={handleOpenWaitlist} />

        {/* 2. Problem Statement & Reality in Nigeria */}
        <ProblemSection />

        {/* 3. Solution / Core Features with Interactive Mockups */}
        <FeaturesSection />

        {/* 4. Live AI Parser Interactive Simulator Playground */}
        <InteractiveParserDemo onOpenWaitlist={handleOpenWaitlist} />

        {/* 5. How It Works (3-Step Process) */}
        <HowItWorks />

        {/* 6. Solutions by Segment (Informal, SME, Enterprise, Government) */}
        <SolutionsSection onOpenWaitlist={handleOpenWaitlist} />

        {/* 7. Why Jara (4 Pillars) */}
        <WhyJara onOpenWaitlist={handleOpenWaitlist} />

        {/* 8. Testimonials & Social Proof */}
        <Testimonials />

        {/* 9. Founding Team & Mission */}
        <TeamSection />

        {/* 10. Call to Action / Interactive Waitlist Form */}
        <WaitlistCTA />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Modal Popup for Instant Action Anywhere */}
      <WaitlistModal isOpen={waitlistModalOpen} onClose={handleCloseWaitlist} />
    </div>
  );
}
