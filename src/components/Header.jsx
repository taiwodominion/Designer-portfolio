// // import React, { useState, useEffect } from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// // import '../css/Header.css'

// // const Header = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [isScrolled, setIsScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 50);
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const scrollToSection = (id) => {
// //     const element = document.getElementById(id);
// //     element?.scrollIntoView({ behavior: 'smooth' });
// //     setIsMenuOpen(false);
// //   };

// //   return (
// //     <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
// //       <nav className="navbar">
// //         <div className="navbar-inner">
// //           <div className="brand-logo">
// //             Roland Gideon
// //           </div>
          
// //           <div className="desktop-links">
// //             {['About', 'Services', 'Portfolio', 'Skills', 'Contact'].map((item) => (
// //               <button
// //                 key={item}
// //                 onClick={() => scrollToSection(item.toLowerCase())}
// //                 className="desktop-link"
// //               >
// //                 {item}
// //               </button>
// //             ))}
// //           </div>

// //           <button
// //             className="menu-toggle"
// //             onClick={() => setIsMenuOpen(!isMenuOpen)}
// //           >
// //             {isMenuOpen ? (
// //               <FontAwesomeIcon icon={faTimes} size="lg" />
// //             ) : (
// //               <FontAwesomeIcon icon={faBars} size="lg" />
// //             )}
// //           </button>
// //         </div>

// //         {isMenuOpen && (
// //           <div className="mobile-nav">
// //             <div className="mobile-nav-inner">
// //               {['About', 'Services', 'Portfolio', 'Skills', 'Contact'].map((item) => (
// //                 <button
// //                   key={item}
// //                   onClick={() => scrollToSection(item.toLowerCase())}
// //                   className="mobile-link"
// //                 >
// //                   {item}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         )}
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Header;

// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import '../css/Header.css';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('About');

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
      
//       // Update active section based on scroll position
//       const sections = ['About', 'Services', 'Portfolio', 'Skills', 'Contact'];
//       const current = sections.find(section => {
//         const element = document.getElementById(section.toLowerCase());
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });
//       if (current) setActiveSection(current);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const offset = 80; // Account for header height
//       const elementPosition = element.offsetTop - offset;
//       window.scrollTo({
//         top: elementPosition,
//         behavior: 'smooth'
//       });
//     }
//     setIsMenuOpen(false);
//   };

//   const navItems = ['About', 'Services', 'Portfolio', 'Skills', 'Contact'];

//   return (
//     <header className={`site-header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
//       <div className="header-container">
//         <nav className="navbar">
//           <div className="nav-content">
//             <div className="brand-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
//               <span className="logo-gradient">Roland Gideon</span>
//             </div>
            
//             <div className="desktop-nav">
//               {navItems.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item.toLowerCase())}
//                   className={`nav-link ${activeSection === item ? 'active' : ''}`}
//                 >
//                   <span className="link-text">{item}</span>
//                   <span className="link-dot"></span>
//                 </button>
//               ))}
//             </div>

//             <button
//               className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               aria-label="Toggle menu"
//             >
//               <div className="hamburger">
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </div>
//             </button>
//           </div>

//           {/* Mobile Menu Overlay */}
//           <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
          
//           {/* Mobile Menu */}
//           <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
//             <div className="mobile-nav-header">
//               <div className="mobile-logo">RG</div>
//               <button 
//                 className="close-menu"
//                 onClick={() => setIsMenuOpen(false)}
//                 aria-label="Close menu"
//               >
//                 <FontAwesomeIcon icon={faTimes} />
//               </button>
//             </div>
            
//             <div className="mobile-nav-items">
//               {navItems.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item.toLowerCase())}
//                   className={`mobile-nav-link ${activeSection === item ? 'active' : ''}`}
//                 >
//                   <span>{item}</span>
//                   <FontAwesomeIcon icon={faChevronRight} className="link-arrow" />
//                 </button>
//               ))}
//             </div>
            
//             <div className="mobile-nav-footer">
//               <button 
//                 className="mobile-cta"
//                 onClick={() => scrollToSection('contact')}
//               >
//                 Let's Work Together
//               </button>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;



import { useState, useEffect } from 'react';
import "../css/Header.css"
// import { FaCode, FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Optional: Update active link based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeMobileMenu();
  };

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <nav className="navbar">
          <a href="/" className="logo" onClick={() => handleLinkClick('home')}>
            {/* <FaCode className="logo-icon" /> */}
            <span>Roland Gideon</span>
          </a>
          
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <a 
                href="#" 
                onClick={() => handleLinkClick('home')} 
                className={activeLink === 'home' ? 'active' : ''}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={() => handleLinkClick('about')} 
                className={activeLink === 'about' ? 'active' : ''}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={() => handleLinkClick('projects')} 
                className={activeLink === 'projects' ? 'active' : ''}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={() => handleLinkClick('contact')} 
                className={activeLink === 'contact' ? 'active' : ''}
              >
                Contact
              </a>
            </li>
          </ul>
          
          <div className="theme-toggle" id="themeToggle" onClick={toggleTheme}>
            {/* <FaSun className={darkMode ? '' : 'active'} />
            <FaMoon className={darkMode ? 'active' : ''} /> */}
          </div>
          
          <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} id="hamburger" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;