import React, { useEffect } from 'react';
import './App.css';
import { initScrollTriggers } from './scroll-trigger.js';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import fonts from src/fonts so Webpack includes them
import './assets/Poppins-Medium.ttf';
import './assets/Poppins-Light.ttf';


function App() {
  useEffect(() => {
    const cleanup = initScrollTriggers();
    return cleanup; // Cleanup observer on unmount
  }, []); // Run once on mount

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
