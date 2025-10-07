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
    { icon: Package, value: "10B+", label: "Packs Sold", color: "text-primary" },
    { icon: TrendingUp, value: "80%", label: "Products Exported", color: "text-accent" },
    { icon: Users, value: "160+", label: "Team Members", color: "text-primary" },
  ];

  const timeline = [
    { year: "2016", event: "Ground Breaking" },
    { year: "2017", event: "Production Started" },
    { year: "2018", event: "ISO Certifications" },
    { year: "2022", event: "10 Billion Packs Sold" },
    { year: "2024", event: "MIITE Award Winner" },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Pioneering Aseptic Packaging in the UAE
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Since our establishment, ipack has been at the forefront of aseptic packaging innovation, 
            delivering world-class solutions that combine cutting-edge technology with sustainable practices.
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
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md hover-lift">
                      <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                      <div className="text-foreground font-medium">{item.event}</div>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
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
