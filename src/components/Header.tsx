import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/ipack-logo-transparent.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      setIsScrolled(currentScrollY > 20);
      
      // Hide header in hero section, show in other sections
      if (currentScrollY < viewportHeight - 100) {
        // Still in hero section
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      } else {
        // In other sections - show/hide based on scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > viewportHeight + 80) {
          // Scrolling down
          setIsVisible(false);
          setIsMobileMenuOpen(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up
          setIsVisible(true);
        } else {
          // Just entered other sections
          setIsVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  const navLinks = [{
    name: "Home",
    href: "#home"
  }, {
    name: "About Us",
    href: "#about"
  }, {
    name: "Products",
    href: "#products"
  }, {
    name: "Technology",
    href: "#technology"
  }, {
    name: "Sustainability",
    href: "#sustainability"
  }, {
    name: "News",
    href: "#news"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-white/98 backdrop-blur-md"} ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" onClick={e => {
            e.preventDefault();
            scrollToSection("#home");
          }} className="flex items-center gap-3 group transition-all">
              <img src={logo} alt="ipack - Closer to You" className="h-10 md:h-12 w-auto transition-transform group-hover:scale-105" />
              <div className="hidden md:flex flex-col">
                
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => <button key={link.name} onClick={() => scrollToSection(link.href)} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                {link.name}
              </button>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button onClick={() => scrollToSection("#contact")} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-strong transition-all hover:scale-105">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navLinks.map(link => <button key={link.name} onClick={() => scrollToSection(link.href)} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors text-left">
                  {link.name}
                </button>)}
              <Button onClick={() => scrollToSection("#contact")} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full">
                Contact Us
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;