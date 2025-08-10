// src/components/Hero.jsx
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const titles = ["Software Developer", "UI Designer", "Problem Solver", "Tech Enthusiast"];
    let interval;
    const currentTitle = titles[currentIndex];

    if (typing) {
      let charIndex = 0;
      interval = setInterval(() => {
        if (charIndex < currentTitle.length) {
          setDisplayText(currentTitle.substring(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => setTyping(false), 1500);
        }
      }, 100);
    } else {
      let eraseIndex = currentTitle.length;
      interval = setInterval(() => {
        if (eraseIndex > 0) {
          setDisplayText(currentTitle.substring(0, eraseIndex - 1));
          eraseIndex--;
        } else {
          clearInterval(interval);
          setTyping(true);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }, 50);
    }

    return () => clearInterval(interval);
  }, [typing, currentIndex]); // Removed 'titles' from dependency array

  return (
    <div id="hero" className="hero">
      <div className="text-content">
        <h2>Hello👋🏻</h2>
        <h2>I'm Aditya..!!</h2>
        <h3 className="typewriter">{displayText}<span className="cursor">|</span></h3>
        <hr className="divider" />
        <div className="cta-section">
          <p><strong>Check out my work</strong></p>
          <button className="project-btn" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
            Projects
          </button>
          <button className="resume-btn">My resume</button>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="circle-glow">
          <div className="hero-image">
            <img src="/assets/your-image.jpg" alt="adi" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;