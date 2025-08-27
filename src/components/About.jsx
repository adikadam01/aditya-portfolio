// src/components/About.jsx
import React from "react";

const About = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/aditya resume new.pdf";
    link.download = "Aditya_Kadam_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResumeView = () => {
    window.open("/assets/Aditya_Kadam_Resume.pdf", "_blank");
  };

  return (
    <div id="about" className="about-section">
      {/* LEFT SIDE */}
      <div className="about-left">
        {/* Services */}
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

        {/* Always exploring message */}
        <div className="exploring-box">
          🚀 Always exploring new technologies!
        </div>

        {/* Tech I Learn */}
        <div className="learning-section">
          <h3 className="learning-title">Tech I Learn💡</h3>
          <div className="learning-card">
            <div className="icon">📚</div>
            <h3>Data Structures & Algorithms</h3>
          </div>
          <div className="learning-card">
            <div className="icon">⚛️</div>
            <h3>React.js</h3>
          </div>
          <div className="learning-card">
            <div className="icon">🧠</div>
            <h3>Problem Solving</h3>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
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
            Download my resume to learn more about my experience, skills, and
            projects.
          </p>

          <div className="resume-actions">
            <button
              onClick={handleResumeDownload}
              className="resume-btn download-btn"
            >
              <span className="btn-icon">📄</span>
              Download Resume
            </button>
          </div>

          <div className="resume-info">
            <div className="resume-detail">
              <span className="detail-icon">📊</span>
              <span>Updated: August 2025</span>
            </div>
            <div className="resume-detail">
              <span className="detail-icon">📝</span>
              <span>Format: PDF</span>
            </div>
            <div className="resume-detail">
              <span className="detail-icon">⚡</span>
              <span>Size: 340 KB</span>
            </div>
          </div>
        </div>

        {/* LeetCode Section */}
        <div className="leetcode-section">
          <h3 className="leetcode-title">💡 LeetCode Problem Solving</h3>
          <p className="leetcode-desc">
            Practicing algorithms and data structures daily to sharpen problem-solving skills.
          </p>
          <a
            href="https://leetcode.com/u/adikadam/" // Replace with your profile link
            target="_blank"
            rel="noopener noreferrer"
            className="leetcode-link"
          >
            View My LeetCode Profile
          </a>
        </div>

        {/* Hobbies Section */}
        <div className="hobbies-section">
          <h3 className="hobbies-title">My Hobbies🎃</h3>
          <div className="hobby-card">📷 Photography</div>
          <div className="hobby-card">✍🏻 Poetry</div>
          <div className="hobby-card">🏞️ Trekking & Travel</div>
        </div>
      </div>
    </div>
  );
};

export default About;
