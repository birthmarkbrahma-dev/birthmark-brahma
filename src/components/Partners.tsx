import { useState } from 'react';
import { cn } from '@/lib/utils';

const partners = [
  {
    id: 1,
    name: 'Sri Balaji Enterprises',
    logo: '/lovable-uploads/sri.jpeg',
    description: 'Designers, Screen & Offset Printers',
  },
  {
    id: 2,
    name: 'Nathan & Associates',
    logo: '/lovable-uploads/nt.png',
    description: 'Your friend in law',
  },
  // {
  //   id: 3,
  //   name: 'Digital Connect',
  //   logo: 'https://placehold.co/200x80/e6f0fd/1446CC?text=Digital+Connect&font=montserrat',
  //   description: 'Web development & digital infrastructure',
  // },
  // {
  //   id: 4,
  //   name: 'Global Media',
  //   logo: 'https://placehold.co/200x80/e6f0fd/1446CC?text=Global+Media&font=montserrat',
  //   description: 'Advertising & media solutions',
  // },
];

const Partners = () => {
  const [activePartner, setActivePartner] = useState(null);

  return (
    <section id="partners" className="py-24 relative overflow-hidden">
      <div className="circle-bg w-[300px] h-[300px] bg-brand-blue right-[-100px] top-[30%]"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block rounded-full bg-blue-100 text-brand-blue px-4 py-2 text-sm font-medium mb-4">
              Our Network
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted <span className="text-gradient">Partners</span>
            </h2>
            <p className="text-gray-600">
              We collaborate with industry leaders to provide comprehensive solutions 
              that meet all your marketing and branding needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-fit mx-auto justify-center">
            {partners.map((partner, index) => (
              <div
                key={partner.id}
                className={cn(
                  `corner-card initially-hidden bg-white p-0 flex flex-col items-center justify-center h-60 transition-all duration-300 cursor-pointer relative overflow-hidden border border-brand-blue`,
                  "group",
                  activePartner === partner.id ? "ring-2 ring-brand-blue" : "hover:shadow-2xl hover:-translate-y-2"
                )}
                onClick={() => setActivePartner(partner.id === activePartner ? null : partner.id)}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Brand blue accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-blue group-hover:h-full group-hover:opacity-10 transition-all duration-300 z-0"></div>
                {/* Subtle background circle */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="w-32 h-32 rounded-full bg-brand-blue opacity-10"></div>
                  {/* Watermark initial */}
                  <span className="absolute text-[6rem] font-extrabold text-brand-blue opacity-5 select-none pointer-events-none">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                {/* Logo and name */}
                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-6">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} - ${partner.description}`} 
                    className="h-20 max-w-[160px] object-contain mb-4 mx-auto"
                    loading="lazy"
                    width="160"
                    height="80"
                  />
                  <span className="font-semibold text-brand-blue text-center text-lg mt-1">
                    {partner.name}
                  </span>
                </div>
                {/* Description overlay on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-blue bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 p-4 rounded-xl">
                  <h4 className="font-bold text-white mb-2 text-center">{partner.name}</h4>
                  <p className="text-blue-100 text-sm text-center">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {activePartner && (
          <div className="corner-card p-6 animate-scale-in max-w-2xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <img 
                src={partners.find(p => p.id === activePartner).logo} 
                alt={partners.find(p => p.id === activePartner).name}
                className="h-16 mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-brand-blue">
                {partners.find(p => p.id === activePartner).name}
              </h3>
              <p className="text-gray-600">
                {partners.find(p => p.id === activePartner).description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Partners;
