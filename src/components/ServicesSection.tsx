import React from 'react';
import { SERVICES, ServiceItem } from '../data/interiorData';
import { ArchitecturalImage } from './ArchitecturalImage';
import { ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookService
}) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E8E1D6]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B59A70] font-medium block mb-2">
              Our Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1A18] font-normal tracking-tight">
              Architectural & Interior Services
            </h2>
          </div>
          <p className="text-sm text-[#1C1A18]/70 max-w-md font-sans">
            Every service is executed with rigorous structural precision, bespoke fabrication, and European material standards.
          </p>
        </div>

        {/* Clean Consistent Static Grid (4 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-[#F4F0E9] border border-[#E8E1D6] flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="p-3 bg-white border-b border-[#E8E1D6]">
                <ArchitecturalImage
                  src={service.imageUrl}
                  alt={service.title}
                  aspectRatio="4/3"
                />
              </div>

              {/* Text Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#B59A70] font-medium uppercase tracking-wider mb-2">
                    <span>{`0${index + 1}`}</span>
                    <span className="text-[#1C1A18]/50">{service.tag}</span>
                  </div>

                  <h3 className="text-xl font-serif text-[#1C1A18] font-medium mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#1C1A18]/70 leading-relaxed font-sans line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Static Action Buttons */}
                <div className="pt-6 mt-6 border-t border-[#E8E1D6] flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1.5 text-xs text-[#1C1A18] font-medium hover:text-[#B59A70] cursor-pointer bg-transparent border-0 p-0"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#B59A70]" />
                  </button>

                  <button
                    onClick={() => onBookService(service.title)}
                    className="text-[11px] uppercase tracking-wider text-[#B59A70] hover:text-[#1C1A18] font-semibold cursor-pointer bg-transparent border-0 p-0"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
