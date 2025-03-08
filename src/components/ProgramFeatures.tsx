
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Wrench, Download, Network, Laptop, FileCode, Globe, Cpu
} from 'lucide-react';

const features = [
  {
    icon: <Wrench className="h-8 w-8" />,
    title: "Fixing & Maintenance of Computers"
  },
  {
    icon: <Download className="h-8 w-8" />,
    title: "Installation of SA Sams Software"
  },
  {
    icon: <Network className="h-8 w-8" />,
    title: "Computer Networking (Planning / Setup)"
  },
  {
    icon: <Laptop className="h-8 w-8" />,
    title: "Teaching learners about computers"
  },
  {
    icon: <FileCode className="h-8 w-8" />,
    title: "Introduction to Softwares"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Introduction to the internet"
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "Basic Computer Skills"
  }
];

const ProgramFeatures = () => {
  return (
    <div className="bg-compuwhite py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-compublack">
          PROGRAMME FEATURES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-to-br from-compuwhite to-gray-100 border-compugreen/20 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="text-compugreen mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-compublack">{feature.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <img 
            src="/lovable-uploads/3d953408-bb99-47d5-b739-856124b39788.png" 
            alt="Digital Eye" 
            className="max-w-full md:max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgramFeatures;
