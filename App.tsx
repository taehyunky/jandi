import React, { useEffect, useRef } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  return (
    <main className="w-full relative">
      <Hero />
      <Portfolio />
      <WhyUs />
      <Contact />
    </main>
  );
};

const App: React.FC = () => {
  // Global Grain Overlay
  return (
    <HashRouter>
      <div className="relative min-h-screen bg-charcoal text-silver font-sans selection:bg-emerald-500 selection:text-white">
        {/* Cinematic Grain Overlay */}
        <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay bg-noise"></div>
        
        {/* Cinematic Vignette */}
        <div className="fixed inset-0 z-[9998] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>

        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;