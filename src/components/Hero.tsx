import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

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
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* HeyGen Avatar Iframe - Full Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://labs.heygen.com/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiIxZWM1NmNhZDI0Zjg0YzhkOGEzYmFjNDlh%0D%0AYmIxMTk3MSIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3Yz%0D%0ALzFlYzU2Y2FkMjRmODRjOGQ4YTNiYWM0OWFiYjExOTcxL2Z1bGwvMi4yL3ByZXZpZXdfdGFyZ2V0%0D%0ALndlYnAiLCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6ImZj%0D%0AMTI4YTkzZDhjYTRmOGJiMTRhNDE4YWJkNDYzM2I1IiwidXNlcm5hbWUiOiI5ODMyYTRjM2EzMzI0%0D%0AMzI4YjhiNGJjMWYyY2I0ZjllOCJ9&inIFrame=1"
          allow="microphone camera"
          className="w-full h-full border-0"
          title="HeyGen Interactive AI Assistant"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
        <div className="max-w-3xl">
          <div className="text-white animate-fade-in space-y-6">
            <div className="space-y-4">
              <p className="text-accent font-semibold text-lg tracking-wide uppercase">
                ipack - Closer to You
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                Engineering the Future of{" "}
                <span className="bg-gradient-to-r from-accent via-accent to-white bg-clip-text text-transparent">
                  Aseptic Packaging
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed font-light">
              Sustainable, innovative, and reliable packaging solutions powered by Industry 4.0. 
              Protecting your products and our planet with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("#products")}
                className="bg-white text-primary hover:bg-accent hover:text-white font-semibold text-lg px-8 shadow-strong transition-all duration-300 hover:scale-105"
              >
                Explore Our Solutions
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#sustainability")}
                className="border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 transition-all duration-300"
              >
                Our Commitment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
