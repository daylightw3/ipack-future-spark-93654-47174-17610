import { useEffect, useRef, useState } from "react";
import { Package, TrendingUp, Users } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Package, value: "10B+", label: "Packs Sold by 2022", color: "text-primary" },
    { icon: TrendingUp, value: "80%", label: "Products Exported", color: "text-accent" },
    { icon: Users, value: "160+", label: "Expert Team Members", color: "text-primary" },
  ];

  const timeline = [
    { year: "2016", event: "Ground Breaking & Construction" },
    { year: "2017", event: "Production Started - First Billion" },
    { year: "2018", event: "International Certifications (ISO, BRC, FSC)" },
    { year: "2022", event: "10 Billion Packs Milestone & PRIME Award Win" },
    { year: "2024", event: "Continued Innovation in Industry 4.0" },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
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

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Our Journey
          </h3>
          <div className="relative">
            {/* Animated Timeline Line with Gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary/40 opacity-30"></div>
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-accent to-primary origin-top transition-all duration-1000 ease-out"
              style={{ 
                height: isVisible ? '100%' : '0%',
                boxShadow: '0 0 20px rgba(240, 86, 35, 0.5)'
              }}
            ></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } animate-fade-in`}
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    opacity: 0,
                    animation: isVisible ? `fade-in 0.6s ease-out ${index * 0.2}s forwards` : 'none'
                  }}
                >
                  {/* Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div 
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-primary/10"
                      style={{
                        transform: isVisible 
                          ? 'translateX(0)' 
                          : index % 2 === 0 ? 'translateX(-30px)' : 'translateX(30px)',
                        transition: `all 0.6s ease-out ${index * 0.2}s`
                      }}
                    >
                      <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-lg mb-3 shadow-md">
                        {item.year}
                      </div>
                      <div className="text-foreground font-medium text-base leading-relaxed">{item.event}</div>
                    </div>
                  </div>

                  {/* Animated Dot */}
                  <div 
                    className="relative w-6 h-6 z-10"
                    style={{
                      animation: isVisible ? `pulse 2s ease-in-out ${index * 0.2}s infinite` : 'none'
                    }}
                  >
                    <div className="absolute inset-0 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-40"></div>
                  </div>

                  {/* Empty space */}
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
