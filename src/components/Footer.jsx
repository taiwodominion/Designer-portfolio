import React from "react";
import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="brand-section">
            <div className="brand-logo">Roland Gideon</div>
          </div>

          <div className="made-with">
            <span>Made with</span>
            <FontAwesomeIcon icon={faHeart} />
            <i className="fas fa-heart heart-icon"></i>
            <span>from me </span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Roland Gideon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
