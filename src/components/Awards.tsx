import { ShieldCheck, Trophy } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const certifications = [
  { name: "ISO 9001", description: "Quality Management" },
  { name: "ISO 14001", description: "Environmental Management" },
  { name: "ISO 22000", description: "Food Safety Management" },
  { name: "BRC", description: "British Retail Consortium" },
  { name: "FSC", description: "Forest Stewardship Council" },
];

const badges = ["Industry 4.0", "Smart Manufacturing", "Innovation Excellence"];

const Awards = () => {
  return (
    <section className="py-14 md:py-16 bg-secondary/60">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="Awards & Recognition"
          title="Excellence Recognized Globally"
          subtitle="Our commitment to innovation and quality has earned us prestigious awards and certifications"
        />

        {/* Featured award */}
        <div className="max-w-6xl mx-auto mb-12 animate-scale-in">
          <div className="relative bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
            <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent" />
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 lg:p-10">
              <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Trophy className="w-11 h-11 text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-2">
                  2022 Winner
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">
                  PRIME Awards for Smart Manufacturing
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-5 max-w-2xl">
                  Recognized by the UAE Ministry of Industry and Advanced
                  Technology (MoIAT) for excellence in implementing Industry 4.0
                  technologies and smart manufacturing practices.
                </p>
                <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
                  {badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-4 py-1.5 rounded-full border border-border bg-secondary text-xs font-semibold text-foreground/80"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
            Certified Excellence
          </h3>
          <p className="text-sm text-muted-foreground">
            Committed to international standards and best practices
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="group bg-card px-6 py-8 text-center transition-colors duration-300 hover:bg-background animate-fade-in"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <ShieldCheck className="w-8 h-8 mx-auto mb-4 text-primary/70 group-hover:text-primary transition-colors" />
              <h4 className="text-base font-bold text-foreground mb-1">
                {cert.name}
              </h4>
              <p className="text-xs text-muted-foreground leading-snug">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
