import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Recycle, TreePine } from "lucide-react";

const Sustainability = () => {
  const initiatives = [
    {
      icon: Leaf,
      title: "Eco-Friendly Materials",
      description: "Using sustainable and recyclable materials in all our packaging solutions",
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Member of the Circular Packaging Association, committed to reducing waste",
    },
    {
      icon: TreePine,
      title: "Carbon Neutral",
      description: "Working towards carbon neutrality through efficient processes and renewable energy",
    },
  ];

  return (
    <section id="sustainability" className="py-14 bg-gradient-to-br from-accent/5 via-background to-accent/10 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-2 mb-4">
            <Leaf className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold text-sm tracking-wide uppercase">
              Sustainability
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Packaging for a Circular Economy
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our commitment to sustainability goes beyond words. We're actively building a greener future 
            through innovation, responsible practices, and collaboration with environmental organizations.
          </p>
        </div>

        {/* Initiatives */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {initiatives.map((initiative, index) => (
            <div
              key={initiative.title}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="relative h-full backdrop-blur-sm bg-white/90 border-2 border-accent/20 hover:border-accent/40 shadow-lg hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2">
                {/* Gradient Glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-accent/10 to-accent/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <initiative.icon className="w-12 h-12 text-accent" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                    {initiative.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {initiative.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Membership Badge */}
        <div className="text-center">
          <div className="group inline-flex items-center gap-4 backdrop-blur-sm bg-white/90 px-8 py-5 rounded-2xl shadow-xl border-2 border-accent/20 hover:border-accent/40 animate-fade-in hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/10 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Recycle className="w-8 h-8 text-accent" />
            </div>
            <div className="text-left">
              <div className="text-xs text-muted-foreground font-medium mb-1">Proud Member</div>
              <span className="text-lg font-bold text-foreground">
                Circular Packaging Association
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
