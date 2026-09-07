import React, { useState, useEffect } from 'react';
import prod1 from '../../assets/product_1.jpg';

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup 5 seconds after the component mounts
    const timer = setTimeout(() => {
      // Check if user has already closed it in this session (optional, but good practice)
      const hasSeenPopup = sessionStorage.getItem('hasSeenPromo');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenPromo', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative z-10 w-full max-w-md bg-white overflow-hidden shadow-2xl animate-fade-in-up">
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-3 right-3 text-white hover:text-gray-200 z-20 mix-blend-difference"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="flex flex-col">
          {/* Image Header */}
          <div className="h-48 w-full relative">
            <img src={prod1} alt="Premium Organic Products" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <h3 className="text-white text-2xl font-black uppercase tracking-widest">Welcome Gift</h3>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-8 text-center bg-white">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">Glad You're Here</p>
            <h2 className="text-5xl font-black text-black tracking-tighter mb-4">15% OFF</h2>
            <p className="text-gray-600 text-sm mb-6">On your first organic grocery order.</p>
            
            <div className="bg-gray-100 py-3 px-6 mb-6 inline-block border border-gray-200">
              <span className="text-xs uppercase tracking-widest text-gray-500 mr-2">Use Code:</span>
              <span className="font-bold text-black tracking-widest">POSHAN15</span>
            </div>
            
            <button 
              onClick={handleClose}
              className="w-full bg-black text-white py-4 uppercase tracking-widest text-sm font-bold hover:bg-gray-800 transition-colors"
            >
              Claim Now
            </button>
            <button 
              onClick={handleClose}
              className="mt-4 text-xs text-gray-400 uppercase tracking-widest hover:text-black transition-colors underline"
            >
              No thanks, I prefer full price
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
