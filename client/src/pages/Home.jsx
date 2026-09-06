import React, { useState, useEffect } from 'react';
import { Header } from '../components/layout/Header';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

import hero1 from '../assets/hero_1.jpg';
import hero2 from '../assets/hero_2.jpg';
import hero3 from '../assets/hero_3.jpg';
import hero4 from '../assets/hero_4.jpg';
import hero5 from '../assets/hero_5.jpg';

import prod1 from '../assets/product_1.jpg';
import prod2 from '../assets/product_2.jpg';
import prod3 from '../assets/product_3.jpg';
import prod4 from '../assets/product_4.jpg';

const heroes = [
  { img: hero1, title: 'Pure Organics.' },
  { img: hero2, title: 'Golden Ghee.' },
  { img: hero3, title: 'Raw Honey.' },
  { img: hero4, title: 'Finest Spices.' },
  { img: hero5, title: 'Farm Fresh.' },
];

const products = [
  { id: 1, name: 'Premium Almonds', price: 899, img: prod1 },
  { id: 2, name: 'Raw Forest Honey', price: 650, img: prod2 },
  { id: 3, name: 'Whole Black Pepper', price: 350, img: prod3 },
  { id: 4, name: 'A2 Cow Ghee', price: 1200, img: prod4 },
];

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Auto-playing Hero Carousel */}
        <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden bg-black">
          {heroes.map((hero, idx) => (
            <div 
              key={idx} 
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <img src={hero.img} alt={hero.title} className="w-full h-full object-cover opacity-70" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 text-center drop-shadow-2xl">
                  {hero.title}
                </h1>
                <button className="bg-white text-black px-10 py-4 uppercase tracking-widest font-bold hover:bg-gray-200 transition-colors">
                  Shop Collection
                </button>
              </div>
            </div>
          ))}
          
          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-3">
            {heroes.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1 transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-white' : 'w-4 bg-white/50'}`}
              />
            ))}
          </div>
        </section>

        {/* Bestsellers Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-4xl font-black uppercase tracking-tighter">Bestsellers</h2>
              <a href="#" className="hidden md:block uppercase tracking-widest text-sm font-semibold border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">View All</a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {products.map(p => (
                <div key={p.id} className="group cursor-pointer">
                  <div className="relative aspect-square overflow-hidden bg-gray-50 mb-6">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <button className="w-full bg-black text-white py-3 uppercase tracking-widest text-sm font-semibold hover:bg-gray-800">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg uppercase tracking-wide mb-2">{p.name}</h3>
                  <p className="text-gray-500 font-medium tracking-wide">₹{p.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-black text-white pt-24 pb-12 px-4 mt-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            {/* Brand & Newsletter */}
            <div className="md:col-span-5">
              <h2 className="text-4xl font-black tracking-tighter uppercase mb-6">Poshanful</h2>
              <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
                Premium organic staples and nutrition, sourced ethically and delivered directly to your doorstep. Pure, unadulterated goodness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-transparent border-b border-gray-600 px-0 py-3 text-white focus:outline-none focus:border-white transition-colors w-full"
                />
                <button className="bg-white text-black px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-gray-200 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Links - Shop */}
            <div className="md:col-span-2 md:col-start-7">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">Shop</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">All Products</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Gift Cards</a></li>
              </ul>
            </div>

            {/* Links - Support */}
            <div className="md:col-span-2">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">Support</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Track Order</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Links - Social */}
            <div className="md:col-span-2">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-500">Follow Us</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pinterest</a></li>
              </ul>
            </div>

          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Poshanful. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
