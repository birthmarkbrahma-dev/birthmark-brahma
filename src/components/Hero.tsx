import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import React, { useState } from "react";

const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative min-h-screen pt-24 flex items-center bg-gradient-to-br from-white to-blue-50 overflow-hidden">

      {/* Decorative elements */}
      <div className="circle-bg w-[300px] h-[300px] bg-brand-blue left-[-100px] top-[20%] animate-spin-slow"></div>
      <div className="circle-bg w-[400px] h-[400px] bg-brand-lightBlue right-[-150px] bottom-[-100px] animate-spin-slow"></div>
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in-left" style={{animationDelay: '0.2s'}}>
            {/* <div className="rounded-full bg-blue-50 text-brand-blue px-4 py-2 inline-block text-sm font-medium">
              Marketing & Branding Consultancy
            </div> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Your Ultimate <span className="text-gradient">Marketing Odyssey</span> Begins Here
            </h1>
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-6">
              We build powerful brands, scalable marketing systems, and SaaS products that help businesses grow faster, smarter, and sustainably.</p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-brand-blue hover:bg-brand-lightBlue transition-all"
                onClick={() => {
                  const contact = document.getElementById('contact');
                  if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a
  href="/lovable-uploads/brochure.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    size="lg"
    className="text-base md:text-lg py-3 px-8"
  >
    See Our Brochure
  </Button>
</a>

              <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-3xl w-full h-[80vh] flex flex-col p-0">
                  <iframe 
                    src="/lovable-uploads/brochure.pdf" 
                    title="Brochure PDF" 
                    className="w-full h-full rounded-b-lg" 
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="relative hidden md:flex justify-center animate-slide-in-right" style={{animationDelay: '0.4s'}}>
            <div className="relative z-10">
              <div className="corner-card corner-clip max-w-[440px] max-h-[420px] overflow-hidden mx-auto">
                <img 
                  src="/lovable-uploads/bb_hero.png" 
                  alt="Birthmark Brahma - Professional marketing and branding workspace showcasing our expertise in brand development and digital marketing solutions" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="800"
                  height="800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
