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
  const [sectionProgress, setSectionProgress] = useState(0);
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

  // Scroll-based progression
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calculate progress from 0 to 1 based on scroll position
      const startScroll = elementTop - windowHeight * 0.8;
      const endScroll = elementTop + elementHeight - windowHeight * 0.3;
      const scrollRange = endScroll - startScroll;
      const progress = Math.max(0, Math.min(1, -startScroll / scrollRange));
      
      setSectionProgress(progress);
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
        <div className="mt-20" ref={timelineRef} style={{ minHeight: '180vh' }}>
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-20 text-foreground animate-fade-in">
            Our Journey
          </h3>
          
          {/* Sticky Container for Stacked Cards */}
          <div className="relative max-w-5xl mx-auto">
            {/* Center Line */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 top-0 hidden md:block"
              style={{
                width: '2px',
                height: '60vh',
                background: 'linear-gradient(180deg, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.5), hsl(var(--primary) / 0.3))',
              }}
            >
              {/* Animated Growing Line */}
              <div 
                className="absolute top-0 left-0 right-0"
                style={{
                  height: `${sectionProgress * 100}%`,
                  background: 'linear-gradient(180deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
                  boxShadow: '0 0 20px hsl(var(--primary) / 0.5), 0 0 40px hsl(var(--accent) / 0.3)',
                  transition: 'height 0.15s linear',
                }}
              />
              
              {/* Glowing Dot at Line Tip */}
              <div 
                className="absolute left-1/2 transform -translate-x-1/2"
                style={{
                  top: `${sectionProgress * 100}%`,
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
                  boxShadow: '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--accent) / 0.5)',
                  transition: 'top 0.15s linear',
                }}
              />
            </div>

            {/* Sticky Stage for Cards */}
            <div className="sticky top-[15vh] h-[60vh] flex items-center justify-center">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0;
                
                // Calculate active index and transition progress
                const numCards = timeline.length;
                const activeIndex = Math.floor(sectionProgress * numCards);
                const localProgress = (sectionProgress * numCards) % 1;
                
                // Card visibility and animation logic
                let opacity = 0;
                let translateX = isLeft ? -100 : 100;
                let translateY = 0;
                let scale = 0.98;
                let zIndex = 100 + index;
                
                if (index < activeIndex) {
                  // Past cards - stacked underneath
                  opacity = 0.35;
                  translateX = 0;
                  translateY = 6;
                  scale = 0.96;
                } else if (index === activeIndex) {
                  // Current active card
                  opacity = 1;
                  translateX = 0;
                  translateY = 0;
                  scale = 1;
                } else if (index === activeIndex + 1) {
                  // Next card - animating in
                  opacity = localProgress;
                  translateX = (isLeft ? -100 : 100) * (1 - localProgress);
                  translateY = 0;
                  scale = 0.98 + (0.02 * localProgress);
                }
                
                return (
                  <div
                    key={index}
                    className="absolute w-full md:w-1/2 px-4"
                    style={{
                      opacity,
                      transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      zIndex,
                      [isLeft ? 'left' : 'right']: 0,
                    }}
                  >
                    <div className="group relative bg-card p-6 md:p-8 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all duration-500">
                      {/* Year */}
                      <div className={`${isLeft ? '' : 'md:text-right'} mb-4`}>
                        <span className="text-5xl md:text-6xl font-bold text-foreground">{item.year}</span>
                      </div>

                      {/* Icon */}
                      <div className={`flex ${isLeft ? 'justify-start' : 'md:justify-end'} mb-4`}>
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                      </div>

                      {/* Event Title */}
                      <h4 className={`text-xl md:text-2xl font-bold mb-4 text-foreground ${isLeft ? 'text-left' : 'md:text-right'}`}>
                        {item.event}
                      </h4>

                      {/* Details List */}
                      <ul className={`space-y-2 ${isLeft ? 'text-left' : 'md:text-right'}`}>
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="text-muted-foreground text-sm md:text-base leading-relaxed">
                            • {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Center Dot */}
                    <div 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block w-4 h-4 rounded-full border-2 border-primary bg-background shadow-lg"
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
