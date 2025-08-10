// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with EmailJS or other email services
    alert('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="contact-subtitle">
            Have a project in mind? Let's discuss how we can bring your ideas to life!
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info Cards */}
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon email-icon">
                <span>📧</span>
              </div>
              <h4>Email</h4>
              <p>aditya.kadam01354@gmail.com</p>
              <a href="mailto:aditya.kadam01354@gmail.com" className="contact-link">
                Send Email
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon phone-icon">
                <span>📱</span>
              </div>
              <h4>Phone</h4>
              <p>+91 84327 07038</p>
              <a href="tel:+91 8432707038" className="contact-link">
                Call Now
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon location-icon">
                <span>📍</span>
              </div>
              <h4>Location</h4>
              <p>Pune, Maharashtra</p>
              <p className="location-detail">India</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <div className="form-header">
              <h3>Send me a message</h3>
              <p>I'll respond within 24 hours</p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="form-textarea"
                  rows="5"
                />
              </div>
              
              <button type="submit" className="form-submit">
                <span>Send Message</span>
                <span className="submit-icon">🚀</span>
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="contact-social">
          <h4>Connect with me</h4>
          <div className="social-links-contact">
            <a href="https://www.linkedin.com/in/aditya-kadam-757b68255/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              <span><img src="/assets/linkedin.png" alt="" /></span>
              LinkedIn
            </a>
            <a href="https://github.com/adikadam01" target="_blank" rel="noopener noreferrer" className="social-link github">
              <span><img src="/assets/outline.png" alt="" /></span>
              GitHub
            </a>
            <a href="https://discord.com/channels/@me" target="_blank" rel="noopener noreferrer" className="social-link twitter">
              <span><img src="/assets/discord.png" alt="" /></span>
              Discord
            </a>
            <a href="https://instagram.com/aditya-kadam" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              <span><img src="/assets/video.png" alt="" /></span>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;