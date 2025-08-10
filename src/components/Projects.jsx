// src/components/Projects.jsx
import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-icon"></div>
          <h3>AADHAR</h3>
          <p>
            AADHAR is a global non-profit platform where people share health,
            food, education needs, and helpers can directly contact them for
            helping.
          </p>
        </div>
        <div className="project-card">
          <div className="project-icon"></div>
          <h3>College Predictor</h3>
          <p>This website predicts eligible colleges from JEE/CET percentile and lets you filter by preferred branch.</p>
        </div>
        <div className="project-card">
          <div className="project-icon"></div>
          <h3>CodeX club</h3>
          <p>
            A website developed for CodeX Club.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
