import { Check } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState, useRef } from "react";

const About = () => {
  /* ===================== DATA ===================== */

  const clients = [
    { name: "VVV Electronics", logo: "/lovable-uploads/clients/vvv-electronics.png" },
    { name: "Toppers Textiles", logo: "/lovable-uploads/clients/toppers-textiles.png" },
    { name: "HLR Plastics"},
    { name: "Firehawk Badminton Academy"},
    { name: "TTA", logo: "/lovable-uploads/clients/tta.png" },
    { name: "Greenplify", logo: "/lovable-uploads/clients/greenplify.png" },
    { name: "Intelli Architecture", logo: "/lovable-uploads/clients/intelliarch.png" },
    { name: "The investing League", logo: "/lovable-uploads/clients/theinvestingleague.png" },
    { name: "Flower minds", logo: "/lovable-uploads/clients/flourishminds.png" },
    { name: "Jee Boom Baa", logo: "/lovable-uploads/clients/jeeboombaa.png" },

    
  ];

  const teamMembers = [
    {
      name: "Pavanesh Raju B",
      role: "Chief Executive Officer",
      focus: "Vision | Growth | Leadership",
      image: "/lovable-uploads/team/pavanesh.jpeg",
    },
    {
      name: "Jaishankar Anbalagan",
      role: "Chief Marketing Officer",
      focus: "Demand | Strategy | Brand Growth",
      image: "/lovable-uploads/team/jaishankar.jpeg",
    },
    {
      name: "Chandru Chithirai",
      role: "Head of Technology",
      focus: "Innovation | Systems | Scalability",
      image: "/lovable-uploads/team/chandru.jpeg",
    },
    {
      name: "Sharmili Anandan",
      role: "Business Manager",
      focus: "Execution | Client Success",
      image: "/lovable-uploads/team/sharmili.jpeg",
    },
  ];

  const points = [
    {
      title: "Diverse Team of Experience and Innovation",
      content:
        "We boast a dynamic team comprising seasoned industry veterans and fresh, innovative talent. This diversity ensures a blend of experience and fresh perspectives, enabling us to craft uniquely effective branding and marketing solutions tailored to your needs.",
    },
    {
      title: "Customizable Services",
      content:
        "We understand that every business is unique, with its own set of needs and preferences. That's why we offer fully customizable services tailored to your specific requirements. Whether you're seeking the expertise of seasoned veterans or the fresh perspective of emerging talent, we adapt our solutions to align with your budget and goals.",
    },
    {
      title: "A to Z Marketing & Branding",
      content:
        "We act as your all-in-one partner for everything marketing and branding—right from strategy to execution. As a single point of contact, we manage the entire spectrum of your brand's journey, ensuring there's no gap in translating your vision to the end customer.",
    },
  ];

  /* ===================== HOOKS ===================== */

  const [api, setApi] = useState<any>(null);
  const whyChooseUsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => api.scrollNext(), 3000);
    return () => clearInterval(interval);
  }, [api]);

  /* ===================== JSX ===================== */

  return (
    <section id="about" className="pt-12 pb-20 md:py-24 relative overflow-hidden">
      <div className="container relative z-10">

        {/* ABOUT + VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
          

          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-block rounded-full bg-blue-100 text-brand-blue px-4 py-2 text-sm font-medium">
              About Us
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              Welcome to <span className="text-gradient">Birthmark Brahma</span>
            </h2>

            <p className="text-gray-600">
              Where your entrepreneurial dreams meet their branding destiny.
              We empower visionaries with marketing and branding expertise to
              carve their unique identity in the market.
            </p>

            <p className="text-gray-600">
              From early-stage ideas to established brands seeking growth,
              Birthmark Brahma becomes your trusted branding ally.
            </p>

            <h3 className="text-xl font-bold">Vision & Mission</h3>

            <p className="text-gray-600">
              To inscribe our chapter in the success stories of countless brands,
              becoming the ultimate destination for all marketing and branding needs.
            </p>
            <p className ="text-gray-600">
               We absorb business ideas and brands, nurturing them to grow, evolve, making them better equipped to enter and establish their identity in the market
            </p>

            <p className="text-gray-600 font-semibold">
              Ideas walk in. Brands walk out.
            </p>
          </div>

          <div  className="order-2 md:order-1 corner-card corner-clip overflow-hidden
               bg-gradient-to-br from-blue-50 to-white
               max-w-[320px] h-[220px]
               md:max-w-[500px] md:h-[400px]
               mx-auto">
            <img
              src="/lovable-uploads/about.png"
              alt="About Birthmark Brahma"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* TEAM SECTION */}
        <div className="mt-20">
           <div className="text-center mb-12">
    <div className="w-24 h-1 bg-brand-blue mx-auto mb-6 rounded-full"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue text-center mb-12">
            Our Visionary Team
          </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <div className="w-32 h-32 md:w-44 md:h-44 border-[4px] md:border-[6px]
 rounded-full border-brand-blue overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover transition-transform duration-300 ${
                      member.name === "Sharmili Anandan"
                        ? "scale-125 object-top"
                        : member.name === "Jaishankar Anbalagan"
                        ? "scale-120 object-[50%_30%]"
                        : "object-top"
                    }`}
                  />
                </div>

                <h3 className="text-lg font-semibold text-brand-blue">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-700">{member.role}</p>
                <p className="text-sm text-gray-600 text-center">{member.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-24" ref={whyChooseUsRef}>
          <h3 className="text-2xl font-bold mb-12 text-center">
            Why Choose Us?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {points.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100"
              >
                <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center mb-4">
                  <Check className="text-white" />
                </div>
                <h4 className="font-bold text-lg text-brand-blue mb-2">
                  {point.title}
                </h4>
                <p className="text-gray-600">{point.content}</p>
              </div>
            ))}
          </div>
        </div>


        {/* CLIENTS */}
        <div className="mt-20">
           <div className="text-center mb-12">
    <div className="w-24 h-1 bg-brand-blue mx-auto mb-6 rounded-full"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue text-center mb-12">
            Our Clients
          </h2>
          </div>
          <Carousel opts={{ align: "center", loop: true }} setApi={setApi}>
            <CarouselContent>
              {clients.map((client) => (
                <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4">

                  <div className="p-4">
                    <div className="
  rounded-xl bg-white shadow-md
  h-28 sm:h-32 md:h-32
  px-4
  flex items-center justify-center
  overflow-hidden
">

  {client.logo ? (
    <img
  src={client.logo}
  alt={client.name}
  className="
    max-h-12
    sm:max-h-16
    md:max-h-20
    max-w-full
    object-contain
  "
/>
  ) : (
    <p className="font-semibold text-gray-800 text-sm md:text-base px-2">
      {client.name}
    </p>
  )}
</div>

                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

      </div>
    </section>
  );
};

export default About;
