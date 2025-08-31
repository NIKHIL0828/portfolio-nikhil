// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-links">
          <a href="https://github.com/NIKHIL0828" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/nikhil-sonkar-036a8a264" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/nikhil_sonkar__07?igsh=Z29ldjF6MXdwOXQ4" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} Nikhil Sonkar. All Rights Reserved.</p>
          <p>Built with ❤️ and React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;