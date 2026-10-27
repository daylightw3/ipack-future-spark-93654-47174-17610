import { Leaf, Recycle, TreePine } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const initiatives = [
  {
    icon: Leaf,
    title: "Eco-Friendly Materials",
    description:
      "Using sustainable and recyclable materials in all our packaging solutions",
  },
  {
    icon: Recycle,
    title: "Circular Economy",
    description:
      "Member of the Circular Packaging Association, committed to reducing waste",
  },
  {
    icon: TreePine,
    title: "Carbon Neutral",
    description:
      "Working towards carbon neutrality through efficient processes and renewable energy",
  },
];

const Sustainability = () => {
  return (
    <section
      id="sustainability"
      className="py-14 md:py-16 bg-gradient-to-b from-secondary/60 via-background to-background"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="Sustainability"
          title="Packaging for a Circular Economy"
          subtitle="Our commitment to sustainability goes beyond words. We're actively building a greener future through innovation, responsible practices, and collaboration with environmental organizations."
        />

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {initiatives.map((initiative, index) => (
            <div
              key={initiative.title}
              className="group bg-card rounded-2xl border border-border p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                <initiative.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2.5 text-foreground">
                {initiative.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {initiative.description}
              </p>
            </div>
          ))}
        </div>

        {/* Membership */}
        <div className="flex justify-center animate-fade-in">
          <div className="inline-flex items-center gap-4 bg-card px-7 py-4 rounded-2xl border border-border shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center">
              <Recycle className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-0.5 tracking-wide uppercase">
                Proud Member
              </div>
              <span className="text-base font-bold text-foreground">
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
