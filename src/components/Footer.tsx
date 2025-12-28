
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-brand-dark text-white relative overflow-hidden">
      <div className="circle-bg w-[300px] h-[300px] bg-brand-lightBlue opacity-5 right-[-100px] top-[20%]"></div>
      <div className="circle-bg w-[200px] h-[200px] bg-brand-blue opacity-5 left-[-50px] bottom-[10%]"></div>
      
      <div className="container relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Birthmark Brahma</h3>
            <p className="text-gray-400 mb-6">
              Your Ultimate Marketing Odyssey Begins Here. We specialize in empowering brands with effective 
              marketing and branding solutions.
            </p>
            <button 
              onClick={scrollToTop}
              className="p-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#partners" className="text-gray-400 hover:text-white transition-colors">Our Partners</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Brand Identity</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Print Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Strategic Consulting</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Lead Generation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Phone: +91 97890 15661</li>
              <li className="text-gray-400">Email: admin@birthmarkbrahma.com</li>
              <li className="text-gray-400">Website: www.birthmarkbrahma.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Birthmark Brahma. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
