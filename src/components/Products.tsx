import productPortfolio from "@/assets/products-portfolio.png";
import productDesigns from "@/assets/product-designs.png";
import productMaterials from "@/assets/product-materials.jpg";
import SectionHeading from "@/components/SectionHeading";

const highlights = [
  {
    title: "Design Flexibility",
    image: productDesigns,
    description:
      "1000+ vibrant design possibilities with advanced printing technology",
  },
  {
    title: "Advanced Materials",
    image: productMaterials,
    description:
      "Multi-layer technology ensuring product safety and freshness",
  },
];

const formats = [
  { name: "IBA-Slim", size: "180ml – 1000ml" },
  { name: "IBA-Base", size: "125ml – 1000ml" },
  { name: "IBA-Square", size: "180ml – 1000ml" },
  { name: "ICA-Classic", size: "200ml – 1000ml" },
  { name: "ILA-Leaf", size: "180ml – 1000ml" },
  { name: "IFA-Fino", size: "125ml – 250ml" },
];

const Products = () => {
  return (
    <section
      id="products"
      className="py-14 md:py-16 bg-gradient-to-b from-secondary via-secondary to-background"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="Flexible and Customizable Packaging Solutions"
          subtitle="Innovative packaging designed to meet your unique needs"
        />

        {/* Key facts */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 text-sm font-semibold animate-fade-in">
          <span className="flex items-center gap-2 px-5 py-2 rounded-full border border-primary/25 bg-primary/5 text-primary">
            <span className="w-2 h-2 bg-primary rounded-full" />
            10 Different Sizes
          </span>
          <span className="flex items-center gap-2 px-5 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent-foreground">
            <span className="w-2 h-2 bg-accent rounded-full" />
            1000+ Design Possibilities
          </span>
        </div>

        {/* Portfolio */}
        <div className="mb-10 animate-scale-in">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
            <img
              src={productPortfolio}
              alt="ipack Product Portfolio – Complete Range"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 max-w-5xl mx-auto">
          {highlights.map((product, index) => (
            <div
              key={product.title}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground">
                    {product.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Package Formats */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Package Formats
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                A format for every product and shelf
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {formats.map((format) => (
              <div
                key={format.name}
                className="group flex items-center justify-between bg-card px-6 py-5 transition-colors duration-300 hover:bg-background"
              >
                <span className="font-semibold text-foreground text-sm md:text-base">
                  {format.name}
                </span>
                <span className="text-xs md:text-sm text-muted-foreground tabular-nums">
                  {format.size}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
