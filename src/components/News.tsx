import gulfNewsLogo from "@/assets/gulf-news-logo.png";

const News = () => {
  const partners = [
    { name: "Gulf News", logo: gulfNewsLogo },
    { name: "Packaging MEA", logo: null },
    { name: "UAE Ministry of Industry", logo: null },
    { name: "Abu Dhabi Investment Office", logo: null },
    { name: "Emirates Chamber", logo: null },
  ];

  return (
    <section id="news" className="py-20 bg-white">
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognized by leading media outlets and industry organizations across the region
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-6 bg-white rounded-xl hover-lift border border-gray-100 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {partner.logo ? (
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all"
                />
              ) : (
                <span className="text-base font-semibold text-muted-foreground text-center">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
