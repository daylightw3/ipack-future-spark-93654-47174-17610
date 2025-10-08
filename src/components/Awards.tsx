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
    <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
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
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our commitment to innovation and quality has earned us prestigious awards and certifications
          </p>
        </div>

        <div className="mb-20">
          {/* PRIME Award - Featured */}
          <div className="max-w-6xl mx-auto relative backdrop-blur-sm bg-gradient-to-br from-white via-white to-primary/5 rounded-3xl p-10 lg:p-16 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 border-2 border-primary/20">
            {/* Gradient Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10" />
            
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-shrink-0">
                <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group">
                  {/* Animated Pulse Rings */}
                  <div className="absolute inset-0 rounded-full bg-primary opacity-30 animate-ping" />
                  <Star className="relative w-20 h-20 text-white group-hover:rotate-12 transition-transform duration-500" fill="currentColor" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/20 to-accent/30 rounded-full px-6 py-2 mb-4 border border-accent/30">
                  <span className="text-accent font-bold text-base">🏆 2022 Winner</span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                  PRIME Awards for Smart Manufacturing
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                  Recognized by the UAE Ministry of Industry and Advanced Technology (MoIAT) for 
                  excellence in implementing Industry 4.0 technologies and smart manufacturing practices.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold border border-primary/20 hover:bg-primary/20 transition-colors">
                    Industry 4.0
                  </span>
                  <span className="px-5 py-2 bg-accent/10 text-accent rounded-full text-sm font-bold border border-accent/20 hover:bg-accent/20 transition-colors">
                    Smart Manufacturing
                  </span>
                  <span className="px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold border border-primary/20 hover:bg-primary/20 transition-colors">
                    Innovation Excellence
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Certified Excellence
          </h3>
          <p className="text-lg text-muted-foreground">
            Committed to international standards and best practices
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="group relative backdrop-blur-sm bg-white/90 rounded-2xl p-8 text-center hover:-translate-y-2 border-2 border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">{cert.name}</h4>
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
