import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import TechnicalToolkit from './components/TechnicalToolkit';
import Experience from './components/Experience';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-slate-50 selection:bg-indigo-500 selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <TechnicalToolkit />
        <Work />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;