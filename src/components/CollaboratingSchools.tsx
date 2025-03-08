
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { School } from 'lucide-react';

const currentSchools = [
  "Emalahleni Primary School",
  "Utrecht Primary School",
  "Emalahleni High School (now known as uMland'omusha High School)",
  "Utrecht Pre-Primary School"
];

const targetedSchools = [
  "Utrecht Hoer School",
  "Umzilikazi High School",
  "Sgodiphola Primary School",
  "Nzimane Combined School",
  "Mhlazadolo Primary School",
  "Chitha Combined School",
  "Ntuku Primary School",
  "Ndwakazane Combined School",
  "Groenvlei Combined School",
  "Kwamagidela Secondary School",
  "KwaLembe Primary School"
];

const CollaboratingSchools = () => {
  return (
    <div className="bg-compubg py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-compuwhite">
          COLLABORATING SCHOOLS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-compuwhite/5 backdrop-blur-sm border-compugreen/20">
            <CardHeader>
              <CardTitle className="text-2xl text-compuwhite flex items-center">
                <School className="mr-2 h-6 w-6 text-compugreen" />
                Current Partners
              </CardTitle>
            </CardHeader>
            <CardContent className="text-compuwhite/90">
              <p className="mb-4">
                We have been working with a few schools around the Utrecht community & these schools are as follows:
              </p>
              <ul className="space-y-2">
                {currentSchools.map((school, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-compugreen mr-2">•</span>
                    {school}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-compuwhite/5 backdrop-blur-sm border-compugreen/20">
            <CardHeader>
              <CardTitle className="text-2xl text-compuwhite flex items-center">
                <School className="mr-2 h-6 w-6 text-compugreen" />
                Targeted Schools
              </CardTitle>
            </CardHeader>
            <CardContent className="text-compuwhite/90">
              <p className="mb-4">
                We are in the process of talking & expanding the programme to other schools around Utrecht community and surrounding communities:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {targetedSchools.map((school, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-compugreen mr-2">•</span>
                    <span>{school}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 flex justify-center">
          <img 
            src="/lovable-uploads/90629e08-15d3-4679-836b-eaaefd3c609b.png" 
            alt="Computer Display" 
            className="max-w-full md:max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CollaboratingSchools;
