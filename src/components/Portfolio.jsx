import React from "react";
import "../css/Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Mobile App",
      image:
        "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Complete mobile app redesign focusing on user experience and conversion optimization",
      tags: ["UI/UX", "Mobile", "Figma"],
    },
    {
      id: 1,
      title: "E-commerce Mobile App",
      image:
        "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Complete mobile app redesign focusing on user experience and conversion optimization",
      tags: ["UI/UX", "Mobile", "Figma"],
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="section-title">
            My <span className="title-highlight">Work</span>
          </h2>
          <p className="section-subtitle">
            A showcase of recent projects that demonstrate my design skills and
            creativity.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-actions">
                    <button className="portfolio-btn">
                      <i className="fas fa-external-link-alt"></i>
                    </button>
                    <button className="portfolio-btn">
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="portfolio-details">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>

                <div className="portfolio-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="portfolio-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <p className="cta-text">
            Want to see more of my work or discuss your project?
          </p>
          <button className="btn-primary">View Full Portfolio</button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
