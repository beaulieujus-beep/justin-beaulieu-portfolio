"use client";

import { useState, useEffect, ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Double RAF for smoother animation start, then small delay to ensure transition is ready
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          setIsVisible(true);
        }, 10);
      });
    });

    // Cleanup willChange after animation completes
    const timer = setTimeout(() => {
      const element = document.getElementById('page-transition-wrapper');
      if (element) {
        element.style.willChange = 'auto';
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      id="page-transition-wrapper"
      style={{
        opacity: isVisible ? '1' : '0',
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}

