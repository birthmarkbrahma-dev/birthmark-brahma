import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'Why Us', href: '#why-us' },
    { title: 'Partners', href: '#partners' },
    // { title: 'Contact', href: '#contact' },
  ];

  return (
    <header
  className={cn(
    'fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-md',
    isScrolled ? 'py-2' : 'py-4'
  )}
>

      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/3d354298-c0f5-45e8-9fec-a4e98bb7bf83.png"
            alt="Birthmark Brahma Logo"
            className="w-8 h-8 object-contain"
          />
          <div className="text-1xl font-bold text-brand-blue">
            <span className="font-heading">Birthmark</span>
            <span className="font-heading ml-1">Brahma</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a 
              key={link.title}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-gray-800 rounded-md hover:bg-gray-100 transition-colors"

            >
              {link.title}
            </a>
          ))}
          <Button className="ml-4 bg-brand-blue hover:bg-brand-lightBlue transition-colors" onClick={() => {
            const contact = document.getElementById('contact');
            if (contact) contact.scrollIntoView({ behavior: 'smooth' });
          }}>
            Contact Us
          </Button>
        </nav>

        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-md animate-fade-in">
          <div className="container py-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a 
                  key={link.title}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </a>
              ))}
              <Button className="bg-brand-blue hover:bg-brand-lightBlue transition-colors" onClick={() => {
                setIsMobileMenuOpen(false);
                const contact = document.getElementById('contact');
                if (contact) contact.scrollIntoView({ behavior: 'smooth' });
              }}>
                Contact Us
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
