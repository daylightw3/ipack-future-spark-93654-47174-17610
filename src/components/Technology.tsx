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
    <section id="technology" className="py-20 bg-white">
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Award-winning smart manufacturing with cutting-edge automation and digital transformation
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="hover-lift animate-scale-in border-none shadow-md overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {feature.image && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              )}
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Award Highlight */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary via-primary/90 to-accent text-white border-none shadow-2xl animate-scale-in hover-lift">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-white shadow-glow flex items-center justify-center">
                    <Award className="w-12 h-12 text-primary" fill="currentColor" />
                  </div>
                </div>
                <div className="text-center md:text-left flex-1">
                  <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1 mb-3">
                    <span className="text-white font-bold text-sm">2022 Winner</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    PRIME Awards for Smart Manufacturing
                  </h3>
                  <p className="text-white/90 text-lg">
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
