
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CollaboratingSchools from '@/components/CollaboratingSchools';
import HexagonPattern from '@/components/HexagonPattern';

const Schools = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="relative bg-compubg py-16 md:py-24">
          <div className="container px-4 md:px-6 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-compuwhite">
              Partner <span className="text-compugreen">Schools</span>
            </h1>
            <p className="text-compuwhite/90 text-lg max-w-3xl">
              Learn about the schools we currently work with and our plans for expansion
              to more educational institutions in the Utrecht area.
            </p>
          </div>
          <HexagonPattern />
        </div>
        
        <CollaboratingSchools />
        
        <div className="bg-compuwhite py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-compublack">School Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 border border-compugreen/20">
                <h3 className="text-xl font-semibold text-compublack mb-3">Emalahleni Primary School</h3>
                <p className="text-gray-700 mb-4">
                  The computer lab setup at Emalahleni Primary has enabled over 200 students 
                  to gain access to computers for the first time. Students have shown remarkable 
                  improvement in their digital literacy skills.
                </p>
                <div className="mt-4 text-sm text-gray-500 italic">
                  "The Compu Siyafunda initiative has transformed our school's approach to technology education."
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-compugreen/20">
                <h3 className="text-xl font-semibold text-compublack mb-3">Utrecht Primary School</h3>
                <p className="text-gray-700 mb-4">
                  Our programme at Utrecht Primary has helped streamline administrative procedures 
                  through SA-SAMS implementation and training, while providing students with 
                  essential computer skills training.
                </p>
                <div className="mt-4 text-sm text-gray-500 italic">
                  "The support we've received has significantly improved both our administrative efficiency and student engagement."
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

export default Schools;
