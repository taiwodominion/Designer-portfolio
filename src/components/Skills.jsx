import React from "react";
import '../css/Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: "Design Tools",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Adobe Creative Suite", level: 90 },
        { name: "Sketch", level: 85 },
        { name: "Canva", level: 80 },
      ],
    },
    {
      title: "Methodologies",
      skills: [
        { name: "Design Thinking", level: 95 },
        { name: "User Research", level: 85 },
        { name: "Agile/Scrum", level: 80 },
        { name: "Design Systems", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">
            Skills & <span className="skills-highlight">Expertise</span>
          </h2>
          <p className="skills-subtitle">
            A toolkit built through experience and continuous learning.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skills-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-learning">
          <div className="learning-card">
            <h3 className="learning-title">Always Learning</h3>
            <p className="learning-text">
              The design industry evolves rapidly, and I’m committed to staying
              ahead. Currently exploring AI-assisted design, advanced
              prototyping, and emerging interaction patterns.
            </p>

            <div className="learning-topics">
              {[
                "AI Design Tools",
                "3D Design",
                "Voice UI",
                "AR/VR Interfaces",
                "Design Ops",
              ].map((topic) => (
                <span key={topic} className="learning-topic">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
