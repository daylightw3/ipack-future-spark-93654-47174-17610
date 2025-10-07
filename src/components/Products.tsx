import { Card, CardContent } from "@/components/ui/card";
import productDairy from "@/assets/products-dairy.jpg";
import productJuice from "@/assets/products-juice.jpg";
import productFood from "@/assets/products-food.jpg";

const Products = () => {
  const products = [
    {
      title: "For Dairy & Milk",
      image: productDairy,
      description: "Premium quality packaging solutions for dairy products",
    },
    {
      title: "For Juices & Beverages",
      image: productJuice,
      description: "Fresh and vibrant designs for juice products",
    },
    {
      title: "For Tomato Paste & Foods",
      image: productFood,
      description: "Durable packaging for food products",
    },
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

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default Products;
