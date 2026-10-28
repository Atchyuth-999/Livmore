import React, { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Our Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView();
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F4F0E9] border-b border-[#E8E1D6]">
      {/* Top Bar Contract: Exactly 3 zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="flex items-center gap-2 text-2xl lg:text-3xl font-serif font-semibold tracking-wider text-[#1C1A18] whitespace-nowrap shrink-0 uppercase"
        >
          <span>LivMore Luxury</span>
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-[#1C1A18]/80">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="hover:text-[#B59A70] whitespace-nowrap shrink-0 cursor-pointer bg-transparent border-0 p-0 text-sm font-medium tracking-wide text-[#1C1A18]/80 text-left"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href="tel:+912249108800"
            className="hidden xl:flex items-center gap-2 text-xs tracking-wider text-[#1C1A18]/70 hover:text-[#B59A70]"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#B59A70]" />
            <span>+91 9133933179</span>
          </a>
          <button
            onClick={onBookClick}
            className="px-5 py-2.5 bg-[#1C1A18] hover:bg-[#B59A70] text-[#F4F0E9] text-xs uppercase tracking-widest font-medium whitespace-nowrap shrink-0 border border-[#1C1A18] cursor-pointer"
          >
            Book a Consultation
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1C1A18] border border-[#E8E1D6] bg-white cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel - Completely Static / Instant Display */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F4F0E9] border-b border-[#E8E1D6] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-base font-serif text-[#1C1A18] hover:text-[#B59A70] py-1 border-b border-[#E8E1D6]/60 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3 bg-[#1C1A18] text-[#F4F0E9] text-xs uppercase tracking-widest font-medium border border-[#1C1A18] cursor-pointer text-center"
            >
              Book a Consultation
            </button>
          </div>

          <div className="pt-2 text-center text-xs text-[#1C1A18]/60">
            Direct Concierge: +91 9133933179
          </div>
        </div>
      )}
    </header>
  );
};
