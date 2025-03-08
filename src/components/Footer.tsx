
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-compubg/90 text-compuwhite border-t border-compugreen/20">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              COMP<span className="text-compugreen">U</span>SIYAFUNDA
            </h3>
            <p className="text-sm text-compuwhite/80 max-w-md">
              An educational programme aimed at building a bridge to the digital world
              for schools around Utrecht and surrounding communities.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-compugreen" />
                <span>+27 61 079 3813</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-compugreen" />
                <span>v.khumalo@yahoo.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-compugreen" />
                <span>Utrecht, South Africa</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Partnership</h3>
            <p className="text-sm text-compuwhite/80">
              Put together by Spha IT Solutions and a team of computer & media professionals
              who are driven by the understanding of the importance of digital services.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-compugreen/10 text-center text-sm text-compuwhite/70">
          <p>© {new Date().getFullYear()} Compu Siyafunda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
