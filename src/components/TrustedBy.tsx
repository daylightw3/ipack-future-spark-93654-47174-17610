const TrustedBy = () => {
  const partners = [
    { name: "AMUL", logo: "AMUL" },
    { name: "Al Ain Farms", logo: "Al Ain" },
    { name: "Barakat", logo: "Barakat" },
    { name: "Lacnor", logo: "Lacnor" },
    { name: "Al Rawabi", logo: "Al Rawabi" },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center text-2xl font-bold mb-12 text-muted-foreground">
          Powering Global Brands
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="text-xl md:text-2xl font-bold text-primary/60 hover:text-primary transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
