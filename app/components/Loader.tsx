"use client";

import { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [stage, setStage] = useState<'entering' | 'visible' | 'exiting'>('entering');

  useEffect(() => {
    // Fade in
    const enterTimer = setTimeout(() => {
      setStage('visible');
    }, 50);

    // Start exit animation after 2.6 seconds (to complete at 3.0s total)
    const exitTimer = setTimeout(() => {
      setStage('exiting');
    }, 2600);

    // Complete and unmount after 3.0 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const getTransformStyle = () => {
    switch (stage) {
      case 'exiting':
        return 'translateY(-60px)';
      default:
        return 'translateY(0)';
    }
  };

  const getOpacityStyle = () => {
    switch (stage) {
      case 'entering':
        return '0';
      case 'visible':
        return '1';
      case 'exiting':
        return '0';
      default:
        return '1';
    }
  };

  const getTransitionStyle = () => {
    switch (stage) {
      case 'entering':
      case 'visible':
        return 'opacity 1200ms cubic-bezier(0.25, 0.1, 0.25, 1)';
      case 'exiting':
        return 'opacity 400ms cubic-bezier(0.25, 0.1, 0.25, 1)';
      default:
        return 'opacity 1200ms cubic-bezier(0.25, 0.1, 0.25, 1)';
    }
  };

  const getContentTransitionStyle = () => {
    switch (stage) {
      case 'entering':
      case 'visible':
        return 'all 1200ms cubic-bezier(0.25, 0.1, 0.25, 1)';
      case 'exiting':
        return 'all 400ms cubic-bezier(0.25, 0.1, 0.25, 1)';
      default:
        return 'all 1200ms cubic-bezier(0.25, 0.1, 0.25, 1)';
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center px-5 md:px-8"
      style={{ 
        backgroundColor: 'var(--background)',
        opacity: getOpacityStyle(),
        transition: getTransitionStyle(),
      }}
    >
      <div 
        className="max-w-6xl mx-auto w-full"
        style={{
          transform: getTransformStyle(),
          opacity: getOpacityStyle(),
          transition: getContentTransitionStyle(),
        }}
      >
        <h1 
          className="text-h1 text-white text-left"
          style={{ 
            marginBottom: '0'
          }}
        >
          Justin Beaulieu
        </h1>
        <p 
          className="text-h1 text-white text-left"
          style={{ 
            marginTop: '0',
            marginBottom: '72px'
          }}
        >
          Product Designer
        </p>
        
        <ProgressBar duration={3100} />
      </div>
    </div>
  );
}

