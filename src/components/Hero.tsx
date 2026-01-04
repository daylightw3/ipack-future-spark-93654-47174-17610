import { Button } from "@/components/ui/button";
import { AlertTriangle, ChevronDown } from "lucide-react";

// Toggle this to enable/disable the interactive avatar
const AVATAR_ENABLED = false;

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return <>
      {/* Professional Large Interactive Avatar Frame */}
      <section id="home" className="relative h-screen overflow-hidden">
        {AVATAR_ENABLED ? (
          <div className="w-full h-full">
            <div className="w-full h-full">
              <div className="relative w-full h-full overflow-hidden">
                {/* Avatar iFrame */}
                <iframe src="https://labs.heygen.com/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiIxZWM1NmNhZDI0Zjg0YzhkOGEzYmFjNDlh%0D%0AYmIxMTk3MSIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3Yz%0D%0ALzFlYzU2Y2FkMjRmODRjOGQ4YTNiYWM0OWFiYjExOTcxL2Z1bGwvMi4yL3ByZXZpZXdfdGFyZ2V0%0D%0ALndlYnAiLCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6ImZj%0D%0AMTI4YTkzZDhjYTRmOGJiMTRhNDE4YWJkNDYzM2I1IiwidXNlcm5hbWUiOiI5ODMyYTRjM2EzMzI0%0D%0AMzI4YjhiNGJjMWYyY2I0ZjllOCJ9&inIFrame=1" allow="microphone; camera; autoplay; encrypted-media; fullscreen; display-capture" allowFullScreen className="w-full h-full border-0" title="HeyGen Interactive AI Assistant - Voice Chat Enabled" style={{
                  width: '100%',
                  height: '100%'
                }} />
              </div>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center text-white">
            <div className="text-center space-y-6 px-4">
              <AlertTriangle className="w-20 h-20 text-amber-500 mx-auto animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Interactive Assistant Temporarily Unavailable
              </h2>
              <p className="text-gray-300 text-lg max-w-md mx-auto">
                We're currently performing updates. Please explore our website below.
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection("#products")}
                className="mt-4 font-bold text-lg px-8 py-6"
              >
                <ChevronDown className="mr-2 h-5 w-5" />
                Scroll to Explore
              </Button>
            </div>
          </div>
        )}
      </section>

      {/* Content Section Below Avatar - Only show when avatar is enabled */}
      {AVATAR_ENABLED && (
        <section className="relative py-16 overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{
              animationDelay: '1s'
            }} />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Premium Glass Container */}
              <div className="relative backdrop-blur-sm bg-background/80 border border-primary/20 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                {/* Gradient Border Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl -z-10" />
                
                <div className="space-y-8 text-center">
                  {/* Animated Tagline */}
                  <div className="animate-fade-in">
                    
                  </div>

                  {/* Staggered Headline Animation */}
                  <div className="space-y-4 animate-slide-up" style={{
                    animationDelay: '0.2s'
                  }}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                      Engineering the Future of{" "}
                      <span className="relative inline-block">
                        <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                          Aseptic Packaging
                        </span>
                        <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 -z-10" />
                      </span>
                    </h1>
                  </div>

                  {/* Enhanced Description */}
                  

                  {/* Animated CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-center animate-scale-in" style={{
                    animationDelay: '0.6s'
                  }}>
                    <Button size="lg" onClick={() => scrollToSection("#products")} className="group font-bold text-lg px-10 py-6 shadow-2xl shadow-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-primary/70 relative overflow-hidden">
                      <span className="relative z-10">Explore Our Solutions</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => scrollToSection("#sustainability")} className="font-bold text-lg px-10 py-6 border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      Our Commitment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>;
};
export default Hero;