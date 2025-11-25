"use client";

import { forwardRef, useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: boolean;
  errorMessage?: string;
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  error?: boolean;
  errorMessage?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, error, errorMessage, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    
    const getBorderColor = () => {
      if (error) return '1px solid #F35B5B'; // border-error
      if (isFocused) return '1px solid #E0E0E0'; // border-focus
      if (isHovered) return '1px solid #8C8C8C'; // border-hover
      return '1px solid #4C4C4C'; // border-default
    };
    
    return (
      <div>
        <label htmlFor={id} className="text-body block mb-2 text-white">
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className="w-full px-4 py-3 rounded-md text-body focus:outline-none transition-colors"
          style={{ 
            backgroundColor: '#000000', // black background
            border: getBorderColor(),
            color: '#E0E0E0'
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          {...props}
        />
        {error && errorMessage && (
          <p className="text-body-sm mt-1 text-error">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, id, error, errorMessage, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    
    const getBorderColor = () => {
      if (error) return '1px solid #F35B5B'; // border-error
      if (isFocused) return '1px solid #E0E0E0'; // border-focus
      if (isHovered) return '1px solid #8C8C8C'; // border-hover
      return '1px solid #4C4C4C'; // border-default
    };
    
    return (
      <div>
        <label htmlFor={id} className="text-body block mb-2 text-white">
          {label}
        </label>
        <textarea
          ref={ref}
          id={id}
          className="w-full px-4 py-3 rounded-md text-body resize-vertical focus:outline-none transition-colors"
          style={{ 
            backgroundColor: '#000000', // black background
            border: getBorderColor(),
            color: '#E0E0E0'
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          {...props}
        />
        {error && errorMessage && (
          <p className="text-body-sm mt-1 text-error">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

