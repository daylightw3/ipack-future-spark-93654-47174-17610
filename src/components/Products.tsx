import { Card, CardContent } from "@/components/ui/card";
import productPortfolio from "@/assets/products-portfolio.png";
import productDesigns from "@/assets/product-designs.png";
import productMaterials from "@/assets/product-materials.jpg";
import productJuice from "@/assets/products-juice.jpg";
const Products = () => {
  const products = [{
    title: "Design Flexibility",
    image: productDesigns,
    description: "1000+ vibrant design possibilities with advanced printing technology"
  }, {
    title: "Advanced Materials",
    image: productMaterials,
    description: "Multi-layer technology ensuring product safety and freshness"
  }];
  const formats = [{
    name: "IBA-Slim",
    size: "180ml - 1000ml"
  }, {
    name: "IBA-Base",
    size: "125ml - 1000ml"
  }, {
    name: "IBA-Square",
    size: "180ml - 1000ml"
  }, {
    name: "ICA-Classic",
    size: "200ml - 1000ml"
  }, {
    name: "ILA-Leaf",
    size: "180ml - 1000ml"
  }, {
    name: "IFA-Fino",
    size: "125ml - 250ml"
  }];
  return <section id="products" className="py-14 bg-gradient-to-b from-secondary via-secondary to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          
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
        <div className="mb-12 animate-scale-in">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src={productPortfolio} alt="ipack Product Portfolio - Complete Range" className="w-full h-auto" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-14 max-w-5xl mx-auto">
          {products.map((product, index) => <div key={product.title} className="group relative animate-scale-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <Card className="overflow-hidden backdrop-blur-sm bg-white/90 border-2 border-primary/10 hover:border-primary/30 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                {/* Gradient Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
                
                <div className="aspect-square overflow-hidden relative">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </CardContent>
              </Card>
            </div>)}
        </div>

        {/* Package Formats */}
        
      </div>
    </section>;
};
export default Products;