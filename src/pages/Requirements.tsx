
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectRequirements from '@/components/ProjectRequirements';
import HexagonPattern from '@/components/HexagonPattern';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const Requirements = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="relative bg-compubg py-16 md:py-24">
          <div className="container px-4 md:px-6 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-compuwhite">
              Project <span className="text-compugreen">Requirements</span>
            </h1>
            <p className="text-compuwhite/90 text-lg max-w-3xl">
              Learn about the equipment and resources needed to sustain and expand 
              the Compu Siyafunda initiative in the Utrecht community.
            </p>
          </div>
          <HexagonPattern />
        </div>
        
        <ProjectRequirements />
        
        <div className="bg-compuwhite py-16">
          <div className="container px-4 md:px-6">
            <div className="bg-compugreen/10 rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold mb-6 text-compublack">Request a Detailed Quotation</h2>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                We provide detailed quotations for all of our project requirements. 
                If you are interested in supporting our initiative, please contact us 
                to receive a comprehensive breakdown of costs.
              </p>
              <Button className="bg-compugreen hover:bg-compugreen/90 text-compublack font-semibold">
                <Download className="mr-2 h-4 w-4" />
                Request Quotation
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Requirements;
