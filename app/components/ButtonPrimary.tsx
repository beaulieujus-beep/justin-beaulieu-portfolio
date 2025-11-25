"use client";

import { forwardRef } from 'react';

interface ButtonPrimaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const ButtonPrimary = forwardRef<HTMLButtonElement, ButtonPrimaryProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={props.type || "button"}
        className={`btn-primary text-black px-6 pt-3 pb-4 rounded-md text-body flex items-center justify-center gap-2 whitespace-nowrap ${className || ''}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ButtonPrimary.displayName = 'ButtonPrimary';

