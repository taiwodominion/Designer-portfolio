import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faMobileAlt,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import '../css/Services.css'

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">My Services</h2>
          <p className="services-subtitle">
            I specialize in creating user-friendly designs and strong brand
            identities that make businesses stand out.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <FontAwesomeIcon icon={faDesktop} size="lg" />
            </div>
            <h3 className="service-title">UI/UX Design</h3>
            <p className="service-description">
              Intuitive and engaging interfaces for websites and applications.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FontAwesomeIcon icon={faMobileAlt} size="lg" />
            </div>
            <h3 className="service-title">Mobile App Design</h3>
            <p className="service-description">
              Seamless and beautiful mobile experiences for iOS and Android.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FontAwesomeIcon icon={faPalette} size="lg" />
            </div>
            <h3 className="service-title">Graphic & Brand Identity</h3>
            <p className="service-description">
              Unique logos, brand systems, and visuals that tell your story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
