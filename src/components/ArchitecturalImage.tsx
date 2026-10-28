import React, { useState } from 'react';

interface ArchitecturalImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4' | 'auto';
  caption?: string;
}

/**
 * ArchitecturalImage component enforcing the Zero-Broken-Image Policy.
 * If external image fails or is blocked, renders an elegant luxury architectural
 * fallback with subtle geometric gold framing and title.
 */
export const ArchitecturalImage: React.FC<ArchitecturalImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'auto',
  caption
}) => {
  const [hasError, setHasError] = useState(false);

  const aspectClass =
    aspectRatio === '16/9'
      ? 'aspect-[16/9]'
      : aspectRatio === '4/3'
      ? 'aspect-[4/3]'
      : aspectRatio === '1/1'
      ? 'aspect-square'
      : aspectRatio === '3/4'
      ? 'aspect-[3/4]'
      : '';

  if (hasError) {
    return (
      <div
        className={`relative overflow-hidden bg-[#E8E1D6] border border-[#B59A70]/30 flex flex-col items-center justify-center p-6 text-center select-none ${aspectClass} ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-2 border border-[#B59A70]/20 pointer-events-none" />
        <svg
          className="w-10 h-10 text-[#B59A70] mb-3 opacity-80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21h18" />
          <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
          <path d="M9 9h6" />
          <path d="M9 13h6" />
          <path d="M9 17h6" />
        </svg>
        <span className="font-serif text-[#1C1A18] text-base font-medium tracking-wide">
          {alt}
        </span>
        <span className="text-[11px] uppercase tracking-widest text-[#B59A70] mt-1">
          LivMore Luxury Architectural Studio
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#E8E1D6] ${aspectClass} ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className="w-full h-full object-cover block"
        loading="lazy"
      />
      {caption && (
        <span className="absolute bottom-2 left-2 right-2 bg-[#1C1A18]/80 text-[#F4F0E9] text-[11px] px-2.5 py-1 tracking-wide font-sans">
          {caption}
        </span>
      )}
    </div>
  );
};
