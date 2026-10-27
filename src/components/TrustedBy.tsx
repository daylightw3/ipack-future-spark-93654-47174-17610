import SectionHeading from "@/components/SectionHeading";

const partners = [
  { name: "AMUL", tag: "Dairy · India" },
  { name: "Al Ain Farms", tag: "Dairy · UAE" },
  { name: "Barakat", tag: "Juices · UAE" },
  { name: "Lacnor", tag: "Beverages · GCC" },
  { name: "Al Rawabi", tag: "Dairy · UAE" },
];

const TrustedBy = () => {
  return (
    <section className="py-14 md:py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="Trusted Partners"
          title="Powering Global Brands"
          subtitle="Leading food & beverage companies trust us for their packaging excellence"
        />

        {/* Hairline partner grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border rounded-2xl overflow-hidden shadow-sm animate-fade-in">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group relative bg-card px-6 py-10 flex flex-col items-center justify-center text-center transition-colors duration-300 hover:bg-background"
            >
              {/* Top accent bar on hover */}
              <span className="absolute top-0 left-0 right-0 h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              <span className="text-xl md:text-2xl font-bold text-muted-foreground group-hover:text-foreground tracking-tight transition-colors duration-300">
                {partner.name}
              </span>
              <span className="mt-2 text-[11px] md:text-xs text-muted-foreground/70 tracking-wide uppercase">
                {partner.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
