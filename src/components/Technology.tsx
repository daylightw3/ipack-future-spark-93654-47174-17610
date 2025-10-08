import { Card, CardContent } from "@/components/ui/card";
import { Gauge, Bot, BarChart3, Award } from "lucide-react";
import factoryAgv from "@/assets/factory-agv.jpg";
import factoryQuality from "@/assets/factory-quality.jpg";
const Technology = () => {
  const features = [{
    icon: Bot,
    title: "Automated Guided Vehicles (AGV)",
    description: "State-of-the-art AGV logistics system for seamless material handling and warehouse automation",
    color: "text-accent",
    image: factoryAgv
  }, {
    icon: BarChart3,
    title: "High-Speed Production",
    description: "Uteco Diamond press operating at 600 m/min with precision robotics for maximum efficiency",
    color: "text-primary",
    image: factoryQuality
  }];
  return <section id="technology" className="py-14 bg-gradient-to-b from-background via-white to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
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
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => <div key={feature.title} className="group animate-scale-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <Card className="relative overflow-hidden backdrop-blur-sm bg-white/90 border-2 border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 h-full">
                {/* Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                {feature.image && <div className="aspect-video overflow-hidden relative">
                    <img src={feature.image} alt={feature.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>}
                <CardContent className="p-6 text-center">
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </div>)}
        </div>

      </div>
    </section>;
};
export default Technology;