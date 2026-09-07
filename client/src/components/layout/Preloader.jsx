import React, { useState, useEffect } from 'react';
import bowl from '../../assets/almond_bowl.jpg';

export function Preloader({ onComplete }) {
  const [isSplit, setIsSplit] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Start splitting after 2 seconds
    const splitTimer = setTimeout(() => {
      setIsSplit(true);
    }, 2000);

    // Completely unmount after 3.5 seconds (gives time for animation to finish)
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
      className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-1000 ${
        isSplit ? 'opacity-0 pointer-events-none delay-500' : 'opacity-100'
      }`}
    >
      <div className="relative w-64 h-64 md:w-96 md:h-96">
        
        {/* Top Half */}
        <div 
          className="absolute inset-0 transition-transform duration-1000 ease-[cubic-bezier(0.7,0,0.3,1)]"
          style={{ 
            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
            transform: isSplit ? 'translateY(-150vh)' : 'translateY(0)'
          }}
        >
          <img src={bowl} alt="Organic Almonds" className="w-full h-full object-cover rounded-full animate-spin-slow" />
        </div>

        {/* Bottom Half */}
        <div 
          className="absolute inset-0 transition-transform duration-1000 ease-[cubic-bezier(0.7,0,0.3,1)]"
          style={{ 
            clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)',
            transform: isSplit ? 'translateY(150vh)' : 'translateY(0)'
          }}
        >
          <img src={bowl} alt="Organic Almonds" className="w-full h-full object-cover rounded-full animate-spin-slow" />
        </div>

      </div>
      
      {/* Loading Text */}
      <div 
        className={`absolute bottom-20 text-white tracking-[0.5em] text-sm md:text-base font-black uppercase transition-opacity duration-500 ${
          isSplit ? 'opacity-0' : 'opacity-100 animate-pulse'
        }`}
      >
        Poshanful
      </div>
    </div>
  );
}
