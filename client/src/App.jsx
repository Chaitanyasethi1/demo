import React from 'react';
import { Home } from './pages/Home';
import { Preloader } from './components/layout/Preloader';

function App() {
  return (
    <>
      <Preloader />
      <div className="font-sans antialiased text-black min-h-screen bg-white">
        <Home />
      </div>
    </>
  );
}

export default App;
