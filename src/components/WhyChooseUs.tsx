import React from 'react';
import { WHY_CHOOSE_US } from '../data/interiorData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E8E1D6]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B59A70] font-medium block mb-2">
            The LivMore Distinction
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1A18] font-normal tracking-tight">
            Why Discerning Homeowners Choose LivMore Luxury
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#1C1A18]/70 font-sans leading-relaxed">
            Our architectural practice operates on uncompromising standards of structural integrity, aesthetic discipline, and commercial clarity.
          </p>
        </div>

        {/* 6 Pillars Clean Editorial Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.number}
              className="p-8 bg-[#F4F0E9] border border-[#E8E1D6] flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl font-light text-[#B59A70] block mb-4">
                  {item.number}
                </span>
                <h3 className="font-serif text-xl text-[#1C1A18] font-medium mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#1C1A18]/75 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8E1D6] text-[11px] uppercase tracking-wider text-[#1C1A18]/50">
                Studio Standard
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
