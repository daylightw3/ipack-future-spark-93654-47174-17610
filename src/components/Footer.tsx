import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  Send,
  CheckCircle2,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Technology", href: "#technology" },
  { label: "Sustainability", href: "#sustainability" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
];

const Footer = () => {
  const [sent, setSent] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      {/* Contact Section */}
      <div className="container mx-auto px-4 lg:px-8 py-14 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Company Info */}
          <div className="animate-fade-in">
            <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Get in Touch
            </h2>
            <p className="text-primary-foreground/70 mb-8 text-base md:text-lg leading-relaxed max-w-md">
              Ready to discuss your packaging needs? Our team is here to help
              you find the perfect solution for your products.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4.5 h-4.5 text-accent" />
                </span>
                <div>
                  <p className="font-semibold mb-0.5 text-sm">Address</p>
                  <p className="text-primary-foreground/60 text-sm">
                    Industrial Area, Abu Dhabi, UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4.5 h-4.5 text-accent" />
                </span>
                <div>
                  <p className="font-semibold mb-0.5 text-sm">Phone</p>
                  <p className="text-primary-foreground/60 text-sm">
                    +971 2 55 11 878
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4.5 h-4.5 text-accent" />
                </span>
                <div>
                  <p className="font-semibold mb-0.5 text-sm">Email</p>
                  <p className="text-primary-foreground/60 text-sm">
                    info@ipack.ae
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-6">
                Send us a Message
              </h3>
              {sent ? (
                <div className="flex flex-col items-center text-center py-12 gap-4">
                  <CheckCircle2 className="w-12 h-12 text-accent" />
                  <p className="text-lg font-semibold">Message received</p>
                  <p className="text-sm text-primary-foreground/60 max-w-xs">
                    Thank you for reaching out. Our team will get back to you
                    shortly.
                  </p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-primary-foreground/60 mb-1.5">
                        Name
                      </label>
                      <Input
                        required
                        type="text"
                        placeholder="Your Name"
                        className="bg-primary-foreground/5 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 h-11 rounded-lg focus:border-accent focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-primary-foreground/60 mb-1.5">
                        Email
                      </label>
                      <Input
                        required
                        type="email"
                        placeholder="Your Email"
                        className="bg-primary-foreground/5 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 h-11 rounded-lg focus:border-accent focus:ring-accent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-primary-foreground/60 mb-1.5">
                      Message
                    </label>
                    <Textarea
                      required
                      placeholder="Tell us about your packaging needs"
                      rows={5}
                      className="bg-primary-foreground/5 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 resize-none rounded-lg focus:border-accent focus:ring-accent"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base py-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo and Mission */}
            <div className="text-center md:text-left">
              <div className="flex flex-col items-center md:items-start gap-3">
                <img
                  src="/ipack-logo-transparent.png"
                  alt="ipack – Closer to You"
                  className="h-14 md:h-16 w-auto"
                />
                <div className="text-xs text-primary-foreground/70 font-semibold tracking-[0.2em] uppercase">
                  Closer to You
                </div>
              </div>
              <p className="text-primary-foreground/50 text-sm mt-3 leading-relaxed max-w-xs">
                Engineering the future of aseptic packaging with sustainability
                and innovation
              </p>
            </div>

            {/* Quick Links */}
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:border-transparent hover:text-accent-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40">
            <p>&copy; {new Date().getFullYear()} ipack. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
