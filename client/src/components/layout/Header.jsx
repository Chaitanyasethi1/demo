import React, { useState } from 'react';

export function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
    <div className="sticky top-0 z-50 w-full flex flex-col shadow-sm">
      {/* Top Announcement Bar */}
      <div className="bg-black text-white text-xs md:text-sm font-bold uppercase tracking-widest text-center py-3 relative overflow-hidden">
        <div className="animate-marquee whitespace-nowrap inline-block">
          <span className="mx-6">FREE SHIPPING ON ALL ORDERS OVER ₹1000</span>
          <span className="mx-6">•</span>
          <span className="mx-6">100% ORGANIC CERTIFIED</span>
          <span className="mx-6">•</span>
          <span className="mx-6">FARM TO TABLE</span>
          <span className="mx-6">•</span>
          <span className="mx-6">PURE & UNADULTERATED</span>
        </div>
      </div>

      <header className="bg-white border-b border-gray-100">
        {/* Main Header Row */}
        <div className="container mx-auto px-4 h-24 flex items-center justify-between">
          
          {/* Mobile Menu Icon (Left on mobile) */}
          <div className="md:hidden flex-1">
            <button className="text-black p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>

          {/* Logo (Centered) */}
          <div className="flex-1 md:flex-none text-center">
            <a href="/" className="text-4xl md:text-5xl font-black tracking-tighter text-black uppercase">
              Poshanful
            </a>
          </div>

          {/* Desktop Nav (Center-Left) */}
          <nav className="hidden md:flex flex-1 justify-center space-x-12">
            <a href="#" className="text-sm font-bold tracking-widest uppercase text-black hover:text-gray-500 transition-colors">Shop</a>
            <a href="#" className="text-sm font-bold tracking-widest uppercase text-black hover:text-gray-500 transition-colors">Our Story</a>
            <a href="#" className="text-sm font-bold tracking-widest uppercase text-black hover:text-gray-500 transition-colors">Farms</a>
            <a href="#" className="text-sm font-bold tracking-widest uppercase text-black hover:text-gray-500 transition-colors">Contact</a>
          </nav>

          {/* Icons (Right) */}
          <div className="flex-1 flex items-center justify-end space-x-6">
            <button className="text-black hover:text-gray-500 hidden md:block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <button onClick={() => setIsLoginOpen(true)} className="text-black hover:text-gray-500 hidden md:block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </button>
            <button onClick={() => setIsCartOpen(true)} className="text-black hover:text-gray-500 relative flex items-center p-1">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              <span className="absolute top-0 right-0 bg-black text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </header>
    </div>

      {/* Login Modal Stub */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white p-8 w-full max-w-md relative">
            <button onClick={() => setIsLoginOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black">✕</button>
            <h2 className="text-2xl font-black uppercase tracking-widest mb-6 text-center">Login</h2>
            <input type="text" placeholder="Email or Phone" className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black mb-8 text-sm" />
            <button className="w-full bg-black text-white py-4 uppercase tracking-widest text-xs font-bold hover:bg-gray-800 transition-colors">Continue</button>
          </div>
        </div>
      )}

      {/* Cart Drawer Stub */}
      {isCartOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setIsCartOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-xl font-black uppercase tracking-widest">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-black">✕</button>
            </div>
            <div className="flex-1 p-6 flex flex-col items-center justify-center text-gray-400 space-y-4">
              <svg className="w-16 h-16 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              <p className="text-sm tracking-widest uppercase">Cart is empty.</p>
            </div>
            <div className="p-6 border-t border-gray-100 bg-gray-50">
              <button className="w-full bg-black text-white py-4 uppercase tracking-widest text-sm font-bold hover:bg-gray-800 transition-colors">Checkout — ₹0</button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
