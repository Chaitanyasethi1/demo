import React from 'react';
import { Header } from '../components/layout/Header';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-brand-50 py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Pure Nutrition, Delivered.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Farm fresh groceries and premium nutritional products straight to your door.
            </p>
            <Button size="lg">Shop Now</Button>
          </div>
        </section>

        {/* Featured Products Placeholder */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Bestsellers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map(i => (
                <Card key={i} className="p-4">
                  <div className="bg-gray-100 aspect-square rounded-xl mb-4"></div>
                  <h3 className="font-semibold text-lg mb-1">Product {i}</h3>
                  <p className="text-brand-600 font-bold mb-4">₹499</p>
                  <Button className="w-full">Add to Cart</Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      {/* WhatsApp FAB placeholder */}
      <a href="#" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50">
        💬
      </a>
    </div>
  );
}
