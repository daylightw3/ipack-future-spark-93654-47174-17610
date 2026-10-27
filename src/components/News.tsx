import SectionHeading from "@/components/SectionHeading";

const media = [
  { name: "Gulf News", tag: "National Press" },
  { name: "Packaging MEA", tag: "Industry Media" },
  { name: "UAE Ministry of Industry", tag: "Government" },
  { name: "Abu Dhabi Investment Office", tag: "Government" },
  { name: "Emirates Chamber", tag: "Trade Body" },
];

const News = () => {
  return (
    <section id="news" className="py-14 md:py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="Media & Recognition"
          title="As Featured In"
          subtitle="Recognized by leading media outlets and industry organizations across the region"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border rounded-2xl overflow-hidden shadow-sm animate-fade-in">
          {media.map((partner) => (
            <div
              key={partner.name}
              className="group relative bg-card px-5 py-10 flex flex-col items-center justify-center text-center transition-colors duration-300 hover:bg-background"
            >
              <span className="absolute top-0 left-0 right-0 h-0.5 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              <span className="text-sm md:text-base font-bold text-muted-foreground group-hover:text-foreground leading-snug transition-colors duration-300">
                {partner.name}
              </span>
              <span className="mt-2 text-[11px] text-muted-foreground/70 tracking-wide uppercase">
                {partner.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
