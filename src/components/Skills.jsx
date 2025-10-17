import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faRocket, 
  faLightbulb, 
  faSeedling, 
  faPalette, 
  faUsers,
  faWandMagic,
  faPaintBrush,
  faDesktop,
  faMobileAlt
} from "@fortawesome/free-solid-svg-icons";
import '../css/Skills.css';

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: "Design Craft",
      icon: faPalette,
      description: "Mastering the tools that bring creative visions to life",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Adobe Creative Suite", level: 90 },
        { name: "Sketch", level: 85 },
        { name: "Prototyping", level: 88 },
        { name: "Illustration", level: 82 },
        { name: "Typography", level: 90 },
      ],
      gradient: "linear-gradient(135deg, var(--primary), var(--accent-1))"
    },
    {
      title: "UX Strategy",
      icon: faUsers,
      description: "Human-centered approaches that drive meaningful experiences",
      skills: [
        { name: "Design Thinking", level: 95 },
        { name: "User Research", level: 85 },
        { name: "Wireframing", level: 92 },
        { name: "Usability Testing", level: 88 },
        { name: "Information Architecture", level: 87 },
        { name: "Journey Mapping", level: 83 },
      ],
      gradient: "linear-gradient(135deg, var(--accent-1), var(--accent-2))"
    },
    {
      title: "Brand Identity",
      icon: faWandMagic, // Changed from faMagicWand to faWandMagic
      description: "Creating memorable visual identities that tell unique stories",
      skills: [
        { name: "Logo Design", level: 94 },
        { name: "Brand Systems", level: 90 },
        { name: "Visual Identity", level: 92 },
        { name: "Print Design", level: 85 },
        { name: "Packaging", level: 82 },
        { name: "Art Direction", level: 88 },
      ],
      gradient: "linear-gradient(135deg, var(--accent-2), var(--primary))"
    }
  ];


  const futureSkills = [
    "Design Systems Scale",
    "Advanced Prototyping",
    "Accessibility Innovation"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timer = setTimeout(() => {
              setAnimatedSkills(skillCategories.flatMap(cat => cat.skills.map(skill => skill.name)));
            }, 300);
            return () => clearTimeout(timer);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="skills-background">
        <div className="skills-bg-shape shape-1"></div>
        <div className="skills-bg-shape shape-2"></div>
        <div className="skills-bg-shape shape-3"></div>
      </div>
      
      <div className="skills-container">
        <div className="skills-header">
          <div className="skills-badge">
            <FontAwesomeIcon icon={faRocket} />
            Expertise
          </div>
          <h2 className="skills-title">
            Crafting Digital
            <span className="title-accent"> Excellence</span>
          </h2>
          <p className="skills-subtitle">
            Blending artistic vision with technical precision to create designs 
            that not only look beautiful but solve real problems and drive results.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="skills-category"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="category-header">
                <div 
                  className="category-icon"
                  style={{ background: category.gradient }}
                >
                  <FontAwesomeIcon icon={category.icon} />
                </div>
                <div className="category-content">
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-description">{category.description}</p>
                </div>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="skill-item"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-meta">
                        <span className="skill-level">{skill.level}%</span>
                        <div className="skill-dots">
                          {[1, 2, 3, 4, 5].map((dot) => (
                            <div 
                              key={dot}
                              className={`skill-dot ${dot <= Math.ceil(skill.level / 20) ? 'active' : ''}`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ 
                          width: animatedSkills.includes(skill.name) ? `${skill.level}%` : '0%',
                          background: category.gradient
                        }}
                      >
                        <div className="progress-glow"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-evolution">
          <div className="evolution-card">
            <div className="evolution-header">
              <div className="evolution-icon">
                <FontAwesomeIcon icon={faSeedling} />
              </div>
              <div>
                <h3 className="evolution-title">Design Evolution</h3>
                <p className="evolution-subtitle">
                  Staying at the forefront of creative innovation
                </p>
              </div>
            </div>

            <p className="evolution-text">
              In the ever-evolving landscape of design, I'm continuously exploring 
              new technologies and methodologies. I'm passionate about pushing boundaries 
              and discovering innovative ways to create meaningful connections 
              between brands and their audiences.
            </p>

            <div className="evolution-topics">
              {futureSkills.map((topic, index) => (
                <span 
                  key={topic} 
                  className="evolution-topic"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {topic}
                  <span className="topic-glow"></span>
                </span>
              ))}
            </div>

            <div className="evolution-footer">
              <FontAwesomeIcon icon={faLightbulb} />
              <span>Always learning, always creating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;