// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faDesktop,
//   faMobileAlt,
//   faPalette,
// } from "@fortawesome/free-solid-svg-icons";
// import '../css/Services.css'

// const Services = () => {
//   return (
//     <section id="services" className="services-section">
//       <div className="services-container">
//         <div className="services-header">
//           <h2 className="services-title">My Services</h2>
//           <p className="services-subtitle">
//             I specialize in creating user-friendly designs and strong brand
//             identities that make businesses stand out.
//           </p>
//         </div>

//         <div className="services-grid">
//           <div className="service-card">
//             <div className="service-icon">
//               <FontAwesomeIcon icon={faDesktop} size="lg" />
//             </div>
//             <h3 className="service-title">UI/UX Design</h3>
//             <p className="service-description">
//               Intuitive and engaging interfaces for websites and applications.
//             </p>
//           </div>

//           <div className="service-card">
//             <div className="service-icon">
//               <FontAwesomeIcon icon={faMobileAlt} size="lg" />
//             </div>
//             <h3 className="service-title">Mobile App Design</h3>
//             <p className="service-description">
//               Seamless and beautiful mobile experiences for iOS and Android.
//             </p>
//           </div>

//           <div className="service-card">
//             <div className="service-icon">
//               <FontAwesomeIcon icon={faPalette} size="lg" />
//             </div>
//             <h3 className="service-title">Graphic & Brand Identity</h3>
//             <p className="service-description">
//               Unique logos, brand systems, and visuals that tell your story.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;



import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faMobileAlt,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import '../css/Services.css'

const Services = () => {
  const services = [
    {
      icon: faDesktop,
      title: "UI/UX Design",
      description: "Intuitive and engaging interfaces for websites and applications that prioritize user experience and accessibility.",
      gradient: "linear-gradient(135deg, var(--primary), var(--accent-1))"
    },
    {
      icon: faMobileAlt,
      title: "Mobile App Design",
      description: "Seamless and beautiful mobile experiences for iOS and Android with native-feeling interactions.",
      gradient: "linear-gradient(135deg, var(--accent-1), var(--accent-2))"
    },
    {
      icon: faPalette,
      title: "Brand Identity",
      description: "Unique logos, brand systems, and visuals that tell your story and create lasting impressions.",
      gradient: "linear-gradient(135deg, var(--accent-2), var(--primary))"
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-background">
        <div className="services-bg-shape shape-1"></div>
        <div className="services-bg-shape shape-2"></div>
      </div>
      
      <div className="services-container">
        <div className="services-header">
          <div className="services-badge">Services</div>
          <h2 className="services-title">
            Crafting Digital
            <span className="title-accent"> Excellence</span>
          </h2>
          <p className="services-subtitle">
            Specializing in user-centric designs and memorable brand identities 
            that transform businesses and create meaningful connections.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className="service-card" 
              key={service.title}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon-wrapper">
                <div 
                  className="service-icon"
                  style={{ background: service.gradient }}
                >
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <div className="service-icon-glow"></div>
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">
                {service.description}
              </p>
              
              <div className="service-hover-indicator"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;