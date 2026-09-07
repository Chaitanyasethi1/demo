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

const reviews = [
  { id: 1, name: "NITHIN KAMATH", desc: "Founder, Rainmatter", text: "At Rainmatter Health, we care deeply about what we eat. Two Brothers stood out—clean food, deep purpose, and a clear mission.", img: prod1 },
  { id: 2, name: "ANAND S AHUJA", desc: "Founder, Bhaane", text: "Pure love, pure taste, pure intention. Every product feels authentic and full of heart—from how it's grown to how it tastes.", img: prod2 },
  { id: 3, name: "MIRA KAPOOR", desc: "India", text: "One of the few brands that makes ghee the traditional way—from dahi, not malai. Delicious, wholesome, and always a repeat buy.", img: prod3 },
  { id: 4, name: "SHILPA SHETTY", desc: "Actor", text: "I absolutely love their organic jaggery and cold-pressed oils. A staple in my kitchen for my family's health.", img: prod4 },
  { id: 5, name: "VIRAT KOHLI", desc: "Athlete", text: "Eating clean is non-negotiable for me. The transparency and quality of their products is unmatched.", img: prod1 },
];

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
        
        {/* 1. Edge-to-Edge Hero Carousel */}
        <section className="relative h-[60vh] md:h-[85vh] w-full overflow-hidden bg-black">
          {heroes.map((hero, idx) => (
            <div 
              key={idx} 
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <img src={hero.img} alt={hero.title} className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
                <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-center drop-shadow-lg">
                  {hero.title}
                </h1>
                <button className="bg-white text-black px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-gray-200 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
          
          <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
            {heroes.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1 transition-all duration-300 ${idx === currentSlide ? 'w-10 bg-white' : 'w-4 bg-white/40'}`}
              />
            ))}
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

        {/* 2.5 3D Floating Almond Promotional Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative border-b border-gray-100">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              
              {/* Text Content */}
              <div className="md:w-1/2 mb-16 md:mb-0 z-20 text-center md:text-left">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Harvested Fresh</h4>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none text-black">
                  Premium<br />Almonds
                </h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0 text-lg leading-relaxed">
                  Experience the crisp, buttery texture of our organic almonds. Sourced ethically, packed with nutrients, and floating with flavor.
                </p>
                <button className="bg-black text-white px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl">
                  Shop Almonds
                </button>
              </div>

              {/* 3D Floating Image */}
              <div className="md:w-1/2 relative flex justify-center perspective-[1000px]">
                <div className="relative w-64 h-64 md:w-96 md:h-96 animate-float-3d" style={{ transformStyle: 'preserve-3d' }}>
                  {/* Shadow glow effect */}
                  <div className="absolute inset-0 bg-black/10 rounded-full blur-3xl transform -translate-y-8 translate-x-8"></div>
                  
                  {/* Floating Image */}
                  <img 
                    src={prod1} 
                    alt="Premium Almonds 3D" 
                    className="w-full h-full object-cover rounded-full border-8 border-white" 
                    style={{
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(0,0,0,0.05)',
                      transform: 'translateZ(50px)'
                    }} 
                  />
                </div>
              </div>

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
        {/* 5. Infinite Auto-Scrolling Testimonials */}
        <section className="py-24 bg-gray-50 overflow-hidden relative border-t border-gray-100">
          <div className="container mx-auto px-4 mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black">What They Say</h2>
            <div className="w-24 h-1 bg-black mx-auto mt-6"></div>
          </div>
          
          {/* Scrolling Container */}
          <div className="relative w-full flex overflow-hidden">
            {/* The animated track */}
            <div className="flex space-x-8 px-4 w-max animate-scroll-x hover:[animation-play-state:paused]">
              {[...reviews, ...reviews].map((review, i) => (
                <div key={i} className="w-[320px] md:w-[450px] flex-shrink-0 bg-white border border-gray-100 p-8 pt-12 relative mt-10 shadow-sm hover:shadow-xl transition-shadow rounded-sm">
                  {/* Avatar */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
                    <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                  {/* Stars */}
                  <div className="flex justify-center text-black mb-6 mt-4">
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} className="w-4 h-4 md:w-5 md:h-5 fill-current mx-0.5" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  {/* Text */}
                  <p className="text-gray-600 text-center text-sm md:text-base leading-relaxed italic mb-6">"{review.text}"</p>
                  {/* Author */}
                  <div className="text-center border-t border-gray-100 pt-6">
                    <h4 className="font-black uppercase tracking-widest text-black text-sm">{review.name}</h4>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">{review.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
