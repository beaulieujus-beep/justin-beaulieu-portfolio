"use client";

import { useEffect, useState } from 'react';

interface ProgressBarProps {
  duration?: number;
  width?: string;
  height?: string;
  backgroundColor?: string;
  fillColor?: string;
  borderRadius?: string;
  onComplete?: () => void;
}

export default function ProgressBar({
  duration = 2500,
  width = '200px',
  height = '2px',
  backgroundColor = '#393939',
  fillColor = '#E0E0E0',
  borderRadius = '1px',
  onComplete
}: ProgressBarProps) {
  const [progress, setProgress] = useState(0);

  // Ease in-out function for smooth acceleration/deceleration
  const easeInOutCubic = (t: number): number => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  useEffect(() => {
    const startTime = Date.now();
    
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const linearProgress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(linearProgress);
      const newProgress = easedProgress * 100;
      setProgress(newProgress);
      
      if (newProgress >= 100) {
        clearInterval(progressInterval);
        if (onComplete) {
          onComplete();
        }
      }
    }, 16); // Update every ~16ms (60fps)

    return () => {
      clearInterval(progressInterval);
    };
  }, [duration, onComplete]);

  return (
    <div 
      style={{
        width,
        height,
        backgroundColor,
        borderRadius,
        overflow: 'hidden'
      }}
    >
      <div 
        style={{
          width: `${progress}%`,
          height: '100%',
          backgroundColor: fillColor,
          transition: 'width 16ms linear'
        }}
      />
    </div>
  );
}

