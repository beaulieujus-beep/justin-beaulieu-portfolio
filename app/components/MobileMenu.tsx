"use client";

import { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activePage?: 'work' | 'about' | 'contact';
}

export default function MobileMenu({ isOpen, onClose, activePage }: MobileMenuProps) {
  // Prevent body scroll when menu is open and prevent content shift
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  // Close menu when screen size expands to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        onClose();
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black z-40 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
        style={{
          transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          backgroundColor: 'var(--background)',
          paddingTop: '160px',
          transition: 'transform 600ms cubic-bezier(0.4, 0, 0.2, 1)',
          willChange: 'transform',
        }}
      >
        <div className="flex flex-col h-full px-5">
          {/* Navigation Links */}
          <nav className="flex flex-col gap-8" style={{ marginTop: '-32px' }}>
            <a
              href="/"
              onClick={onClose}
              className={`text-h1 no-underline transition-colors ${
                activePage === 'work'
                  ? 'text-white hover:text-[#C2FF57]'
                  : 'text-[#AEAEAE] hover:text-[#C2FF57]'
              }`}
            >
              Work
            </a>
            <a
              href="/about"
              onClick={onClose}
              className={`text-h1 no-underline transition-colors ${
                activePage === 'about'
                  ? 'text-white hover:text-[#C2FF57]'
                  : 'text-[#AEAEAE] hover:text-[#C2FF57]'
              }`}
            >
              About
            </a>
            <a
              href="/contact"
              onClick={onClose}
              className={`text-h1 no-underline transition-colors ${
                activePage === 'contact'
                  ? 'text-white hover:text-[#C2FF57]'
                  : 'text-[#AEAEAE] hover:text-[#C2FF57]'
              }`}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

