import { useEffect, useRef, useState } from "react";
import { Factory, Package, Award, Trophy, Zap, CheckCircle } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll('.timeline-card');
    cards.forEach(card => cardObserver.observe(card));

    return () => cardObserver.disconnect();
  }, [isVisible]);

  const stats = [
    { icon: Package, value: "10B+", label: "Packs Sold by 2022", color: "text-primary" },
    { icon: Trophy, value: "80%", label: "Products Exported", color: "text-accent" },
    { icon: Factory, value: "160+", label: "Expert Team Members", color: "text-primary" },
  ];

  const timeline = [
    { 
      year: "2016", 
      event: "Ground Breaking & Construction",
      icon: Factory,
      details: [
        "State-of-the-art facility design",
        "50,000 sqm production area",
        "Strategic location selection"
      ]
    },
    { 
      year: "2017", 
      event: "Production Started - First Billion",
      icon: Package,
      details: [
        "First aseptic carton produced",
        "Initial product line launch",
        "Reached 1 billion packs milestone"
      ]
    },
    { 
      year: "2018", 
      event: "International Certifications",
      icon: CheckCircle,
      details: [
        "ISO 9001, 14001, 20001",
        "BRC Food Safety Certification",
        "FSC Chain of Custody"
      ]
    },
    { 
      year: "2022", 
      event: "10 Billion Packs & PRIME Award",
      icon: Trophy,
      details: [
        "Celebrated 10 billion packs sold",
        "Won PRIME Award for Smart Manufacturing",
        "Recognized as industry leader"
      ]
    },
    { 
      year: "2024", 
      event: "Continued Innovation",
      icon: Zap,
      details: [
        "Advanced Industry 4.0 implementation",
        "ECG 7-color printing technology",
        "AGV automation integration"
      ]
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-4">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">
              Our Story
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Pioneering Aseptic Packaging in the UAE
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since 2016, ipack has been at the forefront of aseptic packaging innovation, 
            combining cutting-edge Industry 4.0 technology with sustainable practices. 
            <span className="text-primary font-semibold"> Closer to You</span> - serving the food and 
            beverage industry across the Middle East and beyond with excellence.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-secondary hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
              <div className="text-4xl font-bold text-foreground mb-2">
                {isVisible && stat.value}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="mt-20">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Our Journey
          </h3>
          <div className="relative max-w-7xl mx-auto">
            {/* Vertical Animated Line */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary/30 via-accent/50 to-primary/30 transition-all duration-1000 top-0 hidden md:block"
              style={{
                height: isVisible ? '100%' : '0%',
              }}
            />
            
            {/* Timeline Items */}
            <div className="space-y-24 md:space-y-32">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0;
                const isCardVisible = visibleCards.includes(index);
                
                return (
                  <div
                    key={index}
                    data-index={index}
                    className={`timeline-card relative flex items-center justify-center ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col`}
                  >
                    {/* Content Card */}
                    <div 
                      className={`w-full md:w-5/12 ${isLeft ? "md:pr-16" : "md:pl-16"} mb-8 md:mb-0`}
                      style={{
                        opacity: isCardVisible ? 1 : 0,
                        transform: isCardVisible 
                          ? "translateX(0) scale(1)" 
                          : `translateX(${isLeft ? '-50px' : '50px'}) scale(0.95)`,
                        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`,
                      }}
                    >
                      <div className="group relative backdrop-blur-sm bg-gradient-to-br from-background via-background to-primary/5 p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/50 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                        
                        {/* Icon Badge */}
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-6 shadow-lg ${isLeft ? '' : 'md:float-right'}`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        {/* Year Badge */}
                        <div className={`inline-block px-6 py-2 bg-gradient-to-r from-primary to-accent text-white font-bold text-xl rounded-full mb-4 shadow-lg ${isLeft ? '' : 'md:float-right md:clear-both'}`}>
                          {item.year}
                        </div>

                        {/* Event Title */}
                        <h4 className={`text-2xl md:text-3xl font-bold mb-4 text-foreground ${isLeft ? 'text-left' : 'md:text-right'}`}>
                          {item.event}
                        </h4>

                        {/* Details List */}
                        <ul className={`space-y-2 ${isLeft ? 'text-left' : 'md:text-right'}`}>
                          {item.details.map((detail, idx) => (
                            <li 
                              key={idx} 
                              className={`flex items-center gap-2 text-muted-foreground ${isLeft ? '' : 'md:justify-end'}`}
                            >
                              {!isLeft && <span className="hidden md:inline text-sm md:text-base">{detail}</span>}
                              <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                              {isLeft && <span className="text-sm md:text-base">{detail}</span>}
                              {!isLeft && <span className="md:hidden text-sm">{detail}</span>}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Center Dot with Icon */}
                    <div 
                      className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block"
                      style={{
                        opacity: isCardVisible ? 1 : 0,
                        scale: isCardVisible ? 1 : 0.5,
                        transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15 + 0.3}s`,
                      }}
                    >
                      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {/* Pulse Ring */}
                        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 blur-md" />
                        
                        {/* Icon */}
                        <Icon className="w-10 h-10 text-white relative z-10" />
                      </div>
                    </div>

                    {/* Connection Line */}
                    <div 
                      className={`hidden md:block absolute top-1/2 ${isLeft ? 'left-1/2 ml-10' : 'right-1/2 mr-10'} w-8 h-0.5 bg-gradient-to-r ${isLeft ? 'from-primary to-transparent' : 'from-transparent to-primary'}`}
                      style={{
                        opacity: isCardVisible ? 1 : 0,
                        width: isCardVisible ? '32px' : '0px',
                        transition: `all 0.6s ease-out ${index * 0.15 + 0.5}s`,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
