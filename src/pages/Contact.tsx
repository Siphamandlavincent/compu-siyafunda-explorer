
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import HexagonPattern from '@/components/HexagonPattern';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="relative bg-compubg py-16 md:py-24">
          <div className="container px-4 md:px-6 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-compuwhite">
              Contact <span className="text-compugreen">Us</span>
            </h1>
            <p className="text-compuwhite/90 text-lg max-w-3xl">
              Get in touch with our team to learn more about Compu Siyafunda or to 
              explore ways to contribute to our educational initiative.
            </p>
          </div>
          <HexagonPattern />
        </div>
        
        <ContactSection />
        
        <div className="bg-compubg py-16">
          <div className="container px-4 md:px-6">
            <div className="bg-compuwhite/5 backdrop-blur-sm border-compugreen/20 rounded-lg p-6 md:p-8">
              <h2 className="text-3xl font-bold mb-6 text-compuwhite">
                Visit Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-compuwhite/90 mb-4">
                    Our main operational center is in Utrecht, South Africa. We welcome visits by appointment to 
                    observe our programs in action and discuss potential partnerships or contributions.
                  </p>
                  <div className="space-y-3 mt-6 text-compuwhite/80">
                    <p>
                      <span className="font-semibold text-compugreen">Office Hours:</span> Monday to Friday, 8:00 AM - 4:00 PM
                    </p>
                    <p>
                      <span className="font-semibold text-compugreen">Community Programs:</span> Saturdays, 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden h-[300px] bg-gray-200">
                  {/* Placeholder for a map */}
                  <div className="w-full h-full flex items-center justify-center bg-compugreen/20">
                    <p className="text-lg font-medium text-compublack">Map of Utrecht, South Africa</p>
                  </div>
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

export default Contact;
