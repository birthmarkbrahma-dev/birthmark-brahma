import { Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const socialLinks = {
    instagram: "https://www.instagram.com/birthmark_brahma/",
    facebook: "https://www.facebook.com/profile.php?id=61559501907858",
    twitter: "https://x.com/BirthmarkBrahma",
    linkedin: "http://linkedin.com/company/birthmark-brahma"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="circle-bg w-[400px] h-[400px] bg-brand-blue left-[-200px] bottom-[-200px]"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block rounded-full bg-blue-100 text-brand-blue px-4 py-2 text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-gradient">Transform</span> Your Brand?
          </h2>
          <p className="text-gray-600">
            Let's discuss how we can help you achieve your marketing and branding goals.
            Our team is ready to provide personalized solutions for your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="corner-card initially-hidden p-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1 p-2 bg-blue-100 rounded-lg text-brand-blue">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-gray-600">+91 93614 89738</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 p-2 bg-blue-100 rounded-lg text-brand-blue">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-gray-600">support@birthmarkbrahma.com</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-100 rounded-lg text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-100 rounded-lg text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-100 rounded-lg text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-100 rounded-lg text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="corner-card initially-hidden p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <Input id="subject" placeholder="How can we help?" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[120px]" required />
              </div>
              
              <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-lightBlue">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
