
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';

const teamMembers = [
  "Spha Khumalo",
  "Sibusiso H. Ngwalase",
  "Mthandeni Lucky Nkosi",
  "Nomzamo Nqobile Mzobe",
  "Siphesihle Percevierence Zwane",
  "Nompumelelo Buthelezi"
];

const TeamSection = () => {
  return (
    <div className="bg-compuwhite py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-compublack">
          OUR TEAM
        </h2>
        
        <Card className="bg-gradient-to-br from-compuwhite to-gray-100 border-compugreen/20">
          <CardHeader>
            <CardTitle className="text-2xl text-compublack flex items-center">
              <Users className="mr-2 h-6 w-6 text-compugreen" />
              Meet Our Professionals
            </CardTitle>
          </CardHeader>
          <CardContent className="text-compublack/80">
            <p className="mb-6">
              The team consists of a group of professionals & up coming computer students, 
              who are keen on the development of computer literacy around our community.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">The group is as follows:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-compuwhite shadow border-compugreen/10">
                  <CardContent className="p-4 flex items-center">
                    <div className="bg-compugreen/10 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      <span className="font-bold text-compugreen">{index + 1}</span>
                    </div>
                    <span className="font-medium">{member}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-12 flex justify-center">
          <img 
            src="/lovable-uploads/3d953408-bb99-47d5-b739-856124b39788.png" 
            alt="Digital Technology" 
            className="max-w-full md:max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
