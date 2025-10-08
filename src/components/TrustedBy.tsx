const TrustedBy = () => {
  const partners = [
    { name: "AMUL", logo: "AMUL" },
    { name: "Al Ain Farms", logo: "Al Ain" },
    { name: "Barakat", logo: "Barakat" },
    { name: "Lacnor", logo: "Lacnor" },
    { name: "Al Rawabi", logo: "Al Rawabi" },
  ];

  return (
    <section className="py-14 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-4">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">
              Trusted Partners
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Powering Global Brands
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leading food & beverage companies trust us for their packaging excellence
          </p>
        </div>
        
        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group relative backdrop-blur-sm bg-white/80 rounded-2xl p-6 border-2 border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  {partner.logo}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
