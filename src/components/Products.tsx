import { Card, CardContent } from "@/components/ui/card";
import productPortfolio from "@/assets/products-portfolio.png";
import productDesigns from "@/assets/product-designs.png";
import productMaterials from "@/assets/product-materials.jpg";
import productJuice from "@/assets/products-juice.jpg";

const Products = () => {
  const products = [
    {
      title: "Design Flexibility",
      image: productDesigns,
      description: "1000+ vibrant design possibilities with advanced printing technology",
    },
    {
      title: "Advanced Materials",
      image: productMaterials,
      description: "Multi-layer technology ensuring product safety and freshness",
    },
  ];

  const formats = [
    { name: "IBA-Slim", size: "180ml - 1000ml" },
    { name: "IBA-Base", size: "125ml - 1000ml" },
    { name: "IBA-Square", size: "180ml - 1000ml" },
    { name: "ICA-Classic", size: "200ml - 1000ml" },
    { name: "ILA-Leaf", size: "180ml - 1000ml" },
    { name: "IFA-Fino", size: "125ml - 250ml" },
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-secondary via-secondary to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-4">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">
              Our Products
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Flexible and Customizable Packaging Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Innovative packaging designed to meet your unique needs
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-base font-semibold">
            <span className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
              10 Different Sizes
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="w-3 h-3 bg-accent rounded-full animate-pulse"></span>
              1000+ Design Possibilities
            </span>
          </div>
        </div>

        {/* Hero Portfolio Image */}
        <div className="mb-16 animate-scale-in">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={productPortfolio}
              alt="ipack Product Portfolio - Complete Range"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group relative animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="overflow-hidden backdrop-blur-sm bg-white/90 border-2 border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                {/* Gradient Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
                
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Package Formats */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
              Available Package Formats
            </h3>
            <p className="text-muted-foreground">
              Choose from our diverse range of sizes to perfectly fit your product needs
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {formats.map((format, index) => (
              <div
                key={format.name}
                className="group relative backdrop-blur-sm bg-white/90 rounded-2xl p-8 hover-lift animate-fade-in text-center shadow-md border-2 border-transparent hover:border-primary/20 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-6 h-8 border-2 border-primary rounded-sm" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform">{format.name}</h4>
                <p className="text-sm md:text-base text-muted-foreground font-medium">{format.size}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
