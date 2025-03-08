
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ServiceHistory = () => {
  return (
    <div className="bg-compubg py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3 text-compuwhite">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our History</h2>
            <Card className="bg-compuwhite/5 backdrop-blur-sm border-compugreen/20">
              <CardContent className="p-6 text-compuwhite/90 space-y-4">
                <p>
                  We started our service as consultancy, working on a part time bases with a few 
                  Utrecht Schools. It all started with services like providing the planning & the 
                  actual setup of their computer networks, while assisting with softwares that include 
                  SA Sams & other softwares like anti-viruses...
                </p>
                <p>
                  That approach created a demand on more computer services & demands (i.e. Networking, 
                  Maintenance & various computer problems they would be experiencing at the time around 
                  their schools or working areas).
                </p>
                <p>
                  With that understanding, we started doing research around a few more schools around our 
                  community & that is when we realised the gap in parts of our service. Around 2023 we 
                  official started focusing on the interest of working within the education & development 
                  structures within our community in general.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-full max-w-xs">
              <div className="absolute inset-0 bg-compugreen/20 rounded-xl blur-xl"></div>
              <img 
                src="/lovable-uploads/d74568ab-520f-4fab-822e-b71a133d59ca.png" 
                alt="Digital Education" 
                className="relative z-10 rounded-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHistory;
