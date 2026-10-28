import React, { useState } from 'react';
import { PROJECTS, ProjectItem } from '../data/interiorData';
import { ArchitecturalImage } from './ArchitecturalImage';
import { MapPin, Maximize2, ArrowRight } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Apartments', 'Villas', 'Living Rooms', 'Kitchens', 'Bedrooms', 'Turnkey'];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#F4F0E9] border-b border-[#E8E1D6]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B59A70] font-medium block mb-2">
              Curated Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1A18] font-normal tracking-tight">
              Featured Residential Commissions
            </h2>
          </div>

          <p className="text-sm text-[#1C1A18]/70 max-w-md font-sans">
            A selection of private residences designed and delivered across premier enclaves in Mumbai, Bengaluru, Hyderabad, and Gurugram.
          </p>
        </div>

        {/* Clean Interactive Category Filter (Segmented Buttons - Zero Pills) */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[#E8E1D6]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium border cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#1C1A18] text-[#F4F0E9] border-[#1C1A18]'
                  : 'bg-white text-[#1C1A18]/70 border-[#E8E1D6] hover:border-[#1C1A18]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial-Style Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-[#E8E1D6] p-4 flex flex-col justify-between"
            >
              <div>
                {/* Project Image with zero hover animation */}
                <div className="relative mb-5 bg-[#E8E1D6]">
                  <ArchitecturalImage
                    src={project.imageUrl}
                    alt={project.title}
                    aspectRatio="4/3"
                  />
                  <div className="absolute top-3 right-3 bg-[#1C1A18]/90 text-[#F4F0E9] text-[10px] uppercase tracking-widest px-2.5 py-1 font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Project Metadata - Zero-Pill Typography */}
                <div className="flex items-center gap-2 text-xs text-[#B59A70] mb-2 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#B59A70] shrink-0" />
                  <span>{project.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.area}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.completionYear}</span>
                </div>

                <h3 className="text-xl font-serif text-[#1C1A18] font-normal leading-snug mb-3">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#1C1A18]/70 font-sans leading-relaxed line-clamp-2 mb-4">
                  {project.summary}
                </p>
              </div>

              {/* View Project Details Button */}
              <div className="pt-4 border-t border-[#E8E1D6] flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-[#1C1A18] hover:text-[#B59A70] cursor-pointer bg-transparent border-0 p-0"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#B59A70]" />
                  <span>View Project Case Study</span>
                </button>

                <ArrowRight className="w-4 h-4 text-[#B59A70]" />
              </div>
            </div>
          ))}
        </div>

        {/* Note on Discretion & Private Viewing */}
        <div className="mt-14 p-6 bg-white border border-[#E8E1D6] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg text-[#1C1A18] font-medium">
              Private Portfolio & NDA Protected Residences
            </h4>
            <p className="text-xs sm:text-sm text-[#1C1A18]/70 font-sans mt-0.5">
              Due to homeowner confidentiality agreements, our complete monograph of 120+ residences is presented exclusively during studio consultations.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView();
            }}
            className="px-5 py-2.5 bg-[#F4F0E9] hover:bg-[#E8E1D6] text-[#1C1A18] text-xs uppercase tracking-widest font-medium border border-[#1C1A18]/20 whitespace-nowrap cursor-pointer shrink-0"
          >
            Request Private Monograph
          </button>
        </div>

      </div>
    </section>
  );
};
