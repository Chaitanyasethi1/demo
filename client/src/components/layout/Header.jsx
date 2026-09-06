import React, { useState } from 'react';

export function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="text-3xl font-black tracking-tighter text-brand-900 uppercase">Poshanful</div>
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-sm font-semibold tracking-widest uppercase text-gray-900 hover:text-gray-500 transition-colors">Shop</a>
            <a href="#" className="text-sm font-semibold tracking-widest uppercase text-gray-900 hover:text-gray-500 transition-colors">Story</a>
            <a href="#" className="text-sm font-semibold tracking-widest uppercase text-gray-900 hover:text-gray-500 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center space-x-6">
            <button onClick={() => setIsLoginOpen(true)} className="text-sm font-semibold tracking-widest uppercase text-gray-900 hover:text-gray-500 transition-colors hidden md:block">
              Login
            </button>
            <button onClick={() => setIsCartOpen(true)} className="flex items-center text-gray-900 hover:text-gray-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              <span className="ml-2 text-sm font-medium bg-brand-900 text-white w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </header>

      {/* Login Modal Stub */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white p-8 w-full max-w-md relative">
            <button onClick={() => setIsLoginOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-900">✕</button>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-6 text-center">Welcome Back</h2>
            <input type="text" placeholder="Phone or Email" className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black mb-6" />
            <button className="w-full bg-brand-900 text-white py-4 uppercase tracking-widest font-semibold hover:bg-black transition-colors">Continue</button>
            <p className="text-center mt-6 text-sm text-gray-500">New here? <a href="#" className="text-black underline">Create an account</a></p>
          </div>
        </div>
      )}

      {/* Cart Drawer Stub */}
      {isCartOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setIsCartOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl flex flex-col transform transition-transform duration-300">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold uppercase tracking-wide">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-gray-900">✕</button>
            </div>
            <div className="flex-1 p-6 flex items-center justify-center text-gray-500">
              Your cart is currently empty.
            </div>
            <div className="p-6 border-t border-gray-100 bg-gray-50">
              <button className="w-full bg-brand-900 text-white py-4 uppercase tracking-widest font-semibold hover:bg-black transition-colors">Checkout — ₹0</button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
