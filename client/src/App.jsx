import React from 'react';
import { Home } from './pages/Home';
import { Preloader } from './components/layout/Preloader';
import { PromoPopup } from './components/layout/PromoPopup';

function App() {
  return (
    <>
      <Preloader />
      <PromoPopup />
      <div className="font-sans antialiased text-black min-h-screen bg-white">
        <Home />
      </div>
    </>
  );
}

export default App;
