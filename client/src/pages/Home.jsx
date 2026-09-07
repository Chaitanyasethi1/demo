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
      
      {/* 6. Comprehensive Footer */}
      <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
          
          {/* Left: Logo */}
          <div className="md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left">
            <img src={logo} alt="Poshanful Logo" className="h-24 w-24 object-cover mb-4 rounded-full border border-gray-200 p-1" />
            <h2 className="text-2xl font-black uppercase tracking-tighter text-black leading-none mt-2">Poshanful<br/>Organic Farms</h2>
          </div>

          {/* Center: Newsletter & Links */}
          <div className="md:w-2/4 flex flex-col items-center text-center">
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest mb-2 text-black">Thoughtfully Crafted Food</h3>
            <p className="text-gray-500 text-sm mb-6 max-w-md">Subscribe for special offers, newsletters and become a part of our movement</p>
            
            {/* Newsletter Input */}
            <div className="w-full max-w-md flex items-center border border-gray-300 p-1 mb-8">
              <input type="email" placeholder="Your e-mail" className="flex-1 p-3 outline-none text-sm bg-transparent" />
              <button className="p-3 text-gray-400 hover:text-black transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs md:text-sm font-bold uppercase tracking-widest text-black mb-8">
              <a href="#" className="hover:text-gray-500">Categories</a>
              <a href="#" className="hover:text-gray-500 md:border-l md:border-gray-300 md:pl-6">General</a>
              <a href="#" className="hover:text-gray-500 md:border-l md:border-gray-300 md:pl-6">Connect</a>
            </div>

            {/* Social & App Badges */}
            <div className="flex flex-col items-center space-y-8">
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-black transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-black transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-black transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="bg-black text-white px-5 py-3 flex items-center space-x-3 rounded cursor-pointer hover:bg-gray-800 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.523 15.3414C17.523 15.3414 16.208 17.7814 14.07 19.4674C13.064 20.2644 11.536 21.0364 9.68903 21.0364C5.11103 21.0364 1.49303 17.5004 1.49303 12.0184C1.49303 6.64344 5.23003 3.01244 9.77103 3.01244C11.579 3.01244 12.986 3.69344 14.156 4.54244C16.326 6.11544 17.523 8.66544 17.523 8.66544L14.832 10.2224C14.832 10.2224 14.088 8.63444 12.569 7.50444C11.83 6.95344 10.871 6.46744 9.73003 6.46744C6.91803 6.46744 4.88703 8.69244 4.88703 12.0184C4.88703 15.3944 6.94503 17.5814 9.71203 17.5814C10.741 17.5814 11.666 17.1594 12.443 16.5514C13.844 15.4544 14.73 13.7844 14.73 13.7844H9.86603V10.6694H18.232C18.232 10.6694 18.271 11.2334 18.271 11.8684C18.271 13.1254 18.069 14.3314 17.523 15.3414Z"/></svg>
                  <div className="text-left">
                    <span className="block text-[10px] leading-none text-gray-300">GET IT ON</span>
                    <span className="block text-sm font-bold leading-none mt-1">Google Play</span>
                  </div>
                </div>
                <div className="bg-black text-white px-5 py-3 flex items-center space-x-3 rounded cursor-pointer hover:bg-gray-800 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16.365 21.442c-1.391.89-2.736.936-4.148.067-1.402-.853-2.65-.89-4.2-.023-3.693 2.102-7.16-3.793-4.524-8.31 1.077-1.849 2.825-2.91 4.582-2.936 1.488-.024 2.883.993 3.805.993.921 0 2.653-1.258 4.417-1.071 1.846.196 3.518 1.104 4.47 2.664-3.832 2.221-3.189 7.426.685 9.027-1.127 2.766-3.237 3.308-5.087 3.589zm-1.854-15.111c-1.201-.225-2.693-1.075-3.528-2.314-.852-1.246-1.503-3.037-1.272-4.428 1.171.187 2.831 1.056 3.737 2.37.893 1.282 1.547 2.973 1.285 4.372h-.222z"/></svg>
                  <div className="text-left">
                    <span className="block text-[10px] leading-none text-gray-300">Download on the</span>
                    <span className="block text-sm font-bold leading-none mt-1">App Store</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Details */}
          <div className="md:w-1/4 text-center md:text-left text-xs text-gray-500 space-y-4 font-medium tracking-wide leading-relaxed mt-8 md:mt-0">
            <p className="font-bold text-black uppercase">Poshanful Foods Private Limited</p>
            <p>11th FLOOR, N-1104, JASMINIUM BUILDING,<br/>MAGARPATTA CITY, HADAPSAR, Pune,<br/>Maharashtra, 411028</p>
            <p>Email: <a href="mailto:info@poshanful.com" className="underline hover:text-black">info@poshanful.com</a></p>
            <p>Tel: +91 98765 43210</p>
            <p>Grievances: +91 98765 43210</p>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="container mx-auto max-w-7xl mt-16 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-gray-400 uppercase tracking-widest gap-4">
           <p>© 2026 POSHANFUL ORGANIC FARMS. ALL RIGHTS RESERVED.</p>
           <p>MADE WITH LOVE</p>
        </div>
      </footer>
    </div>
  );
}
