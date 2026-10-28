import React from 'react';
import { ArchitecturalImage } from './ArchitecturalImage';
import { Check } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F4F0E9] border-b border-[#E8E1D6]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B59A70] font-medium block mb-2">
            The Philosophy of LivMore Luxury
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1A18] font-normal tracking-tight">
            Crafting Personalized, Functional & Sophisticated Living Spaces
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Photograph Column (6 cols) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative border border-[#E8E1D6] p-2 bg-white">
              <ArchitecturalImage
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                alt="Bespoke Italian joinery and architectural textures at LivMore Luxury"
                aspectRatio="4/3"
                caption="Studio Material Library & Joinery Detail · Mumbai Headquarters"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-[#1C1A18]/60 border-t border-[#E8E1D6] pt-3">
              <span>Architectural Joinery & Stone Detailing</span>
              <span className="font-serif italic">Curated in Italy · Crafted in India</span>
            </div>
          </div>

          {/* Text Content Column (6 cols) */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 text-[#1C1A18]">
            <p className="text-lg font-serif text-[#1C1A18]/90 leading-relaxed italic border-l-2 border-[#B59A70] pl-4">
              “True luxury is not about ornamentation; it is the quiet confidence of proportional harmony, tactile natural materials, and an effortless daily rhythm.”
            </p>

            <p className="text-sm sm:text-base text-[#1C1A18]/75 leading-relaxed font-sans">
              Founded to serve India’s most discerning homeowners, <strong>LivMore Luxury</strong> bridges international architectural rigor with the nuanced domestic requirements of contemporary Indian living. From high-rise sea-facing penthouses in Worli to expansive heritage estates in Hyderabad and golf villas in Gurugram, we create spaces that resonate with intimacy, warmth, and enduring grace.
            </p>

            <p className="text-sm sm:text-base text-[#1C1A18]/75 leading-relaxed font-sans">
              Our studio operates with an integrated team of senior architects, MEP specialists, master joiners, and interior stylists. By retaining complete in-house control over spatial schematics, material procurement, and civil engineering, we deliver flawless turnkey executions backed by rigorous milestone schedules and transparent commercial contracts.
            </p>

            {/* Core Commitments */}
            <div className="pt-4 border-t border-[#E8E1D6] grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#B59A70] mt-0.5 shrink-0" />
                <span className="text-xs font-medium text-[#1C1A18]">Bespoke tailored design charters</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#B59A70] mt-0.5 shrink-0" />
                <span className="text-xs font-medium text-[#1C1A18]">Ethically sourced natural marbles</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#B59A70] mt-0.5 shrink-0" />
                <span className="text-xs font-medium text-[#1C1A18]">Integrated circadian lighting</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#B59A70] mt-0.5 shrink-0" />
                <span className="text-xs font-medium text-[#1C1A18]">Single-point turnkey accountability</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
