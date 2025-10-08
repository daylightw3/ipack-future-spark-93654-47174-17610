import { useEffect, useRef, useState } from "react";
import { Factory, Package, Award, Trophy, Zap, CheckCircle } from "lucide-react";

// Custom hook for animated counting
const useCountAnimation = (end: number, duration: number = 2000, isVisible: boolean) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(end * easeOutQuart));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);
  
  return count;
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Main section visibility observer
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

  // Scroll-based line progression
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const elementTop = rect.top + scrollTop;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the timeline section is scrolled
      const scrolled = scrollTop + windowHeight - elementTop;
      const progress = Math.max(0, Math.min(100, (scrolled / (elementHeight + windowHeight * 0.5)) * 100));
      
      setScrollProgress(progress);
    };

    // Throttle scroll events for performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  // Card visibility observer with staggered reveal
  useEffect(() => {
    if (!isVisible) return;
    
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            // Stagger the card visibility
            setTimeout(() => {
              setVisibleCards(prev => [...new Set([...prev, index])]);
            }, index * 150);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    const cards = document.querySelectorAll('.timeline-card');
    cards.forEach(card => cardObserver.observe(card));

    return () => cardObserver.disconnect();
  }, [isVisible]);

  const stats = [
    { icon: Package, value: 10, suffix: "B+", label: "Packs Sold by 2022", color: "text-primary" },
    { icon: Trophy, value: 80, suffix: "%", label: "Products Exported", color: "text-accent" },
    { icon: Factory, value: 160, suffix: "+", label: "Expert Team Members", color: "text-primary" },
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
          {stats.map((stat, index) => {
            const countValue = useCountAnimation(stat.value, 2000, isVisible);
            
            return (
              <div
                key={stat.label}
                className="group relative backdrop-blur-sm bg-gradient-to-br from-background via-background to-primary/5 p-10 md:p-12 rounded-3xl border-2 border-primary/20 hover:border-primary/40 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                {/* Icon Container with Gradient */}
                <div 
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                    transition: `all 0.6s ease-out ${index * 0.1}s`,
                  }}
                >
                  <stat.icon className={`w-10 h-10 ${stat.color}`} />
                </div>
                
                {/* Animated Number */}
                <div 
                  className="text-5xl md:text-6xl font-bold mb-4 tabular-nums"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.6s ease-out ${index * 0.1 + 0.2}s`,
                  }}
                >
                  {isVisible && (
                    <span className="text-foreground">
                      {countValue}{stat.suffix}
                    </span>
                  )}
                </div>
                
                {/* Label with better typography */}
                <div 
                  className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.6s ease-out ${index * 0.1 + 0.4}s`,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Section */}
        <div className="mt-20" ref={timelineRef}>
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
            Our Journey
          </h3>
          <div className="relative max-w-[1400px] mx-auto timeline-container">
            {/* Scroll-Based Progressive Vertical Line */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 top-0 hidden md:block"
              style={{
                width: '2px',
                height: '100%',
                background: 'linear-gradient(180deg, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.5), hsl(var(--primary) / 0.3))',
              }}
            >
              {/* Animated Growing Line */}
              <div 
                className="absolute top-0 left-0 right-0"
                style={{
                  height: `${scrollProgress}%`,
                  background: 'linear-gradient(180deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
                  boxShadow: '0 0 20px hsl(var(--primary) / 0.5), 0 0 40px hsl(var(--accent) / 0.3)',
                  transition: 'height 0.1s linear',
                }}
              />
              
              {/* Glowing Dot at Line Tip */}
              <div 
                className="absolute left-1/2 transform -translate-x-1/2"
                style={{
                  top: `${scrollProgress}%`,
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
                  boxShadow: '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--accent) / 0.5)',
                  transition: 'top 0.1s linear',
                }}
              />
            </div>
            
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
                    {/* Content Card with 3D Stacked Animation */}
                    <div 
                      className={`w-full md:w-1/2 mb-8 md:mb-0 timeline-card-wrapper`}
                      style={{
                        opacity: isCardVisible ? 1 : 0,
                        transform: isCardVisible 
                          ? "translateX(0) translateY(0) scale(1) rotateY(0deg)" 
                          : `translateX(${isLeft ? '-100px' : '100px'}) translateY(50px) scale(0.9) rotateY(${isLeft ? '10deg' : '-10deg'})`,
                        transition: `all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)`,
                        transitionDelay: `${index * 0.2}s`,
                        willChange: 'transform, opacity',
                        zIndex: isCardVisible ? 10 - index : 0,
                      }}
                    >
                      <div className="group relative bg-card p-8 md:p-10 rounded-xl border shadow-sm transition-all duration-500 hover:-translate-y-1" style={{ transformStyle: 'preserve-3d' }}>
                        
                        {/* Year */}
                        <div className={`${isLeft ? '' : 'md:float-right'} mb-4`}
                          style={{
                            opacity: isCardVisible ? 1 : 0,
                            transform: isCardVisible ? 'translateY(0)' : 'translateY(-10px)',
                            transition: `all 0.4s ease-out ${index * 0.2 + 0.2}s`,
                          }}
                        >
                          <span className="text-sm font-medium text-muted-foreground">{item.year}</span>
                        </div>

                        {/* Event Title */}
                        <h4 className={`text-xl md:text-2xl font-bold mb-6 text-foreground ${isLeft ? 'text-left' : 'md:text-right'} clear-both`}>
                          {item.event}
                        </h4>

                        {/* Details List with Sequential Fade In */}
                        <ul className={`space-y-3 ${isLeft ? 'text-left' : 'md:text-right'}`}>
                          {item.details.map((detail, idx) => (
                            <li 
                              key={idx} 
                              className="text-muted-foreground text-sm md:text-base leading-relaxed"
                              style={{
                                opacity: isCardVisible ? 1 : 0,
                                transform: isCardVisible ? 'translateY(0)' : 'translateY(10px)',
                                transition: `all 0.5s ease-out ${index * 0.2 + 0.4 + idx * 0.1}s`,
                              }}
                            >
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div 
                      className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:block w-3 h-3 rounded-full border bg-background"
                      style={{
                        opacity: isCardVisible ? 1 : 0,
                        transition: `opacity 0.6s ease-out ${index * 0.2}s`,
                      }}
                    />

                    {/* Animated Connection Line Drawing Effect */}
                    <div 
                      className={`hidden md:block absolute top-1/2 ${isLeft ? 'left-1/2 ml-10' : 'right-1/2 mr-10'} h-0.5 bg-gradient-to-r ${isLeft ? 'from-primary via-accent to-transparent' : 'from-transparent via-accent to-primary'}`}
                      style={{
                        opacity: isCardVisible ? 1 : 0,
                        width: isCardVisible ? '48px' : '0px',
                        transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.2 + 0.4}s`,
                        boxShadow: isCardVisible ? `0 0 10px hsl(var(--primary) / 0.5)` : 'none',
                        transformOrigin: isLeft ? 'left' : 'right',
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
