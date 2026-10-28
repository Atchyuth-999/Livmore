import React from 'react';
import { ArchitecturalImage } from './ArchitecturalImage';
import { ShieldCheck, Compass, Award, Clock } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onBookConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onBookConsultation }) => {
  return (
    <section className="relative bg-[#F4F0E9] border-b border-[#E8E1D6]">
      {/* Side-by-Side Architectural Hero Layout */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Column (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B59A70] font-medium block">
                Bespoke Residential Architecture · India
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif leading-[1.12] text-[#1C1A18] font-normal tracking-tight">
                Spaces That Reflect Your Lifestyle.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#1C1A18]/75 font-sans leading-relaxed max-w-xl">
              Thoughtfully designed interiors that bring together timeless elegance, comfort, and functionality.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onBookConsultation}
                className="px-7 py-3.5 bg-[#1C1A18] hover:bg-[#B59A70] text-[#F4F0E9] text-xs uppercase tracking-widest font-medium border border-[#1C1A18] cursor-pointer text-center"
              >
                Book a Consultation
              </button>
              <button
                onClick={onExploreProjects}
                className="px-7 py-3.5 bg-transparent hover:bg-[#E8E1D6] text-[#1C1A18] text-xs uppercase tracking-widest font-medium border border-[#1C1A18]/30 cursor-pointer text-center"
              >
                Explore Our Projects
              </button>
            </div>

            {/* Quiet Architectural Note */}
            <div className="pt-6 border-t border-[#E8E1D6] flex items-center gap-6 text-xs text-[#1C1A18]/60">
              <div>
                <span className="font-serif font-semibold text-[#1C1A18] block text-base">₹1.5Cr+</span>
                <span>Average Project Scale</span>
              </div>
              <div className="h-8 w-px bg-[#E8E1D6]" />
              <div>
                <span className="font-serif font-semibold text-[#1C1A18] block text-base">100%</span>
                <span>Turnkey Accountability</span>
              </div>
              <div className="h-8 w-px bg-[#E8E1D6]" />
              <div>
                <span className="font-serif font-semibold text-[#1C1A18] block text-base">10-Year</span>
                <span>Structural Warranty</span>
              </div>
            </div>
          </div>

          {/* Image Column (7 cols on desktop) */}
          <div className="lg:col-span-7">
            <div className="relative border border-[#E8E1D6] p-2 bg-white shadow-sm">
              <ArchitecturalImage
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
                alt="Contemporary Luxury Living Salon by LivMore Luxury"
                aspectRatio="16/9"
                caption="Duplex Penthouse Salon · Worli, Mumbai"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
      </div>

      {/* 4-Column KPI Trust Strip placed in full-width row below hero split */}
      <div className="border-t border-[#E8E1D6] bg-[#E8E1D6]/40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Compass className="w-5 h-5 text-[#B59A70] shrink-0" />
              <div>
                <span className="text-sm font-semibold text-[#1C1A18] block">400+ Residences</span>
                <span className="text-xs text-[#1C1A18]/60">Handed over across India</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#B59A70] shrink-0" />
              <div>
                <span className="text-sm font-semibold text-[#1C1A18] block">7 Metro Studios</span>
                <span className="text-xs text-[#1C1A18]/60">Mumbai, NCR, BLR & HYD</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#B59A70] shrink-0" />
              <div>
                <span className="text-sm font-semibold text-[#1C1A18] block">10-Year Warranty</span>
                <span className="text-xs text-[#1C1A18]/60">On all modular joinery</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#B59A70] shrink-0" />
              <div>
                <span className="text-sm font-semibold text-[#1C1A18] block">Milestone Delivery</span>
                <span className="text-xs text-[#1C1A18]/60">Zero delay guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
