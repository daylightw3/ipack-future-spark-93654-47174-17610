import { Award, ShieldCheck, Star } from "lucide-react";

const Awards = () => {
  const certifications = [
    { name: "ISO 9001", description: "Quality Management" },
    { name: "ISO 14001", description: "Environmental Management" },
    { name: "ISO 22000", description: "Food Safety Management" },
    { name: "BRC", description: "British Retail Consortium" },
    { name: "FSC", description: "Forest Stewardship Council" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-4">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">
              Awards & Recognition
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Excellence Recognized Globally
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to innovation and quality has earned us prestigious awards and certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* PRIME Award - Featured */}
          <div className="lg:col-span-2 bg-gradient-to-br from-white to-primary/5 rounded-3xl p-8 lg:p-12 shadow-strong hover-lift border border-primary/10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                  <Star className="w-16 h-16 text-white" fill="currentColor" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-1 mb-4">
                  <span className="text-accent font-bold text-sm">2022 Winner</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  PRIME Awards for Smart Manufacturing
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Recognized by the UAE Ministry of Industry and Advanced Technology (MoIAT) for 
                  excellence in implementing Industry 4.0 technologies and smart manufacturing practices.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    Industry 4.0
                  </span>
                  <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                    Smart Manufacturing
                  </span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    Innovation Excellence
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Certified Excellence
          </h3>
          <p className="text-muted-foreground">
            Committed to international standards and best practices
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="bg-white rounded-2xl p-6 text-center hover-lift border border-gray-100 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-1">{cert.name}</h4>
              <p className="text-xs text-muted-foreground">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
