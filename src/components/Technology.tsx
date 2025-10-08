import { Card, CardContent } from "@/components/ui/card";
import { Gauge, Bot, BarChart3, Award } from "lucide-react";
import factoryAgv from "@/assets/factory-agv.jpg";
import factoryQuality from "@/assets/factory-quality.jpg";

const Technology = () => {
  const features = [
    {
      icon: Gauge,
      title: "Extended Color Gamut (7-Color)",
      description: "Advanced ECG printing technology delivering vibrant, consistent colors across all packaging designs",
      color: "text-primary",
    },
    {
      icon: Bot,
      title: "Automated Guided Vehicles (AGV)",
      description: "State-of-the-art AGV logistics system for seamless material handling and warehouse automation",
      color: "text-accent",
      image: factoryAgv,
    },
    {
      icon: BarChart3,
      title: "High-Speed Production",
      description: "Uteco Diamond press operating at 600 m/min with precision robotics for maximum efficiency",
      color: "text-primary",
      image: factoryQuality,
    },
  ];

  return (
    <section id="technology" className="py-20 bg-gradient-to-b from-background via-white to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-2 mb-4">
            <BarChart3 className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold text-sm tracking-wide uppercase">
              Innovation & Technology
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Driven by Industry 4.0
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Award-winning smart manufacturing with cutting-edge automation and digital transformation
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="relative overflow-hidden backdrop-blur-sm bg-white/90 border-2 border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 h-full">
                {/* Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                {feature.image && (
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`w-10 h-10 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Award Highlight */}
        <div className="max-w-5xl mx-auto">
          <Card className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent text-white border-none shadow-2xl animate-scale-in hover:-translate-y-2 transition-all duration-500">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-accent/80 to-primary/80 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            
            <CardContent className="relative p-10 md:p-16">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 rounded-full bg-white flex items-center justify-center group">
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 rounded-full bg-white opacity-75 animate-ping" />
                    <Award className="relative w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
                  </div>
                </div>
                <div className="text-center md:text-left flex-1">
                  <div className="inline-flex items-center gap-2 bg-white/25 rounded-full px-6 py-2 mb-4 backdrop-blur-sm">
                    <span className="text-white font-bold text-base">🏆 2022 Winner</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    PRIME Awards for Smart Manufacturing
                  </h3>
                  <p className="text-white/95 text-lg md:text-xl leading-relaxed">
                    Honored by UAE Ministry of Industry and Advanced Technology for pioneering Industry 4.0 implementation
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Technology;
