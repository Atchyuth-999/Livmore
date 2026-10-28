import React from 'react';
import { PROCESS_STEPS } from '../data/interiorData';

export const DesignProcess: React.FC = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-[#F4F0E9] border-b border-[#E8E1D6]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B59A70] font-medium block mb-2">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1A18] font-normal tracking-tight">
              Our 4-Stage Design & Execution Process
            </h2>
          </div>
          <p className="text-sm text-[#1C1A18]/70 max-w-md font-sans">
            A linear, stress-free architectural journey from initial spatial conceptualization to final key handover.
          </p>
        </div>

        {/* 4 Steps Simple Numbered Layout (Static, No Animated Timeline) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white border border-[#E8E1D6] p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#E8E1D6] pb-4 mb-5">
                  <span className="font-serif text-3xl font-light text-[#B59A70]">
                    {step.step}
                  </span>
                  <span className="text-xs font-medium text-[#1C1A18]/60 bg-[#F4F0E9] px-2.5 py-1">
                    {step.duration}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-[#1C1A18] font-medium mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#1C1A18]/70 font-sans leading-relaxed">
                  {step.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8E1D6]/60 text-[11px] uppercase tracking-widest text-[#B59A70] font-medium">
                Stage {step.step} Milestone
              </div>
            </div>
          ))}
        </div>

        {/* Studio Consultation Banner */}
        <div className="mt-12 p-8 bg-[#1C1A18] text-[#F4F0E9] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B59A70] font-medium block mb-1">
              Begin Stage 01
            </span>
            <h4 className="font-serif text-2xl lg:text-3xl font-normal">
              Schedule Your Private Studio Briefing
            </h4>
            <p className="text-xs sm:text-sm text-[#F4F0E9]/70 font-sans mt-1">
              Meet our Principal Architects in Worli, Indiranagar, or Jubilee Hills to review your residence blueprints.
            </p>
          </div>

          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView();
            }}
            className="px-8 py-3.5 bg-[#B59A70] hover:bg-[#987E56] text-[#FFFFFF] text-xs uppercase tracking-widest font-medium border border-[#B59A70] cursor-pointer whitespace-nowrap shrink-0"
          >
            Book In-Studio Briefing
          </button>
        </div>

      </div>
    </section>
  );
};
