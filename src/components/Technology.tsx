import factoryAgv from "@/assets/factory-agv.jpg";
import factoryQuality from "@/assets/factory-quality.jpg";
import SectionHeading from "@/components/SectionHeading";
import { Bot, Gauge } from "lucide-react";

const features = [
  {
    index: "01",
    icon: Bot,
    title: "Automated Guided Vehicles (AGV)",
    description:
      "State-of-the-art AGV logistics system for seamless material handling and warehouse automation",
    image: factoryAgv,
  },
  {
    index: "02",
    icon: Gauge,
    title: "High-Speed Production",
    description:
      "Uteco Diamond press operating at 600 m/min with precision robotics for maximum efficiency",
    image: factoryQuality,
  },
];

const Technology = () => {
  return (
    <section
      id="technology"
      className="py-14 md:py-16 bg-gradient-to-b from-background via-background to-secondary/60"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="Innovation & Technology"
          title="Driven by Industry 4.0"
          subtitle="Award-winning smart manufacturing with cutting-edge automation and digital transformation"
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="group animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="h-full bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-7 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                      <feature.icon className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">
                      {feature.index}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
