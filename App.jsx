// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";

function App() {
  return (
    <div className="App">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background-color: #0f172a;
          color: #f8fafc;
          line-height: 1.6;
        }

        .navbar {
          width: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem 2rem;
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          color: #f8fafc;
          position: sticky;
          top: 2%;
          margin: 20px auto;
          z-index: 1000;
          font-family: 'Poppins', sans-serif;
          backdrop-filter: blur(10px);
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 1.5rem;
          margin: 0;
          padding: 0;
        }

        .nav-links li a {
          color: #f8fafc;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 400;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .nav-links li a:hover {
          color: #f87171;
        }

        .hero {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 4rem;
          flex-wrap: wrap;
          background-color: #0f172a;
          color: #f8fafc;
          min-height: 80vh;
        }

        .text-content {
          max-width: 500px;
        }

        .hero h2 {
          font-size: 4rem;
          margin: 0.2rem 0;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .hero h3 {
          font-size: 3rem;
          color: #e2e8f0;
          margin-bottom: 1.5rem;
        }

        .typewriter {
          font-weight: 500;
          color: #f8fafc;
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
        }

        .cursor {
          display: inline-block;
          margin-left: 2px;
          font-weight: bold;
          color: #f87171;
          animation: blink 0.8s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .divider {
          height: 2px;
          width: 80px;
          background: #f87171;
          margin: 1.5rem 0;
          border: none;
        }

        .cta-section {
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-top: 1rem;
        }

        .project-btn,
        .resume-btn {
          padding: 0.8rem 1.5rem;
          border: 2px solid #f87171;
          background-color: transparent;
          color: #f87171;
          font-weight: bold;
          border-radius: 6px;
          cursor: pointer;
          transition: 0.3s ease-in-out;
        }

        .project-btn {
          background-color: #f87171;
          color: #fff;
        }

        .project-btn:hover,
        .resume-btn:hover {
          background-color: #fff;
          color: #f87171;
          border-color: #fff;
        }

        .hero-image-container {
          position: relative;
          width: 300px;
          height: 300px;
          margin-top: 2rem;
        }

        .circle-glow {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(248,113,113,0.4) 40%, transparent 70%);
          display: flex;
          justify-content: center;
          align-items: center;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .hero-image {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          z-index: 2;
          box-shadow: 0 0 50px rgba(248, 113, 113, 0.4);
          transition: box-shadow 1.5s ease-in-out;
        }

        .hero-image:hover {
          box-shadow: 0 0 100px rgba(248, 113, 113, 0.6);
        }

        .skills {
          background: #1e293b;
          padding: 2rem 0;
          overflow: hidden;
          position: relative;
        }

        .skills-marquee {
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
        }

        .skills-list {
          display: inline-flex;
          animation: scrollSkills 20s linear infinite;
          list-style: none;
          gap: 3rem;
          padding: 0;
          margin: 0;
        }

        .skills-list:hover {
          animation-play-state: paused;
        }

        .skills-list li {
          font-size: 1.2rem;
          padding: 1rem;
          color: #cbd5e1;
          font-weight: 500;
        }

        @keyframes scrollSkills {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .about-section {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 4rem 2rem;
          flex-wrap: wrap;
          gap: 2rem;
          background-color: #0f172a;
          color: #f8fafc;
        }

        .about-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .service {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .service .icon {
          font-size: 2rem;
          color: #f87171;
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(248, 113, 113, 0.1);
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .about-right {
          flex: 2;
          max-width: 600px;
        }

        .about-right h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #f8fafc;
        }

        .about-right p {
          color: #cbd5e1;
          margin-bottom: 2rem;
          font-size: 1.3rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 300;
        }

        .about-right h4 {
          font-family: 'Poppins', sans-serif;
          font-size: 1.2rem;
          margin-top: 1rem;
        }

        mark {
          background-color: #f87171;
          color: white;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }

        .projects-section {
          padding: 4rem 2rem;
          background: #0f172a;
          color: #f8fafc;
          text-align: center;
        }

        .section-title {
          font-size: 2.8rem;
          margin-bottom: 3rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
        }

        .projects-grid {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 20px;
          padding: 2rem;
          width: 280px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          font-family: 'Poppins', sans-serif;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 30px rgba(248, 113, 113, 0.3);
        }

        .project-icon {
          font-size: 3rem;
          color: #f87171;
          margin-bottom: 1rem;
          width: 4rem;
          height: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(248, 113, 113, 0.1);
          border-radius: 50%;
          backdrop-filter: blur(10px);
          margin: 0 auto 1rem auto;
        }

        .education-section {
          padding: 4rem 2rem;
          background: #1e293b;
          color: #f8fafc;
          text-align: center;
        }

        .edu-container {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          margin-top: 3rem;
        }

        .edu-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .edu-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 30px rgba(248, 113, 113, 0.3);
        }

        .edu-card h3 {
          color: #f8fafc;
          margin-bottom: 1rem;
          font-size: 1.4rem;
        }

        .edu-card p {
          color: #cbd5e1;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }

        .edu-card span {
          color: #f87171;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .contact-section {
          padding: 4rem 2rem;
          background: #0f172a;
          color: #f8fafc;
          text-align: center;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 2rem;
        }

        .social-links a {
          transition: transform 0.3s ease-in-out;
          text-decoration: none;
        }

        .social-links a:hover {
          transform: scale(1.2);
        }

        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            text-align: center;
            padding: 2rem;
          }

          .hero h2 {
            font-size: 2.5rem;
          }

          .hero h3 {
            font-size: 2rem;
          }

          .about-section {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .nav-links {
            gap: 1rem;
            flex-wrap: wrap;
          }

          .nav-links li a {
            font-size: 0.9rem;
          }

          .navbar {
            padding: 0.8rem 1rem;
          }
        }
      `}</style>
      
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;