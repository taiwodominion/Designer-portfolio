import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faAward, faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
import displayPic from '../assets/gideon_pic.jpg';
import '../css/About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <div className={`about-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="section-title">
            About <span className="title-accent">Me</span>
          </h2>
          <p className="section-subtitle">
            I'm a passionate freelance designer who believes great design is the perfect marriage of form and function
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3 className="about-title">My Design Philosophy</h3>
            <p className="about-paragraph">
              With over 5 years of experience in UI/UX and graphic design, I've had the privilege of working with 
              startups, agencies, and established brands. My approach combines strategic thinking with creative 
              execution to deliver designs that not only look stunning but drive real business results.
            </p>
            <p className="about-paragraph">
              I believe in the power of simplicity, the importance of accessibility, and the magic that happens 
              when technology meets human emotion. Every project is an opportunity to solve problems, tell stories, 
              and create experiences that matter.
            </p>
            
            <div className="skills-tags">
              <span className="skill-tag">UI/UX Design</span>
              <span className="skill-tag">Graphic Design</span>
              <span className="skill-tag">Prototyping</span>
              <span className="skill-tag">Brand Identity</span>
              <span className="skill-tag">Web Design</span>
              <span className="skill-tag">Mobile Apps</span>
            </div>
          </div>

          <div className="about-image">
            <img src={displayPic} alt="Designer portrait" className="about-img" />
            <div className="image-accent">
              <span>✨</span>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h3 className="values-title">What Drives Me</h3>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <FontAwesomeIcon icon={faUsers} size="lg" />
              </div>
              <h4 className="value-title">User-Centered</h4>
              <p className="value-desc">Every design decision is made with the user in mind</p>
            </div>

            <div className="value-item">
              <div className="value-icon">
                <FontAwesomeIcon icon={faAward} size="lg" />
              </div>
              <h4 className="value-title">Quality First</h4>
              <p className="value-desc">Attention to detail in every pixel and interaction</p>
            </div>

            <div className="value-item">
              <div className="value-icon">
                <FontAwesomeIcon icon={faCoffee} size="lg" />
              </div>
              <h4 className="value-title">Collaborative</h4>
              <p className="value-desc">Working closely with clients to achieve their vision</p>
            </div>

            <div className="value-item">
              <div className="value-icon">
                <FontAwesomeIcon icon={faHeart} size="lg" />
              </div>
              <h4 className="value-title">Passionate</h4>
              <p className="value-desc">Genuine love for creating beautiful, functional designs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
