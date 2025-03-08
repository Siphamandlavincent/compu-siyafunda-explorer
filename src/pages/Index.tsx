
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProjectBreakdown from '@/components/ProjectBreakdown';
import ServiceHistory from '@/components/ServiceHistory';
import ProgramFeatures from '@/components/ProgramFeatures';
import CollaboratingSchools from '@/components/CollaboratingSchools';
import TeamSection from '@/components/TeamSection';
import ProjectRequirements from '@/components/ProjectRequirements';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProjectBreakdown />
        <ServiceHistory />
        <ProgramFeatures />
        <CollaboratingSchools />
        <TeamSection />
        <ProjectRequirements />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
