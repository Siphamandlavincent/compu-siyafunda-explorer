
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgramFeatures from '@/components/ProgramFeatures';
import HexagonPattern from '@/components/HexagonPattern';

const Programme = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="relative bg-compubg py-16 md:py-24">
          <div className="container px-4 md:px-6 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-compuwhite">
              Our <span className="text-compugreen">Programme</span>
            </h1>
            <p className="text-compuwhite/90 text-lg max-w-3xl">
              Discover the features and benefits of our educational programme 
              aimed at building digital literacy in the Utrecht community.
            </p>
          </div>
          <HexagonPattern />
        </div>
        
        <ProgramFeatures />
        
        <div className="bg-compubg py-16">
          <div className="container px-4 md:px-6">
            <div className="bg-compuwhite/5 backdrop-blur-sm border-compugreen/20 rounded-lg p-6 md:p-8">
              <h2 className="text-3xl font-bold mb-6 text-compuwhite">
                Programme Schedule
              </h2>
              <p className="text-compuwhite/90 mb-4">
                Our programme runs during school hours for partner schools and on Saturdays for 
                interested community members. The curriculum is designed to be accessible for 
                beginners while providing a strong foundation in essential computer skills.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-compuwhite/10 rounded-lg p-5">
                  <h3 className="text-xl font-semibold text-compugreen mb-3">School Programme</h3>
                  <ul className="space-y-2 text-compuwhite/80">
                    <li>• Weekly sessions during school hours</li>
                    <li>• Custom schedule designed with school administration</li>
                    <li>• Integration with existing curriculum</li>
                    <li>• Hands-on practical sessions</li>
                  </ul>
                </div>
                <div className="bg-compuwhite/10 rounded-lg p-5">
                  <h3 className="text-xl font-semibold text-compugreen mb-3">Community Programme</h3>
                  <ul className="space-y-2 text-compuwhite/80">
                    <li>• Saturday sessions from 9:00 AM to 1:00 PM</li>
                    <li>• Open to all interested community members</li>
                    <li>• Group-based learning approach</li>
                    <li>• Project-based assessments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Programme;
