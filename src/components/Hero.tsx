import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-manufacturing.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Manufacturing facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Engineering the Future of Aseptic Packaging
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              Sustainable, innovative, and reliable solutions powered by Industry 4.0. 
              We protect your products and our planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("#products")}
                className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8"
              >
                Explore Our Solutions
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#sustainability")}
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8"
              >
                Our Commitment
              </Button>
            </div>
          </div>

          {/* Right Side - Avatar Frame */}
          <div className="animate-scale-in">
            <div className="relative">
              {/* Avatar Container */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 shadow-2xl">
                <div className="bg-white rounded-xl overflow-hidden aspect-[3/4] flex items-center justify-center relative">
                  {/* Placeholder for HeyGen Avatar */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <MessageCircle className="w-16 h-16 text-primary/20 mb-4" />
                    <p className="text-muted-foreground font-medium">
                      HeyGen Interactive Avatar
                    </p>
                    <p className="text-sm text-muted-foreground/60 mt-2">
                      Embed your avatar here
                    </p>
                  </div>
                </div>
                
                {/* Callout */}
                <div className="mt-4 flex items-center justify-center gap-2 text-white">
                  <MessageCircle className="w-5 h-5" />
                  <p className="font-medium">Have a question? Ask our Digital Assistant!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
