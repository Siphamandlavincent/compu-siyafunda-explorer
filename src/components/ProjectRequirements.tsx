
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Laptop, Wifi, Printer, Shirt
} from 'lucide-react';

const requirements = [
  {
    icon: <Laptop className="h-6 w-6" />,
    title: "Computers/Laptops",
    description: "15 - 20 Computers or Laptops"
  },
  {
    icon: <Wifi className="h-6 w-6" />,
    title: "Internet",
    description: "Mobile Internet (preferably Uncapped with 50 Mbps up / 20 Mbps down)"
  },
  {
    icon: <Printer className="h-6 w-6" />,
    title: "Printers",
    description: "Printers x4 (1x Mono Colour A4 / 2x Full Colour & Full Colour A3...)"
  },
  {
    icon: <Shirt className="h-6 w-6" />,
    title: "Branded Items",
    description: "Branded Uniform & Promotional (i.e. stationery / promo bags / T-Shirts + much more...)"
  }
];

const ProjectRequirements = () => {
  return (
    <div className="bg-compubg py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-compuwhite">
          PROJECT REQUIREMENTS
        </h2>
        
        <Card className="bg-compuwhite/5 backdrop-blur-sm border-compugreen/20">
          <CardHeader>
            <CardTitle className="text-2xl text-compuwhite">Equipment & Requirements</CardTitle>
          </CardHeader>
          <CardContent className="text-compuwhite/90">
            <p className="mb-6">
              Operating in a semi rural area of Utrecht, where we are also a bit far from urban areas 
              to access some of the required equipment & other requirements to sustain the CompU Siyafunda 
              project. We are currently looking standard technology based equipment to help sustain the project.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-compugreen/20 p-3 rounded-lg mr-4">
                    {req.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-compuwhite">{req.title}</h3>
                    <p className="text-compuwhite/80">{req.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="mt-8 italic text-compuwhite/70">
              * Our quotation is available at request...
            </p>
          </CardContent>
        </Card>
        
        <div className="mt-12 flex justify-center">
          <img 
            src="/lovable-uploads/5530dbef-3cd5-44dc-8658-c7542f8bc0ab.png" 
            alt="USB Drive" 
            className="max-w-full md:max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectRequirements;
