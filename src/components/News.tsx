const News = () => {
  const partners = [
    { name: "Gulf News" },
    { name: "Packaging MEA" },
    { name: "UAE Ministry of Industry" },
    { name: "Abu Dhabi Investment Office" },
    { name: "Emirates Chamber" },
  ];

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-white via-secondary/30 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-2 mb-4">
            <span className="text-accent font-semibold text-sm tracking-wide uppercase">
              Media & Recognition
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            As Featured In
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recognized by leading media outlets and industry organizations across the region
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group relative backdrop-blur-sm bg-white/90 rounded-2xl p-8 hover:-translate-y-2 border-2 border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              <div className="flex items-center justify-center">
                <span className="text-base md:text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors text-center leading-relaxed">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
