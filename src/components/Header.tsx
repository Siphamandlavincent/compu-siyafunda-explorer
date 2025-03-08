
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programme', href: '/programme' },
  { label: 'Schools', href: '/schools' },
  { label: 'Requirements', href: '/requirements' },
  { label: 'Contact', href: '/contact' },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-compubg/90 backdrop-blur-sm border-b border-compugreen/20">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative h-14 w-14">
            <img 
              src="/lovable-uploads/18f03869-26c8-49cb-92b0-8695835b95c8.png" 
              alt="Compu Siyafunda Logo" 
              className="object-contain h-full"
            />
          </div>
          <div className="hidden md:flex flex-col">
            <span className="text-xl font-bold text-compuwhite">
              COMP<span className="text-compugreen">U</span>SIYAFUNDA
            </span>
            <span className="text-xs text-compuwhite tracking-wider">A FUTURE IN COMPUTING</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-compuwhite hover:text-compugreen transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden bg-transparent border-compugreen">
              <Menu className="h-5 w-5 text-compugreen" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-compubg border-l border-compugreen/20">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-compuwhite hover:text-compugreen transition-colors py-2 text-lg"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
