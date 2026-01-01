import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Expertise from '../components/Expertise';
import Experience from '../components/Experience';
import Work from '../components/Work';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Work />
        <Experience />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
