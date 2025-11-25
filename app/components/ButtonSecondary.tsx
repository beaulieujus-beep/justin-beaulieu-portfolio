"use client";

import { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const ButtonSecondary = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className="btn-secondary bg-transparent md:hover:bg-[#242424] text-[#959595] md:hover:text-white px-6 pt-3 pb-4 rounded-md border border-[#383838] md:hover:border-transparent text-body flex items-center gap-2 justify-center"
        {...props}
      >
        {children}
      </button>
    );
  }
);

ButtonSecondary.displayName = 'ButtonSecondary';

