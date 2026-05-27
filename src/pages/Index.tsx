import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Features from '@/components/Features';
import CustomScrollbar from '@/components/CustomScrollbar';
import Technologies from '@/components/Technologies';
import MouseTrail from '@/components/MouseTrail';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MouseTrail />
      <CustomScrollbar />
      <Navbar />
      <main className="flex-grow text-white relative">
        <Hero />
        <Technologies />
        <About />
        <Features />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
