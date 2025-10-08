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
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Detect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Main section visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Professional scroll lock with progress tracking
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on section position
      // Progress = 0 when section top is at viewport bottom
      // Progress = 1 when section bottom is at viewport top
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // When section top reaches top of viewport, start progress
      // When section bottom reaches top of viewport, end progress
      const progress = Math.max(0, Math.min(1, -sectionTop / (sectionHeight - windowHeight)));
      
      setSectionProgress(progress);
    };

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
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);
  const stats = [{
    icon: Package,
    value: 10,
    suffix: "B+",
    label: "Packs Sold by 2022",
    color: "text-primary"
  }, {
    icon: Trophy,
    value: 80,
    suffix: "%",
    label: "Products Exported",
    color: "text-accent"
  }, {
    icon: Factory,
    value: 160,
    suffix: "+",
    label: "Expert Team Members",
    color: "text-primary"
  }];
  const timeline = [{
    year: "2016",
    event: "Ground Breaking & Construction",
    icon: Factory,
    details: ["State-of-the-art facility design", "50,000 sqm production area", "Strategic location selection"]
  }, {
    year: "2017",
    event: "Production Started - First Billion",
    icon: Package,
    details: ["First aseptic carton produced", "Initial product line launch", "Reached 1 billion packs milestone"]
  }, {
    year: "2018",
    event: "International Certifications",
    icon: CheckCircle,
    details: ["ISO 9001, 14001, 20001", "BRC Food Safety Certification", "FSC Chain of Custody"]
  }, {
    year: "2022",
    event: "10 Billion Packs & PRIME Award",
    icon: Trophy,
    details: ["Celebrated 10 billion packs sold", "Won PRIME Award for Smart Manufacturing", "Recognized as industry leader"]
  }, {
    year: "2024",
    event: "Continued Innovation",
    icon: Zap,
    details: ["Advanced Industry 4.0 implementation", "ECG 7-color printing technology", "AGV automation integration"]
  }];

  // Calculate active card index
  const numCards = timeline.length;
  const activeCardIndex = Math.floor(sectionProgress * numCards);
  
  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          
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
          return <div key={stat.label} className="group relative backdrop-blur-sm bg-gradient-to-br from-background via-background to-primary/5 p-10 md:p-12 rounded-3xl border-2 border-primary/20 hover:border-primary/40 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 animate-scale-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                {/* Icon Container with Gradient */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500" style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.8)',
              transition: `all 0.6s ease-out ${index * 0.1}s`
            }}>
                  <stat.icon className={`w-10 h-10 ${stat.color}`} />
                </div>
                
                {/* Animated Number */}
                <div className="text-5xl md:text-6xl font-bold mb-4 tabular-nums" style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.6s ease-out ${index * 0.1 + 0.2}s`
            }}>
                  {isVisible && <span className="text-foreground">
                      {countValue}{stat.suffix}
                    </span>}
                </div>
                
                {/* Label with better typography */}
                <div className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed" style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.6s ease-out ${index * 0.1 + 0.4}s`
            }}>
                  {stat.label}
                </div>
              </div>
        })}
        </div>

        {/* Timeline Section - Full Section Scroll Lock */}
        <div className="mt-20 relative" ref={timelineRef} style={{
          height: `${(timeline.length + 1) * 100}vh`
        }}>
          {/* Sticky Container - Locks in Viewport */}
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background/50 via-background to-background/50">
            {/* Clean Header with Subtle Decoration */}
            <div className="absolute top-16 left-0 right-0 text-center z-50">
              <div className="inline-flex flex-col items-center gap-3">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                  Our Journey
                </h3>
                <p className="text-sm text-muted-foreground">Milestones of Innovation</p>
              </div>
            </div>

            {/* Modern Progress Indicator */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-50">
              <div className="flex items-center gap-3 px-6 py-3 backdrop-blur-xl bg-white/60 dark:bg-foreground/20 rounded-full border border-primary/10 shadow-lg">
                {timeline.map((_, idx) => (
                  <div
                    key={idx}
                    className="transition-all duration-500 ease-out"
                    style={{
                      width: activeCardIndex === idx ? '40px' : '10px',
                      height: '10px',
                      borderRadius: '5px',
                      backgroundColor: activeCardIndex >= idx 
                        ? 'hsl(var(--primary))' 
                        : 'hsl(var(--muted-foreground) / 0.2)',
                      boxShadow: activeCardIndex === idx 
                        ? '0 0 20px hsl(var(--primary) / 0.4)' 
                        : 'none'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Minimal Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 hidden lg:block" style={{
              width: '1px',
              height: '60vh',
              background: 'linear-gradient(180deg, transparent, hsl(var(--border)), transparent)'
            }}>
              {/* Smooth Growing Line */}
              <div className="absolute top-0 left-0 right-0" style={{
                height: `${(sectionProgress * numCards % 1) * 100}%`,
                background: 'linear-gradient(180deg, hsl(var(--primary) / 0.3), hsl(var(--primary)))',
                transition: 'height 0.15s ease-out'
              }} />
              
              {/* Minimal Glowing Indicator */}
              <div className="absolute left-1/2 transform -translate-x-1/2" style={{
                top: `${(sectionProgress * numCards % 1) * 100}%`,
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'hsl(var(--primary))',
                boxShadow: '0 0 16px hsl(var(--primary) / 0.6)',
                transition: 'top 0.15s ease-out'
              }} />
            </div>

            {/* Cards Container - Cleaner Layout */}
            <div className="relative w-full max-w-6xl h-full flex items-center justify-center px-6">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0;

                // Calculate active index and transition progress
                const rawProgress = sectionProgress * numCards;
                const activeIndex = Math.floor(rawProgress);
                const localProgress = rawProgress % 1;

                // Ultra-smooth card state logic
                let opacity = 0;
                let translateX = 0;
                let translateY = 0;
                let scale = 1;
                let zIndex = 50;
                let pointerEvents: 'auto' | 'none' = 'none';
                let visibility: 'visible' | 'hidden' = 'hidden';
                let blur = 0;

                if (index < activeIndex) {
                  // Past cards - fade out smoothly
                  opacity = 0;
                  visibility = 'hidden';
                  translateX = isLeft ? -80 : 80;
                  translateY = -20;
                  scale = 0.92;
                  blur = 4;
                } else if (index === activeIndex) {
                  // Active card - crystal clear and centered
                  const exitProgress = localProgress;
                  const smoothExit = exitProgress * exitProgress; // Ease-in for smoother start
                  
                  opacity = 1 - smoothExit * 0.5;
                  translateX = (isLeft ? -60 : 60) * smoothExit;
                  translateY = 15 * smoothExit;
                  scale = 1 - smoothExit * 0.08;
                  blur = smoothExit * 2;
                  zIndex = 100;
                  pointerEvents = 'auto';
                  visibility = 'visible';
                } else if (index === activeIndex + 1) {
                  // Next card - smooth entrance
                  const entryProgress = localProgress;
                  const smoothEntry = 1 - Math.pow(1 - entryProgress, 2); // Ease-out for smoother end
                  
                  opacity = smoothEntry * 0.5;
                  translateX = (isLeft ? -100 : 100) * (1 - smoothEntry);
                  translateY = -15 * (1 - smoothEntry);
                  scale = 0.88 + 0.12 * smoothEntry;
                  blur = (1 - smoothEntry) * 4;
                  zIndex = 90;
                  visibility = entryProgress > 0.05 ? 'visible' : 'hidden';
                } else {
                  // Future cards - off-screen
                  opacity = 0;
                  visibility = 'hidden';
                  translateX = isLeft ? -100 : 100;
                  translateY = -20;
                  scale = 0.88;
                  blur = 4;
                }

                const transitionDuration = prefersReducedMotion ? '0s' : '0.6s';
                const easing = 'cubic-bezier(0.34, 1.56, 0.64, 1)'; // Smooth bounce

                return (
                  <div
                    key={index}
                    className="absolute w-full lg:w-[48%] px-2"
                    style={{
                      opacity,
                      transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                      filter: `blur(${blur}px)`,
                      transition: `all ${transitionDuration} ${easing}`,
                      zIndex,
                      [isLeft ? 'left' : 'right']: '0',
                      pointerEvents,
                      visibility,
                      willChange: 'transform, opacity, filter'
                    }}
                  >
                    <div className="relative backdrop-blur-sm bg-white/95 dark:bg-foreground/95 rounded-3xl border border-primary/10 shadow-xl overflow-hidden">
                      {/* Subtle Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-accent/[0.02] pointer-events-none" />
                      
                      {/* Content */}
                      <div className="relative p-8 md:p-10">
                        {/* Year Badge */}
                        <div className={`flex ${isLeft ? 'justify-start' : 'lg:justify-end'} mb-6`}>
                          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-2xl md:text-3xl font-bold text-primary">
                              {item.year}
                            </span>
                          </div>
                        </div>

                        {/* Icon + Title Row */}
                        <div className={`flex items-center gap-4 mb-6 ${isLeft ? '' : 'lg:flex-row-reverse'}`}>
                          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shadow-inner">
                            <Icon className="w-7 h-7 text-primary" />
                          </div>
                          <h4 className="flex-1 text-xl md:text-2xl font-bold text-foreground leading-tight">
                            {item.event}
                          </h4>
                        </div>

                        {/* Clean Details List */}
                        <ul className={`space-y-3 ${isLeft ? '' : 'lg:text-right'}`}>
                          {item.details.map((detail, idx) => (
                            <li key={idx} className={`flex items-start gap-3 text-muted-foreground text-sm md:text-base ${isLeft ? '' : 'lg:flex-row-reverse lg:text-right'}`}>
                              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                              <span className="flex-1 leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Bottom Accent Line */}
                      <div className="h-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
                    </div>
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