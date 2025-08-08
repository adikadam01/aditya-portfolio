// src/components/About.jsx
import React from "react";

const About = () => {
  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/assets/adi resume short.pdf'; // Path to your resume file
    link.download = 'Aditya_Kadam_Resume.pdf'; // Downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResumeView = () => {
    // Open resume in new tab for viewing
    window.open('/assets/Aditya_Kadam_Resume.pdf', '_blank');
  };

  return (
    <div id="about" className="about-section">
      <div className="about-left">
        <div className="service">
          <div className="icon">💻</div>
          <h3>Website Development</h3>
        </div>
        <div className="service">
          <div className="icon">📊</div>
          <h3>Data Science</h3>
        </div>
        <div className="service">
          <div className="icon">🌐</div>
          <h3>Website Hosting</h3>
        </div>
      </div>

      <div className="about-right">
        <h2>About me</h2>
        <p>
          Hi Everyone, I'm Aditya Kadam from Pune, India. I'm a final-year BE IT
          student, a passionate problem solver, web designer, and DSA
          enthusiast. I enjoy building modern web apps and learning new
          technologies every day.
        </p>
        <h4>
          <mark>
            "In a gentle way, you can shake the world with our creativity."
          </mark>
        </h4>

        {/* Resume Section */}
        <div className="resume-section">
          <h3 className="resume-title">My Resume</h3>
          <p className="resume-description">
            Download my resume to learn more about my experience, skills, and projects.
          </p>
          
          <div className="resume-actions">
            <button 
              onClick={handleResumeDownload}
              className="resume-btn download-btn"
            >
              <span className="btn-icon">📄</span>
              Download Resume
            </button>
            
            <button 
              onClick={handleResumeView}
              className="resume-btn view-btn"
            >
              <span className="btn-icon">👁️</span>
              View Resume
            </button>
          </div>
          
          <div className="resume-info">
            <div className="resume-detail">
              <span className="detail-icon">📊</span>
              <span>Updated: June 2025</span>
            </div>
            <div className="resume-detail">
              <span className="detail-icon">📝</span>
              <span>Format: PDF</span>
            </div>
            <div className="resume-detail">
              <span className="detail-icon">⚡</span>
              <span>Size: 2.5 MB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;