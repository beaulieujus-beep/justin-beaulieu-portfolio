"use client";

import Image from "next/image";
import { useState, useEffect } from 'react';
import { ButtonFrosted } from './ButtonFrosted';

interface CaseStudyImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

function CaseStudyImage({ src, alt, priority = false }: CaseStudyImageProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [supportsHover, setSupportsHover] = useState(false);

  // Detect if device supports hover (not touch)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSupportsHover(window.matchMedia('(hover: hover)').matches);
    }
  }, []);

  // Generate mobile and desktop image sources for case studies
  // Check if the image follows the case-study-hero naming pattern and doesn't already have a variant suffix
  let mobileSrc = src;
  let desktopSrc = src;
  
  if (src.includes('-case-study-hero') && !src.match(/-case-study-hero-[0-9]+x[0-9]+/)) {
    mobileSrc = src.replace('-case-study-hero', '-case-study-hero-5x4');
    desktopSrc = src.replace('-case-study-hero', '-case-study-hero-2x1');
  }

  return (
    <div
      className="aspect-[5/4] md:aspect-[2/1] rounded-md overflow-hidden relative block case-study-image-area"
      style={{ backgroundColor: '#1A1A1A' }}
      onMouseEnter={() => {
        if (supportsHover) setIsHovering(true);
      }}
      onMouseLeave={() => { 
        setIsHovering(false); 
        setIsPressed(false); 
      }}
      onMouseMove={(e) => {
        if (supportsHover) {
          const rect = e.currentTarget.getBoundingClientRect();
          setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }
      }}
      onMouseDown={() => {
        if (supportsHover) setIsPressed(true);
      }}
      onMouseUp={() => setIsPressed(false)}
      onTouchStart={() => {
        // Disable hover on touch devices
        setIsHovering(false);
      }}
    >
      {/* Mobile Image */}
      <Image
        src={mobileSrc}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        className="object-cover md:hidden transition-transform duration-300 ease-in-out"
        style={{ pointerEvents: 'none' }}
      />
      {/* Desktop Image */}
      <Image
        src={desktopSrc}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        className="hidden md:block object-cover md:group-hover:scale-103 transition-transform duration-300 ease-in-out"
        style={{ pointerEvents: 'none' }}
      />

      {isHovering && (
        <div
          className="pointer-events-none absolute"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
            transform: 'translate(-50%, -50%)',
            cursor: 'none',
          }}
        >
          <ButtonFrosted isPressed={isPressed} style={{ cursor: 'none' }}>
            <span className="whitespace-nowrap">Case Study</span>
            <svg width="22" height="22" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </ButtonFrosted>
        </div>
      )}
    </div>
  );
}

interface CaseStudyCardProps {
  href: string;
  eyebrows: string[];
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  priority?: boolean;
}

export default function CaseStudyCard({
  href,
  eyebrows,
  title,
  description,
  imageSrc,
  imageAlt,
  priority = false,
}: CaseStudyCardProps) {
  return (
    <a href={href} className="grid grid-cols-1 gap-5 group block" style={{ cursor: 'default' }}>
      {/* Text Content Above Card */}
      <div>
        {/* Case Study Labels */}
        <div className="flex items-center gap-1 mb-1">
          {eyebrows.map((eyebrow, index) => (
            <span key={index} className="text-eyebrow">{eyebrow}</span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-body-bold text-white mb-1">
          <span className="inline">{title}</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all translate-x-0 translate-y-0 md:translate-x-[-6px] md:translate-y-[6px] md:group-hover:translate-x-0 md:group-hover:translate-y-0 inline-block align-middle ml-1 flex-shrink-0">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </h2>

        {/* Description */}
        <p className="text-body max-w-2xl text-muted line-clamp-2">
          {description}
        </p>
      </div>

      {/* Image Card */}
      <CaseStudyImage src={imageSrc} alt={imageAlt} priority={priority} />
    </a>
  );
}

