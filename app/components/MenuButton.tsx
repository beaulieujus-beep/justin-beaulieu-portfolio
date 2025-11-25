"use client";

import { forwardRef } from 'react';

interface MenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  onToggle: () => void;
}

export const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(
  ({ isOpen, onToggle, ...props }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onToggle}
        className={`flex items-center justify-center px-4 py-4 rounded-md bg-transparent transition-all duration-300 ease-out md:hover:scale-104 active:scale-100 md:hover:bg-[#242424] ${
          isOpen
            ? 'text-white md:hover:text-white'
            : 'text-[#AEAEAE] md:hover:text-white'
        }`}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        {...props}
      >
        {isOpen ? (
          // X/Close Icon
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          // Hamburger Menu Icon
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    );
  }
);

MenuButton.displayName = 'MenuButton';

