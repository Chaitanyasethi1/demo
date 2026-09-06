import React from 'react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold text-brand-700">Poshanful</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-brand-600">Shop</a>
          <a href="#" className="text-gray-600 hover:text-brand-600">About</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-brand-600">
            🛒 <span className="ml-1 text-sm font-medium">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}
