// src/pages/Home.jsx
import React from "react";
import Projects from "./Projects";
import Education from "./Education";

function Home() {
  return (
    <div>
      <section id="hero" style={{ minHeight: "100vh", background: "#e3f2fd" }}>
        <h1>Welcome to My Portfolio</h1>
      </section>

      <section id="skills" style={{ minHeight: "100vh", background: "#fff9c4" }}>
        <h1>My Skills</h1>
      </section>

      <section id="projects" style={{ minHeight: "100vh", background: "#c8e6c9" }}>
        <Projects />
      </section>

      {/* ✅ Education section directly after projects */}
      <section id="education">
        <Education />
      </section>

      <section id="contact" style={{ minHeight: "100vh", background: "#ffcdd2" }}>
        <h1>Contact Me</h1>
      </section>
    </div>
  );
}

export default Home;
