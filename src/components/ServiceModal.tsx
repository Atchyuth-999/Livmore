import React from 'react';
import { ServiceItem } from '../data/interiorData';
import { ArchitecturalImage } from './ArchitecturalImage';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (title: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onBookService
}) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white border border-[#B59A70] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        
        {/* Header */}
        <div className="p-6 bg-[#F4F0E9] border-b border-[#E8E1D6] flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#B59A70] font-semibold block">
              Architectural Discipline · {service.tag}
            </span>
            <h3 className="text-2xl font-serif text-[#1C1A18] font-normal">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#1C1A18] hover:text-[#B59A70] cursor-pointer bg-white border border-[#E8E1D6]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8 space-y-6">
          <div className="border border-[#E8E1D6] p-1 bg-[#F4F0E9]">
            <ArchitecturalImage
              src={service.imageUrl}
              alt={service.title}
              aspectRatio="16/9"
            />
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#1C1A18]/60 font-semibold mb-2">
              Scope of Architectural Engagement
            </h4>
            <p className="text-sm sm:text-base text-[#1C1A18]/80 font-sans leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#1C1A18]/60 font-semibold mb-3">
              Included Deliverables & Engineering Specifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1C1A18] bg-[#F4F0E9]/60 p-3 border border-[#E8E1D6]">
                  <CheckCircle2 className="w-4 h-4 text-[#B59A70] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-[#F4F0E9] border-t border-[#E8E1D6] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 bg-transparent border border-[#1C1A18]/30 text-[#1C1A18] text-xs uppercase tracking-widest cursor-pointer"
          >
            Close Overview
          </button>

          <button
            onClick={() => {
              onClose();
              onBookService(service.title);
            }}
            className="w-full sm:w-auto px-7 py-3 bg-[#1C1A18] hover:bg-[#B59A70] text-[#F4F0E9] text-xs uppercase tracking-widest font-medium cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Inquire About {service.title}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
