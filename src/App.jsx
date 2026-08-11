import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="madarsa-app">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Courses />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
