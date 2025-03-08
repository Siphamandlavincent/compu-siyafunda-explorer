
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HexagonPattern from './HexagonPattern';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-compubg py-16 md:py-24">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10">
          <div className="flex items-center mb-6">
            <img 
              src="/lovable-uploads/18f03869-26c8-49cb-92b0-8695835b95c8.png" 
              alt="Compu Siyafunda Logo" 
              className="w-24 h-24 object-contain"
            />
            <div className="ml-4">
              <h1 className="text-4xl md:text-5xl font-bold text-compuwhite">
                COMP<span className="text-compugreen">U</span>SIYAFUNDA
              </h1>
              <p className="text-compuwhite text-lg md:text-xl">A FUTURE IN COMPUTING</p>
            </div>
          </div>
          
          <p className="text-compuwhite/90 text-lg mb-8 max-w-xl">
            Building an educational bridge to the digital world for schools and communities
            in Utrecht and surrounding areas. Empowering the next generation with essential
            computer skills for the 4th Industrial Revolution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-compugreen hover:bg-compugreen/90 text-compublack font-semibold">
              <Link to="/programme">
                Our Programme
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild className="bg-compugreen hover:bg-compugreen/90 text-compublack font-semibold border-compugreen">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <div className="relative w-full aspect-square md:aspect-auto md:h-[450px]">
            <img 
              src="/lovable-uploads/cc532e67-2494-4816-9575-9bc419768578.png" 
              alt="Africa Technology"
              className="w-full h-full object-contain z-10 relative"
            />
            <div className="absolute inset-0 bg-compugreen/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
      
      <HexagonPattern />
    </div>
  );
};

export default Hero;
