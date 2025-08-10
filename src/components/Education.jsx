// src/components/Education.jsx
import React from "react";

const Education = () => {
  return (
    <div id="education" className="education-section">
      <h2 className="section-title">My Education</h2>
      <div className="edu-container">
        <div className="edu-card">
          <div className="edu-icon">🎓</div>
          <h3>Bachelor of Engineering - IT `26</h3>
          <p>Information Technology</p>
          <p>SPPU/ PDEA's college of Engineering, Manjari(BK), Pune</p>
          <p>3rd year CGPA: 7.98</p>
          <span>2022 - 2026</span>
        </div>
        <div className="edu-card">
          <div className="edu-icon">📚</div>
          <h3>Higher Secondary (12th)</h3>
          <p>Science Stream</p>
          <p>Rashtriya college of Science, Art and Commerce, Kannad, Chhatrapati Sambhajinagar</p>
          <p>Percentage Scored: 76.60%</p>
          <span>2022</span>
        </div>
        <div className="edu-card">
          <div className="edu-icon">🏫</div>
          <h3>Secondary School (10th)</h3>
          <p>State Board</p>
          <p>Aurangabad Police Public School </p>
          <p>Percentage Scored: 84.40%</p>
          <span>2020</span>
        </div>
      </div>
    </div>
  );
};

export default Education;