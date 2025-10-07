const News = () => {
  const partners = [
    { name: "Gulf News" },
    { name: "Packaging MEA" },
    { name: "MoIAT UAE" },
    { name: "EDB Abu Dhabi" },
    { name: "Emirates Chamber" },
    { name: "MIITE" },
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            As Featured In
          </h2>
          <p className="text-lg text-muted-foreground">
            Recognized by leading media and industry organizations
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-fade-in justify-center flex-wrap">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="flex items-center justify-center min-w-[150px] opacity-60 hover:opacity-100 transition-opacity"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-lg font-semibold text-foreground">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
