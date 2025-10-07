import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-foreground text-white">
      {/* Contact Section */}
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Company Info */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-white/80 mb-8 text-lg leading-relaxed">
              Ready to discuss your packaging needs? Our team is here to help you 
              find the perfect solution for your products.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Address</p>
                  <p className="text-white/70">
                    Industrial Area, Abu Dhabi, UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <p className="text-white/70">+971 XX XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-white/70">info@ipack.ae</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="animate-scale-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
                  />
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo and Mission */}
            <div className="text-center md:text-left">
              <div className="flex flex-col items-center md:items-start gap-2">
                <img 
                  src="/ipack-logo.png" 
                  alt="ipack Logo" 
                  className="h-12 transition-transform duration-300 hover:scale-105"
                />
                <div className="text-sm text-white/60 font-medium">Closer to You</div>
              </div>
              <p className="text-white/60 text-sm mt-2">
                Engineering the future of aseptic packaging
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6">
              <button
                onClick={() => scrollToSection("#home")}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("#about")}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("#products")}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("#technology")}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Technology
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/50">
            <p>&copy; 2025 ipack. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
