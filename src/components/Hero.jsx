import heroImage from "../assets/gideon_pic.jpg";
import "../css/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>Hi, I'm Roland Gideon</h1>
          <p className="hero-subtext">
            UI/UX & Graphic Designer crafting exceptional digital experiences
            that blend
            <span className="accent-one"> beauty</span> with
            <span className="accent-two"> functionality</span>
          </p>

          <div className="hero-btns">
            <a href="#projects" className="btn">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
          <div className="trust-indicators">
            <div className="indicator">
              <span className="indicator-number">5+</span>
              <span className="indicator-label">Projects</span>
            </div>
            <div className="indicator">
              <span className="indicator-number">2+</span>
              <span className="indicator-label">Years</span>
            </div>
            <div className="indicator">
              <span className="indicator-number">98%</span>
              <span className="indicator-label">Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image-container">
        <img
          src={heroImage}
          alt="Taiwo Dominion"
          className="profile-image"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
