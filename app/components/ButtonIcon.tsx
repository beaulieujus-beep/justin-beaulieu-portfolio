"use client";

import { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className="btn-icon flex items-center justify-center gap-2 px-4.5 py-4.5 rounded-md bg-transparent md:hover:bg-[#242424] text-[#AEAEAE] md:hover:text-white text-body font-medium transition-all duration-200 ease-out"
        {...props}
      >
        {children}
      </button>
    );
  }
);

ButtonIcon.displayName = 'ButtonIcon';

