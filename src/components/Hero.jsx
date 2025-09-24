// import React from 'react';
// import '../css/Hero.css';

// const Hero = () => {
//   return (
//     <section className="hero-section">
//       <div className="hero-background">
//         <div className="background-circle circle-red"></div>
//         <div className="background-circle circle-orange"></div>
//       </div>

//       <div className="hero-wrapper">
//         <div className="hero-main">
//           {/* <div className="profile-avatar">
//             <div className="avatar-outline">
//               <div className="avatar-core">
//                 <span className="avatar-initials">RG</span>
//               </div>
//             </div>
//           </div> */}

//           <h1 className="hero-heading">
//             <span className="heading-gradient">
//               Roland Gideon
//             </span>
//           </h1>
          
//           <p className="hero-subtext">
//             UI/UX & Graphic Designer crafting exceptional digital experiences that blend 
//             <span className="accent-one"> beauty</span> with 
//             <span className="accent-two"> functionality</span>
//           </p>

//           <div className="hero-actions">
//             <a href='#portfolio' className="btn-primary">
//               View My Work
//             </a>
//             <a href='#Contact' className="btn-secondary">
//               Let's Connect
//             </a>
//           </div>

//           <div className="hero-metrics">
//             <div className="metric">
//               <div className="metric-value">50+</div>
//               <div className="metric-label">Projects</div>
//             </div>
//             <div className="metric">
//               <div className="metric-value">5</div>
//               <div className="metric-label">Years Exp</div>
//             </div>
//             <div className="metric">
//               <div className="metric-value">30+</div>
//               <div className="metric-label">Happy Clients</div>
//             </div>
//           </div>
//           <div className="profile-avatar">
//             <div className="avatar-outline">
//               <div className="avatar-core">
//                 <span className="avatar-initials">RG</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from 'react';
import '../css/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="background-circle circle-red"></div>
        <div className="background-circle circle-orange"></div>
      </div>

      <div className="hero-wrapper">
        <div className="hero-main">
          {/* Avatar Section - Moved to top for better mobile flow */}
          <div className="profile-avatar">
            <div className="avatar-outline">
              <div className="avatar-core">
                <span className="avatar-initials">RG</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="hero-content">
            <h1 className="hero-heading">
              <span className="heading-gradient">
                Roland Gideon
              </span>
            </h1>
            
            <p className="hero-subtext">
              UI/UX & Graphic Designer crafting exceptional digital experiences that blend 
              <span className="accent-one"> beauty</span> with 
              <span className="accent-two"> functionality</span>
            </p>

            <div className="hero-actions">
              <a href='#portfolio' className="btn-primary">
                View My Work
              </a>
              <a href='#contact' className="btn-secondary"> {/* Fixed ID */}
                Let's Connect
              </a>
            </div>

            <div className="hero-metrics">
              <div className="metric">
                <div className="metric-value">20+</div>
                <div className="metric-label">Projects</div>
              </div>
              <div className="metric">
                <div className="metric-value">3</div>
                <div className="metric-label">Years Exp</div>
              </div>
              <div className="metric">
                <div className="metric-value">20+</div>
                <div className="metric-label">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;