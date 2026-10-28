import React from 'react';
import { SERVICES } from '../data/interiorData';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onBookClick
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <footer className="bg-[#1C1A18] text-[#F4F0E9] border-t border-[#B59A70]/30">
      {/* Upper Footer Block */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-2xl lg:text-3xl font-serif uppercase tracking-wider font-semibold text-[#F4F0E9]">
              LivMore Luxury
            </h3>

            <p className="text-xs sm:text-sm text-[#F4F0E9]/70 font-sans leading-relaxed">
              Bespoke interior architecture, turnkey residences, and timeless living spaces tailored to high-net-worth homeowners across India’s premier metropolitan centers.
            </p>

            <div className="space-y-2 text-xs text-[#F4F0E9]/80 pt-2 border-t border-white/10">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B59A70]" />
                <span>Jubilee Hills, Hyderabad</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B59A70]" />
                <a href="tel:+919133933179" className="hover:text-[#B59A70]">
                  +91 9133933179
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B59A70]" />
                <a href="mailto:Services@livmoreluxury.com" className="hover:text-[#B59A70]">
                  Services@livmoreluxury.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="px-6 py-3 bg-[#B59A70] hover:bg-[#987E56] text-[#FFFFFF] text-xs uppercase tracking-widest font-medium cursor-pointer"
              >
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#B59A70] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F4F0E9]/75 font-sans">
              <li>
                <a href="#" className="hover:text-[#B59A70]">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#B59A70]">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B59A70]">Our Services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#B59A70]">Featured Projects</a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#B59A70]">Design Process</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#B59A70]">Contact & Booking</a>
              </li>
            </ul>
          </div>

          {/* Services Disciplines (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#B59A70] font-semibold">
              Architectural Services
            </h4>
            <ul className="space-y-2 text-xs text-[#F4F0E9]/75 font-sans">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-[#B59A70] block truncate">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Hubs & Discretion (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#B59A70] font-semibold">
              Studios & Presence
            </h4>
            <p className="text-xs text-[#F4F0E9]/70 font-sans leading-relaxed">
              We operate dedicated architectural studios and on-site engineering supervision in:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#F4F0E9]/90 font-medium">
              <span>· Mumbai</span>
              <span>· Bengaluru</span>
              <span>· Delhi NCR</span>
              <span>· Hyderabad</span>
              <span>· Chennai</span>
              <span>· Pune</span>
              <span>· Kolkata</span>
              <span>· Goa Estates</span>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-[11px] text-[#B59A70] uppercase tracking-wider block font-medium mb-1">
                Discretion & NDA Standard
              </span>
              <p className="text-[11px] text-[#F4F0E9]/60 leading-normal">
                All client residences and architectural drawings are protected by binding confidentiality agreements.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F4F0E9]/60">
          <div>
            © {new Date().getFullYear()} LivMore Luxury Interior Architecture LLP. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#F4F0E9] underline-offset-4 hover:underline cursor-pointer bg-transparent border-0 p-0 text-xs text-[#F4F0E9]/60"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#F4F0E9] underline-offset-4 hover:underline cursor-pointer bg-transparent border-0 p-0 text-xs text-[#F4F0E9]/60"
            >
              Terms & Conditions
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#B59A70] cursor-pointer bg-transparent border-0 p-0 text-xs text-[#F4F0E9]/60"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
