import React from 'react';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Services from '../src/components/Services';
import Portfolio from '../src/components/Portfolio';
import Skills from '../src/components/Skills';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import '../src/css/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;