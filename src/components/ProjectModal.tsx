import React from 'react';
import { ProjectItem } from '../data/interiorData';
import { ArchitecturalImage } from './ArchitecturalImage';
import { X, MapPin, Calendar, Layers, Sparkles, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquireProject: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquireProject
}) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white border border-[#B59A70] max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl">
        
        {/* Header */}
        <div className="p-6 bg-[#F4F0E9] border-b border-[#E8E1D6] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#B59A70] font-medium mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{project.location}</span>
              <span aria-hidden="true">·</span>
              <span>{project.area}</span>
              <span aria-hidden="true">·</span>
              <Calendar className="w-3.5 h-3.5 ml-1" />
              <span>Completed {project.completionYear}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#1C1A18] font-normal">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#1C1A18] hover:text-[#B59A70] cursor-pointer bg-white border border-[#E8E1D6] shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 lg:p-8 space-y-8">
          
          {/* Main Showcase Image */}
          <div className="border border-[#E8E1D6] p-1 bg-[#F4F0E9]">
            <ArchitecturalImage
              src={project.imageUrl}
              alt={project.title}
              aspectRatio="16/9"
              caption={`${project.title} · ${project.location}`}
            />
          </div>

          {/* Additional Gallery Strip (if any) */}
          {project.additionalImages && project.additionalImages.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {project.additionalImages.map((imgUrl, i) => (
                <div key={i} className="border border-[#E8E1D6] p-1 bg-[#F4F0E9]">
                  <ArchitecturalImage
                    src={imgUrl}
                    alt={`${project.title} detail ${i + 1}`}
                    aspectRatio="4/3"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Client Brief & Context */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-[#E8E1D6]">
            <div className="md:col-span-4">
              <h4 className="text-xs uppercase tracking-widest text-[#B59A70] font-semibold mb-2">
                The Client Brief
              </h4>
              <p className="text-xs sm:text-sm text-[#1C1A18]/80 font-sans leading-relaxed">
                {project.clientBrief}
              </p>
            </div>

            <div className="md:col-span-8">
              <h4 className="text-xs uppercase tracking-widest text-[#B59A70] font-semibold mb-2">
                Architectural Highlights
              </h4>
              <div className="space-y-2">
                {project.designHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1C1A18]">
                    <Sparkles className="w-3.5 h-3.5 text-[#B59A70] mt-1 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Materials & Palette */}
          <div className="p-6 bg-[#F4F0E9] border border-[#E8E1D6]">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#1C1A18] font-semibold mb-3">
              <Layers className="w-4 h-4 text-[#B59A70]" />
              <span>Curated Materials & Finishes</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-[#1C1A18]/80">
              {project.materialsPalette.map((mat, i) => (
                <div key={i} className="bg-white p-3 border border-[#E8E1D6] text-center font-medium">
                  {mat}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 bg-[#F4F0E9] border-t border-[#E8E1D6] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 bg-transparent border border-[#1C1A18]/30 text-[#1C1A18] text-xs uppercase tracking-widest cursor-pointer"
          >
            Back to Portfolio
          </button>

          <button
            onClick={() => {
              onClose();
              onInquireProject(project.title);
            }}
            className="w-full sm:w-auto px-7 py-3 bg-[#1C1A18] hover:bg-[#B59A70] text-[#F4F0E9] text-xs uppercase tracking-widest font-medium cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Inquire About Similar Commission</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
