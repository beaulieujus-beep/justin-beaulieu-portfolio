"use client";

import { forwardRef } from 'react';

interface ButtonFrostedProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isPressed?: boolean;
  children: React.ReactNode;
  variant?: 'rectangular' | 'circular';
  className?: string;
}

export const ButtonFrosted = forwardRef<HTMLButtonElement, ButtonFrostedProps>(
  ({ isPressed = false, children, variant = 'rectangular', className = '', ...props }, ref) => {
    const baseClasses = `btn-frosted border border-white/20 ${isPressed ? 'bg-black/60' : 'bg-black/40'} backdrop-blur-sm text-white select-none transition-transform duration-200 ease-out pointer-events-auto`;
    
    if (variant === 'circular') {
      return (
        <button 
          ref={ref}
          type="button"
          className={`flex items-center justify-center w-14 h-14 rounded-full ${baseClasses} ${className}`}
          {...props}
        >
          {children}
        </button>
      );
    }
    
    return (
      <button 
        ref={ref}
        type="button"
        className={`inline-flex items-center justify-center gap-2 px-6 pt-3 pb-4 rounded-md ${baseClasses} text-body whitespace-nowrap ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ButtonFrosted.displayName = 'ButtonFrosted';

