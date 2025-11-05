import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LayoutFixer from './components/LayoutFixer';
import ScriptLoader from './components/ScriptLoader';
import DOMScripts from './components/DOMScripts';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Gallerysingle from './pages/Gallerysingle';

import { Routes, Route } from 'react-router-dom';
import Gallerydigital from './pages/Gallerydigital';
import Galleryapp from './pages/Galleryapp';

function App() {
  useEffect(() => {
    // Initialize AOS after a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <ScriptLoader />
      <DOMScripts />
      <LayoutFixer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/websites/:id" element={<Gallerysingle />} />
        <Route path="/digitalmarketing/:id" element={<Gallerydigital />} />
        <Route path="/app" element={<Galleryapp />} />
      
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
