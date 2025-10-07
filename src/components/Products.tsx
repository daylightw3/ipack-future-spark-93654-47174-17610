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
    {
      title: "For Juices & Beverages",
      image: productJuice,
      description: "Premium packaging solutions for all beverage types",
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
    <section id="products" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Flexible and Customizable Packaging Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Innovative packaging designed to meet your unique needs
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium text-primary">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              10 Different Sizes
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
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
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card
              key={product.title}
              className="overflow-hidden hover-lift animate-scale-in border-none shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {product.title}
                </h3>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Package Formats */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Available Package Formats
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {formats.map((format, index) => (
              <div
                key={format.name}
                className="bg-white rounded-xl p-6 hover-lift animate-fade-in text-center shadow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-lg font-bold text-primary mb-2">{format.name}</h4>
                <p className="text-sm text-muted-foreground">{format.size}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
