import React from 'react';
import { TESTIMONIALS } from '../data/interiorData';
import { Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E8E1D6]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B59A70] font-medium block mb-2">
              Client Perspectives
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1A18] font-normal tracking-tight">
              Testimonials from Premier Residences
            </h2>
          </div>

          <div className="text-xs text-[#1C1A18]/60 max-w-sm">
            <span className="font-medium text-[#1C1A18] block mb-0.5">Verified Client Experiences</span>
            Architectural case studies across private luxury residences in Mumbai, Hyderabad, and Gurugram.
          </div>
        </div>

        {/* Clean Static 3-Column Testimonial Layout (No Auto-Sliding / No Moving Carousel) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 bg-[#F4F0E9] border border-[#E8E1D6] flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#B59A70] mb-6 opacity-60" />
                <p className="font-serif text-base sm:text-lg text-[#1C1A18]/90 italic leading-relaxed mb-8">
                  “{t.quote}”
                </p>
              </div>

              <div className="pt-6 border-t border-[#E8E1D6]">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-serif font-semibold text-[#1C1A18] text-base">
                    {t.clientName}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-[#B59A70] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{t.verificationBadge}</span>
                  </div>
                </div>

                <div className="text-xs text-[#1C1A18]/60 space-y-0.5">
                  <p>{t.residence} · {t.city}</p>
                  <p className="text-[#B59A70] font-medium">{t.projectType}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
