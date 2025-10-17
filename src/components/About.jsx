// import myPic from "../assets/../assets/gideon_pic.jpg"
// import "../css/About.css"

// const About = () => {
//   return (
//     <section id="about">
//       <div className="container">
//         <h1 className="section-title">About Me</h1>
        
//         <div className="about">
//           <div className="about-content">
//             <div className="about-text">
//               <p>I'm a passionate frontend developer with 1+ years of experience crafting modern web applications. What began as curiosity about how websites work has blossomed into a full-fledged love for creating digital experiences that users adore.</p>
//               <p>I specialize in crafting pixel-perfect, responsive interfaces with clean, efficient code. I believe in the power of design and technology to create meaningful experiences that make people's lives better.</p>
//               <p>When I'm not coding, you can find me reading tech blogs, gaming with friends, or exploring new JavaScript frameworks in my free time.</p>
              
//               <div className="about-skills">
//                 <span className="skill">HTML5</span>
//                 <span className="skill">CSS3</span>
//                 <span className="skill">JavaScript</span>
//                 <span className="skill">React.Js</span>
//                 <span className="skill">UI/UX</span>
//                 <span className="skill">Responsive Design</span>
//                 <span className="skill">Web Performance</span>
//                 <span className="skill">API Integration</span>
//                 <span className="skill">Git</span>
//                 <span className="skill">Accessibility</span>
//               </div>
//             </div>
            
//             <div className="about-image">
//               <img src={myPic} alt="Taiwo Dominion working" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import myPic from "../assets/../assets/gideon_pic.jpg"
import foodifyImg from "../assets/../assets/foodify.jpg"

import "../css/About.css"

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h1 className="section-title">About Me</h1>
        
        <div className="about">
          <div className="about-content">
            <div className="about-image">
              <img src={foodifyImg} alt="Roland Gideon designing" />
            </div>
            <div className="about-text">
              <p>I'm a passionate UI/UX and graphics designer dedicated to creating visually striking and user-friendly digital experiences. My journey began with a deep interest in how design influences emotions and user behavior, which has now evolved into a creative career blending aesthetics with functionality.</p>
              <p>I specialize in crafting intuitive interfaces, engaging visuals, and brand identities that communicate clearly and beautifully. My design process focuses on empathy, balance, and detail — ensuring every project not only looks great but feels effortless to use.</p>
              <p>When I'm not designing, you’ll find me exploring new design trends, refining my creative techniques, or sketching new concepts for upcoming projects.</p>
              
              <div className="about-skills">
                <span className="skill">UI/UX Design</span>
                <span className="skill">Graphics Design</span>
                <span className="skill">Figma</span>
                <span className="skill">Adobe Photoshop</span>
                <span className="skill">Adobe Illustrator</span>
                <span className="skill">Prototyping</span>
                <span className="skill">Wireframing</span>
                <span className="skill">Brand Identity</span>
                <span className="skill">User Research</span>
                <span className="skill">Visual Design</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
