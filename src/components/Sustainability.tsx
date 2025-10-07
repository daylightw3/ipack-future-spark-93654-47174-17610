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
    <section id="sustainability" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Packaging for a Circular Economy
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our commitment to sustainability goes beyond words. We're actively building a greener future 
            through innovation, responsible practices, and collaboration with environmental organizations.
          </p>
        </div>

        {/* Initiatives */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {initiatives.map((initiative, index) => (
            <Card
              key={initiative.title}
              className="hover-lift animate-scale-in border-accent/20 shadow-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <initiative.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {initiative.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {initiative.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Membership Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md animate-fade-in">
            <Recycle className="w-6 h-6 text-accent" />
            <span className="font-semibold text-foreground">
              Proud Member of the Circular Packaging Association
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
