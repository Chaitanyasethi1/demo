import React, { useState, useEffect } from 'react';
import { Header } from '../components/layout/Header';

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

const categories = [
  { id: 1, name: 'Ghee & Oils', img: prod4 },
  { id: 2, name: 'Spices', img: prod3 },
  { id: 3, name: 'Honey', img: prod2 },
  { id: 4, name: 'Dry Fruits', img: prod1 },
  { id: 5, name: 'Staples', img: hero5 },
  { id: 6, name: 'Snacks', img: hero1 },
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
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        
        {/* 1. 3D Intro Hero Section */}
        <section className="relative w-full h-[90vh] md:h-screen bg-black overflow-hidden flex items-center justify-center">
          {/* Background Text (Parallax Effect) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none z-0 pointer-events-none">
            <h1 className="text-[15rem] md:text-[30rem] font-black text-white whitespace-nowrap tracking-tighter" style={{ lineHeight: 0.8 }}>
              ORGANIC
            </h1>
          </div>

          {/* 3D Content Container */}
          <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center h-full text-center perspective-[1200px]">
            
            <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] animate-float-3d mb-12" style={{ transformStyle: 'preserve-3d' }}>
              {/* Glow Behind */}
              <div className="absolute inset-0 bg-white/20 rounded-full blur-[100px] transform"></div>
              
              <img 
                src={prod1} 
                alt="3D Almond Intro" 
                className="w-full h-full object-cover rounded-full border-4 border-white/10"
                style={{
                  boxShadow: '0 50px 100px -20px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.2)',
                  transform: 'translateZ(100px)'
                }}
              />
            </div>

            <h2 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tight mb-6" style={{ transform: 'translateZ(50px)' }}>
              Pure Nature.
            </h2>
            <p className="text-gray-300 max-w-xl text-lg md:text-xl font-light tracking-wide mb-10" style={{ transform: 'translateZ(30px)' }}>
              Experience the finest, ethically sourced organic almonds. Untouched by chemicals, perfected by nature.
            </p>
            <button className="bg-white text-black px-12 py-5 uppercase tracking-widest text-sm font-bold hover:bg-gray-200 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Explore Our Farm
            </button>

          </div>
        </section>

        {/* 2. Shop By Category (Circular) */}
        <section className="py-12 px-4 border-b border-gray-100">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-center text-xl md:text-2xl font-black uppercase tracking-widest mb-10">Shop by Category</h2>
            <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide snap-x justify-start md:justify-center">
              {categories.map(cat => (
                <div key={cat.id} className="flex flex-col items-center flex-shrink-0 snap-center group cursor-pointer">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 border border-gray-200 p-1">
                    <img src={cat.img} alt={cat.name} className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-800">{cat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* 3. Bestsellers Strip */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="flex justify-between items-end mb-10">
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">Bestsellers</h2>
              <a href="#" className="uppercase tracking-widest text-xs font-bold border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">View All</a>
            </div>
            
            <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x">
              {products.map(p => (
                <div key={p.id} className="w-64 md:w-auto flex-shrink-0 snap-start group cursor-pointer border border-transparent hover:border-gray-100 p-2 transition-all">
                  <div className="relative aspect-square overflow-hidden bg-gray-50 mb-4">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <button className="w-full bg-black text-white py-3 uppercase tracking-widest text-xs font-bold hover:bg-gray-800">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <h3 className="font-bold text-sm md:text-base uppercase tracking-wider mb-1 text-center">{p.name}</h3>
                  <p className="text-gray-500 font-semibold tracking-wider text-center">₹{p.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Promo Banner */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row items-center bg-black text-white overflow-hidden">
              <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center items-start">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Signature Product</h4>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">Pura A2 Ghee</h2>
                <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
                  Crafted using the traditional Bilona method from grass-fed Gir cows. Pure, ethical, and loaded with nutrition.
                </p>
                <button className="bg-white text-black px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-gray-200 transition-colors">
                  Shop Ghee
                </button>
              </div>
              <div className="md:w-1/2 h-[400px] md:h-[600px] w-full">
                <img src={prod4} alt="A2 Ghee Promo" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Trust Badges / As Seen In */}
        <section className="py-16 border-t border-b border-gray-100 bg-white">
          <div className="container mx-auto text-center px-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">As Featured In</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
              <div className="text-xl font-black uppercase tracking-tighter">Vogue</div>
              <div className="text-xl font-black uppercase tracking-tighter">Forbes</div>
              <div className="text-xl font-black uppercase tracking-tighter">GQ</div>
              <div className="text-xl font-black uppercase tracking-tighter">YourStory</div>
              <div className="text-xl font-black uppercase tracking-tighter">Mint</div>
            </div>
          </div>
        </section>
        
        {/* 6. Testimonials */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="container mx-auto max-w-3xl text-center">
             <h2 className="text-3xl font-black uppercase tracking-tighter mb-12">Customer Reviews</h2>
             <div className="mb-8">
               <p className="text-xl md:text-2xl font-serif italic text-gray-800 leading-relaxed">
                 "The quality is unmatched. The A2 Ghee tastes exactly like what my grandmother used to make. Highly recommended!"
               </p>
             </div>
             <div className="flex items-center justify-center space-x-1 mb-4 text-black">
                ★ ★ ★ ★ ★
             </div>
             <p className="text-sm font-bold uppercase tracking-widest">Rahul Sharma</p>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-black text-white pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            {/* Brand & Newsletter */}
            <div className="md:col-span-5">
              <h2 className="text-4xl font-black tracking-tighter uppercase mb-6">Poshanful</h2>
              <p className="text-gray-400 max-w-sm mb-8 leading-relaxed text-sm">
                Premium organic staples and nutrition, sourced ethically and delivered directly to your doorstep. Pure, unadulterated goodness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-transparent border-b border-gray-600 px-0 py-3 text-white focus:outline-none focus:border-white transition-colors w-full text-sm"
                />
                <button className="bg-white text-black px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-gray-200 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Links - Shop */}
            <div className="md:col-span-2 md:col-start-7">
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-500">Shop</h3>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">All Products</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Gift Cards</a></li>
              </ul>
            </div>

            {/* Links - Support */}
            <div className="md:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-500">Support</h3>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Track Order</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Links - Social */}
            <div className="md:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-500">Follow Us</h3>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pinterest</a></li>
              </ul>
            </div>

          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Poshanful.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
