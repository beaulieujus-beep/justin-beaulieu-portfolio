"use client";

import React from 'react';

interface AudioPlayerButtonProps {
  audioSrc: string;
  className?: string;
  ariaLabel?: string;
}

export default function AudioPlayerButton({ 
  audioSrc, 
  className = '', 
  ariaLabel = 'Play audio' 
}: AudioPlayerButtonProps) {
  const [audioProgress, setAudioProgress] = React.useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      if (!audioRef.current.paused) {
        // If playing, stop and reset
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setAudioProgress(0);
        setIsAudioPlaying(false);
      } else {
        // If not playing, start from beginning
        audioRef.current.currentTime = 0;
        setAudioProgress(0);
        audioRef.current.play();
        setIsAudioPlaying(true);
      }
    }
  };

  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let animationFrameId: number;

    const updateProgress = () => {
      if (audio.duration) {
        const progress = (audio.currentTime / audio.duration) * 100;
        setAudioProgress(progress);
      }
      
      if (!audio.paused && !audio.ended) {
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    const handlePlay = () => {
      setIsAudioPlaying(true);
      updateProgress();
    };

    const handleEnded = () => {
      setAudioProgress(0);
      setIsAudioPlaying(false);
      audio.currentTime = 0; // Reset audio position
    };

    const handlePause = () => {
      setIsAudioPlaying(false);
      setAudioProgress(0);
      audio.currentTime = 0; // Reset audio position on pause
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('pause', handlePause);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <>
      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={audioSrc} />
      
      {/* Audio Button */}
      <button
        onClick={playAudio}
        onMouseDown={(e) => e.currentTarget.classList.add('scale-96')}
        onMouseUp={(e) => e.currentTarget.classList.remove('scale-96')}
        onMouseLeave={(e) => e.currentTarget.classList.remove('scale-96')}
        className={`w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/60 hover:scale-102 transition-all duration-150 ease-out ${className}`}
        aria-label={ariaLabel}
      >
        {/* Progress Circle */}
        <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[56px] h-[56px] -rotate-90 pointer-events-none" viewBox="0 0 56 56">
          <circle
            cx="28"
            cy="28"
            r="26.5"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="2"
            strokeDasharray={`${2 * Math.PI * 26.5}`}
            strokeDashoffset={`${2 * Math.PI * 26.5 * (1 - audioProgress / 100)}`}
            strokeLinecap="round"
            style={{ willChange: 'stroke-dashoffset' }}
          />
        </svg>
        
        {/* Play/Pause Icon */}
        {isAudioPlaying ? (
          <svg className="flex-shrink-0 relative z-10 pointer-events-none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="4" width="4" height="16" fill="white"/>
            <rect x="14" y="4" width="4" height="16" fill="white"/>
          </svg>
        ) : (
          <svg className="flex-shrink-0 relative z-10 pointer-events-none" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5V19L19 12L8 5Z" fill="white"/>
          </svg>
        )}
      </button>
    </>
  );
}

