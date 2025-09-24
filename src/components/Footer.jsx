import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="brand-section">
            <div className="brand-logo">Designer</div>
          </div>

          <div className="made-with">
            <span>Made with</span>
            <i className="fas fa-heart heart-icon"></i>
            <span>for great design</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Designer Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
