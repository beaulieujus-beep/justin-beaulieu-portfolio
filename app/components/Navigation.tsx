"use client";

import Image from "next/image";
import { useState, useEffect } from 'react';
import NavigationLink from './NavigationLink';
import { MenuButton } from './MenuButton';
import MobileMenu from './MobileMenu';

interface NavigationProps {
  activePage?: 'work' | 'about' | 'contact';
  fadeIn?: boolean;
}

export default function Navigation({ activePage, fadeIn = false }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [supportsHover, setSupportsHover] = useState(false);

  // Detect if device supports hover (not touch)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSupportsHover(window.matchMedia('(hover: hover)').matches);
    }
  }, []);

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 backdrop-blur-md z-50 px-5 md:px-8" 
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          opacity: fadeIn ? '1' : '0',
          transform: fadeIn ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1)',
          willChange: fadeIn ? 'auto' : 'opacity, transform',
        }}
      >
        <div className="max-w-6xl mx-auto py-4">
          <div className="flex items-center justify-between relative">
            {/* Logo - Left */}
            <div className="flex items-center">
              <a href="/" className="cursor-pointer group relative block">
                <Image
                  src="/justin-beaulieu-logo-full.svg"
                  alt="Justin Beaulieu Logo"
                  width={144}
                  height={36}
                  className="h-9 w-auto transition-all duration-150"
                  style={{ filter: 'brightness(0.6)', width: 'auto' }}
                  onMouseEnter={(e) => {
                    if (supportsHover) {
                    e.currentTarget.style.filter = 'brightness(1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (supportsHover) {
                    e.currentTarget.style.filter = 'brightness(0.6)';
                    }
                  }}
                  onTouchStart={() => {
                    // Prevent hover on touch
                  }}
                  priority
                />
              </a>
            </div>
            
            {/* Right Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <NavigationLink href="/" label="Work" isActive={activePage === 'work'} />
              <NavigationLink href="/about" label="About" isActive={activePage === 'about'} />
              <NavigationLink href="/contact" label="Contact" isActive={activePage === 'contact'} />
            </div>
            
            {/* Hamburger Menu - Mobile */}
            <div className="md:hidden">
              <MenuButton 
                isOpen={isMenuOpen}
                onToggle={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activePage={activePage}
      />
    </>
  );
}
