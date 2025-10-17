import foodifyImg from "../assets/foodify.jpg";
import lavivaImg from "../assets/laviva.jpg"
import "../css/Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: "Foodify - Mobile App Design",
      description:
        "Fodify is a food ordering app that connects users with their favorite restaurants, cafés, and food vendors. The app makes it easy to browse menus, place orders, and get meals delivered quickly. With a smooth design and simple navigation, Fodify brings convenience to food lovers by making ordering meals fast, reliable, and enjoyable.",
      technologies: ["App Design", "Figma", "User Research"],
      image: foodifyImg,
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Laviva Restaurant - Mobile App UI/UX",
      description:
        "Laviva Restaurant App is a digital reservation platform that makes dining experiences seamless. Users can easily browse available dates, select time slots, and book tables at Laviva with just a few taps. The app ensures convenience by eliminating waiting lines and helping customers secure the perfect dining experience in advance. With a clean and elegant design, Laviva reflects the luxury and hospitality of the restaurant itself.",
      technologies: ["Figma", "UI/UX Design", "Prototyping"],
      image: lavivaImg,
      liveUrl: "#",
      codeUrl: "#",
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <h1 className="section-title">My Projects</h1>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <a
                  href={project.liveUrl}
                  className="image-overlay"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live demo`}
                >
                  <span>View Project</span>
                </a>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source File
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
