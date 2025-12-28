import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Star, Search, Layout, CheckCircle, Heart, AlertTriangle } from 'lucide-react';

const services = [
  {
    id: 'brand',
    icon: <Star className="h-6 w-6" />,
    title: 'Brand Identity Services',
    description: 'Create a unique and memorable brand identity that resonates with your target audience.',
    items: [
      'Logo Creation, Color Scheme, and Unification',
      'Professional Brand Naming Services',
      'Brand Voice and Personality Development',
      'Visual Identity Guidelines'
    ]
  },
  {
    id: 'digital',
    icon: <Search className="h-6 w-6" />,
    title: 'Digital Marketing Services',
    description: 'Drive traffic, generate leads, and increase conversions with our digital marketing solutions.',
    items: [
      'Digital Promotions',
      'SEO and SEM',
      'Content Marketing',
      'Social Media Marketing & Management',
      'Social Media Analytics',
      'Conversion-Optimized Website Development',
      'UI/UX & Mobile App Development'
    ]
  },
  {
    id: 'print',
    icon: <Layout className="h-6 w-6" />,
    title: 'Print Designing Services',
    description: 'Make a lasting impression with professionally designed print materials.',
    items: [
      'Brochure Designing and Printing',
      'Creative Poster Design',
      'Pamphlets Designing and Printing',
      'Custom Name board & Standee Designing & Printing',
      'Business Cards Designing and Printing',
      'Custom T-shirt Printing Services'
    ]
  },
  {
    id: 'consulting',
    icon: <CheckCircle className="h-6 w-6" />,
    title: 'Strategic Consulting Services',
    description: 'Get expert guidance on your marketing and branding strategies.',
    items: [
      'Email Marketing Services',
      'Event Promotion',
      'Product / Idea Validation Services',
      'Concept Testing Services',
      'Business Restructuring Services (BRS)',
      'Strategic Marketing Planning and Implementation'
    ]
  },
  {
    id: 'lead',
    icon: <AlertTriangle className="h-6 w-6" />,
    title: 'Lead Generation Services',
    description: 'Attract qualified prospects and convert them into customers.',
    items: [
      'Digital Lead Generation',
      'Events & Campaigning',
      'Survey Collection and analysis',
      'Customer study'
    ]
  },
  {
    id: 'management',
    icon: <Heart className="h-6 w-6" />,
    title: 'Brand Management Services',
    description: 'Maintain and enhance your brand\'s reputation and value.',
    items: [
      'Custom Brand Handbook Development',
      'Brand Collateral Development',
      'Sales Funnel Development and Outreach Strategies',
      'Advertising',
      'Package designing'
    ]
  }
];

const ServiceCard = ({ service, isActive, onClick }) => {
  return (
    <div 
      className={cn(
        "service-card initially-hidden transition-all duration-300 cursor-pointer group",
        isActive ? "border-2 border-brand-blue" : ""
      )}
      onClick={onClick}
    >
      <div className="flex items-center space-x-3 mb-3">
        <div className={cn(
          "p-2 rounded-lg transition-colors",
          isActive ? "bg-brand-blue text-white" : "bg-blue-100 text-brand-blue group-hover:bg-brand-blue group-hover:text-white"
        )}>
          {service.icon}
        </div>
        <h3 className="font-bold text-lg">{service.title}</h3>
      </div>
      <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
      
      <div className="mt-4 animate-fade-in">
        <ul className="space-y-2">
          {service.items.map((item, idx) => (
            <li key={idx} className="flex items-center text-sm text-gray-600 animate-slide-in-bottom" style={{animationDelay: `${idx * 0.1}s`}}>
              <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mr-2"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Services = () => {
  const [activeService, setActiveService] = useState('brand');

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="circle-bg w-[400px] h-[400px] bg-brand-lightBlue right-[-200px] top-[10%]"></div>
      <div className="circle-bg w-[300px] h-[300px] bg-brand-blue left-[-100px] bottom-[10%]"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block rounded-full bg-blue-100 text-brand-blue px-4 py-2 text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive <span className="text-gradient">Marketing Solutions</span>
          </h2>
          <p className="text-gray-600">
            We offer a wide range of marketing and branding services to help businesses establish
            a strong presence in the market and connect with their target audience effectively.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              service={service}
              isActive={activeService === service.id}
              onClick={() => setActiveService(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
