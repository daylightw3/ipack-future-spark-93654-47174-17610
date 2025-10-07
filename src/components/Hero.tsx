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
    <>
      {/* Full-Screen Avatar Background */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden"
      >
        <div className="absolute inset-0">
          <iframe
            src="https://labs.heygen.com/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiIxZWM1NmNhZDI0Zjg0YzhkOGEzYmFjNDlh%0D%0AYmIxMTk3MSIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3Yz%0D%0ALzFlYzU2Y2FkMjRmODRjOGQ4YTNiYWM0OWFiYjExOTcxL2Z1bGwvMi4yL3ByZXZpZXdfdGFyZ2V0%0D%0ALndlYnAiLCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6ImZj%0D%0AMTI4YTkzZDhjYTRmOGJiMTRhNDE4YWJkNDYzM2I1IiwidXNlcm5hbWUiOiI5ODMyYTRjM2EzMzI0%0D%0AMzI4YjhiNGJjMWYyY2I0ZjllOCJ9&inIFrame=1"
            allow="microphone camera"
            className="w-full h-full border-0"
            title="HeyGen Interactive AI Assistant"
          />
        </div>
      </section>

      {/* Content Section Below Avatar */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-accent font-semibold text-lg tracking-wide uppercase">
                  ipack - Closer to You
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                  Engineering the Future of{" "}
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Aseptic Packaging
                  </span>
                </h1>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Sustainable, innovative, and reliable packaging solutions powered by Industry 4.0. 
                Protecting your products and our planet with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("#products")}
                  className="font-semibold text-lg px-8 shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Explore Our Solutions
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("#sustainability")}
                  className="font-semibold text-lg px-8 transition-all duration-300"
                >
                  Our Commitment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
