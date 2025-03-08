
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import HexagonPattern from './HexagonPattern';

const ProjectBreakdown = () => {
  return (
    <div className="relative bg-compuwhite py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-compublack">
          PROJECT BREAKDOWN
        </h2>
        
        <Card className="bg-compuwhite border-compugreen/20 relative overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl text-compublack">An Educational Programme</CardTitle>
          </CardHeader>
          <CardContent className="text-compublack/80 text-lg space-y-4 relative z-10">
            <p>
              An educational programme planned for schools around Utrecht & surrounding communities, 
              extended to interested members of our community on Saturdays.
            </p>
            <p>
              The programme focuses on building an educational bridge especially within our small 
              collective communities into the ever growing digital world.
            </p>
            <p>
              Put together by Spha IT Solutions and a team of computer & media professionals who are 
              driven by the understanding of the importance of services linked to computers, especially 
              with the concept of the 4th Industrial Revolution as a global phenomenon that is still 
              limited to a lot of communities around the continent in general.
            </p>
          </CardContent>
          <div className="absolute right-0 bottom-0 opacity-30">
            <HexagonPattern />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProjectBreakdown;
