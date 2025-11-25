"use client";

import { useState, useEffect } from 'react';

interface NavigationLinkProps {
  href: string;
  label: string;
  isActive: boolean;
}

export default function NavigationLink({ href, label, isActive }: NavigationLinkProps) {
  const [supportsHover, setSupportsHover] = useState(false);

  // Detect if device supports hover (not touch)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSupportsHover(window.matchMedia('(hover: hover)').matches);
    }
  }, []);

  return (
    <a 
      href={href}
      className={`text-body no-underline transition-colors py-3 ${
        isActive 
          ? 'text-white' 
          : 'text-muted'
      }`}
      style={{ 
        fontFamily: 'var(--font-aeonik-regular), sans-serif',
        '--hover-color': 'var(--color-primary-hover)' 
      } as React.CSSProperties}
      onMouseEnter={(e) => {
        if (supportsHover) {
        e.currentTarget.style.color = 'var(--color-primary-hover)';
        }
      }}
      onMouseLeave={(e) => {
        if (supportsHover) {
        e.currentTarget.style.color = isActive ? 'var(--color-text-white)' : '#AEAEAE';
        }
      }}
      onTouchStart={() => {
        // Prevent hover on touch
      }}
    >
      {label}
    </a>
  );
}

