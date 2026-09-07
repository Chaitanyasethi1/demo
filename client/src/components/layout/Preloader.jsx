import React, { useState, useEffect } from 'react';
import bowlClean from '../../assets/almond_bowl_clean.png';

export function Preloader({ onComplete }) {
  const [isSplit, setIsSplit] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Start splitting after 2.0s of smooth rotation
    const splitTimer = setTimeout(() => {
      setIsSplit(true);
    }, 2000);

    // Completely unmount after 3.5s when animation finishes
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
      if (onComplete) onComplete();
    }, 3500);

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  if (isFinished) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none overflow-hidden"
      style={{
        backgroundColor: '#070707',
        opacity: isSplit ? 0 : 1,
        transition: 'opacity 1100ms cubic-bezier(0.4, 0, 0.2, 1) 450ms',
        pointerEvents: isSplit ? 'none' : 'auto',
      }}
    >
      {/* Ambient 3D Glow behind the bowl */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full bg-amber-500/15 blur-[80px] pointer-events-none transition-opacity duration-700"
        style={{ opacity: isSplit ? 0 : 1 }}
      />

      {/* Brand Title (Floats above bowl) */}
      <div 
        className="flex flex-col items-center mb-8 md:mb-10 transition-all duration-700 pointer-events-none z-10"
        style={{
          opacity: isSplit ? 0 : 1,
          transform: isSplit ? 'translate3d(0, -35px, 0)' : 'translate3d(0, 0, 0)',
        }}
      >
        <span className="text-[10px] md:text-xs tracking-[0.45em] uppercase text-amber-500 font-semibold mb-2">
          100% Pure & Organic
        </span>
        <h1 className="text-2xl md:text-4xl font-serif tracking-[0.35em] uppercase text-white font-light">
          POSHANFUL
        </h1>
      </div>

      {/* 3D Almond Bowl Container */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 pointer-events-none z-10">
        {/* Top Half of Bowl */}
        <div 
          className="absolute inset-x-0 top-0 h-[calc(50%+0.5px)] overflow-hidden"
          style={{
            transform: isSplit 
              ? 'translate3d(0, -120vh, 0) rotate(-6deg) scale(1.02)' 
              : 'translate3d(0, 0, 0)',
            transition: 'transform 1400ms cubic-bezier(0.7, 0, 0.15, 1)',
            willChange: 'transform',
          }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 absolute top-0 left-1/2 -translate-x-1/2">
            <img 
              src={bowlClean} 
              alt="Organic Almond Bowl Top"
              className="w-full h-full object-contain animate-spin-ultra-smooth"
            />
          </div>
        </div>

        {/* Bottom Half of Bowl */}
        <div 
          className="absolute inset-x-0 bottom-0 h-[calc(50%+0.5px)] overflow-hidden"
          style={{
            transform: isSplit 
              ? 'translate3d(0, 120vh, 0) rotate(6deg) scale(0.98)' 
              : 'translate3d(0, 0, 0)',
            transition: 'transform 1400ms cubic-bezier(0.7, 0, 0.15, 1)',
            willChange: 'transform',
          }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 absolute bottom-0 left-1/2 -translate-x-1/2">
            <img 
              src={bowlClean} 
              alt="Organic Almond Bowl Bottom"
              className="w-full h-full object-contain animate-spin-ultra-smooth"
            />
          </div>
        </div>
      </div>

      {/* Tagline Footer (Floats below bowl) */}
      <div 
        className="flex flex-col items-center mt-8 md:mt-10 transition-all duration-700 pointer-events-none z-10"
        style={{
          opacity: isSplit ? 0 : 1,
          transform: isSplit ? 'translate3d(0, 35px, 0)' : 'translate3d(0, 0, 0)',
        }}
      >
        <div className="w-10 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mb-3" />
        <span className="text-[10px] md:text-xs tracking-[0.45em] uppercase text-stone-400 font-medium">
          Artisanal Dry Fruits & Wellness
        </span>
      </div>
    </div>
  );
}
