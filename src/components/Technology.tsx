import { Card, CardContent } from "@/components/ui/card";
import { Gauge, Bot, BarChart3, Award } from "lucide-react";

const Technology = () => {
  const features = [
    {
      icon: Gauge,
      title: "High-Speed Printing",
      description: "Uteco Diamond press running at 600 m/min for maximum efficiency",
      color: "text-primary",
    },
    {
      icon: Bot,
      title: "Advanced Robotics",
      description: "Fully automated production lines ensuring consistent quality",
      color: "text-accent",
    },
    {
      icon: BarChart3,
      title: "Digital Transformation",
      description: "Smart manufacturing with real-time monitoring and analytics",
      color: "text-primary",
    },
  ];

  return (
    <section id="technology" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Driven by Industry 4.0
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Leveraging cutting-edge technology to deliver unparalleled quality and efficiency
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="hover-lift animate-scale-in border-none shadow-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
          <Card className="bg-gradient-to-br from-primary to-primary/80 text-white border-none shadow-2xl animate-scale-in">
            <CardContent className="p-8 md:p-12 text-center">
              <Award className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Winner of MIITE Award for Smart Manufacturing 2024
              </h3>
              <p className="text-white/90 text-lg">
                Recognized for excellence in innovation and digital transformation
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Technology;
