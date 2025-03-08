
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectBreakdown from '@/components/ProjectBreakdown';
import ServiceHistory from '@/components/ServiceHistory';
import TeamSection from '@/components/TeamSection';
import HexagonPattern from '@/components/HexagonPattern';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="relative bg-compubg py-16 md:py-24">
          <div className="container px-4 md:px-6 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-compuwhite">
              About <span className="text-compugreen">Us</span>
            </h1>
            <p className="text-compuwhite/90 text-lg max-w-3xl">
              Learn more about Compu Siyafunda, our mission, history, and the team behind this
              educational initiative to bring digital literacy to communities in Utrecht and beyond.
            </p>
          </div>
          <HexagonPattern />
        </div>
        
        <ProjectBreakdown />
        <ServiceHistory />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
