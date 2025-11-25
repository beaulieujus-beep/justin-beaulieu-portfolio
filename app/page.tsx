"use client";

import Navigation from './components/Navigation';
import Loader from './components/Loader';
import PageTransition from './components/PageTransition';
import HomeContent from './components/HomeContent';
import { useState, useEffect } from 'react';

export default function Home() {
  // Always start with false to match server render
  const [showLoader, setShowLoader] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check if loader has been shown in this session (only runs on client after mount)
    if (typeof window !== 'undefined') {
      const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
      
      if (!hasSeenLoader) {
        // First visit - show loader
        setShowLoader(true);
        setIsFirstVisit(true);
        sessionStorage.setItem('hasSeenLoader', 'true');
      } else {
        // Already seen loader - show content immediately
        setIsFirstVisit(false);
        setShowContent(true);
      }
      setIsInitialized(true);
    }
  }, []);

  const handleLoaderComplete = () => {
    setShowLoader(false);
    
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      
      // Wait for loader to unmount, then show content
      setTimeout(() => {
        setShowContent(true);
        // Ensure DOM is ready before triggering animation
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTimeout(() => {
              setContentVisible(true);
            }, 100);
          });
        });
      }, 200);
    }
  };

  if (showLoader) {
    return (
      <>
        <Loader onComplete={handleLoaderComplete} />
        {/* Preload content in the background while loader is showing */}
        <div 
          style={{ 
            position: 'fixed',
            left: '-9999px',
            top: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            pointerEvents: 'none',
            zIndex: -1,
            overflow: 'hidden',
          }}
        >
          <HomeContent />
        </div>
      </>
    );
  }

  if (!isInitialized || !showContent) {
    // Don't render content until we've checked sessionStorage
    return (
      <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
        <Navigation activePage="work" fadeIn={false} />
        <div style={{ minHeight: '100vh' }} />
      </div>
    );
  }

  // First visit after loader - animate in with custom transition
  if (isFirstVisit) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
        <Navigation activePage="work" fadeIn={contentVisible} />
        <div 
          style={{ 
            opacity: contentVisible ? '1' : '0',
            transform: contentVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: contentVisible 
              ? 'opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1)'
              : 'none',
            willChange: contentVisible ? 'auto' : 'opacity, transform',
          }}
        >
          <HomeContent />
        </div>
      </div>
    );
  }

  // Return visits - use PageTransition like other pages
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <Navigation activePage="work" fadeIn={true} />
      <PageTransition>
        <HomeContent />
      </PageTransition>
    </div>
  );
}
