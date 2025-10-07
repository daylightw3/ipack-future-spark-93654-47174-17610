import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-manufacturing.jpg";
import { useEffect } from "react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Load HeyGen Interactive Avatar Script
    const script = document.createElement('script');
    script.innerHTML = `!function(window){const host="https://labs.heygen.com",url=host+"/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiIxZWM1NmNhZDI0Zjg0YzhkOGEzYmFjNDlh%0D%0AYmIxMTk3MSIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3Yz%0D%0ALzFlYzU2Y2FkMjRmODRjOGQ4YTNiYWM0OWFiYjExOTcxL2Z1bGwvMi4yL3ByZXZpZXdfdGFyZ2V0%0D%0ALndlYnAiLCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6ImZj%0D%0AMTI4YTkzZDhjYTRmOGJiMTRhNDE4YWJkNDYzM2I1IiwidXNlcm5hbWUiOiI5ODMyYTRjM2EzMzI0%0D%0AMzI4YjhiNGJjMWYyY2I0ZjllOCJ9&inIFrame=1",clientWidth=document.body.clientWidth,wrapDiv=document.createElement("div");wrapDiv.id="heygen-streaming-embed";const container=document.createElement("div");container.id="heygen-streaming-container";const stylesheet=document.createElement("style");stylesheet.innerHTML=\`
  #heygen-streaming-embed {
    z-index: 9999;
    position: fixed;
    left: 40px;
    bottom: 40px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.12);
    transition: all linear 0.1s;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
  }
  #heygen-streaming-embed.show {
    opacity: 1;
    visibility: visible;
  }
  #heygen-streaming-embed.expand {
    \${clientWidth<540?"height: 266px; width: 96%; left: 50%; transform: translateX(-50%);":"height: 366px; width: calc(366px * 16 / 9);"}
    border: 0;
    border-radius: 8px;
  }
  #heygen-streaming-container {
    width: 100%;
    height: 100%;
  }
  #heygen-streaming-container iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
  \`;const iframe=document.createElement("iframe");iframe.allowFullscreen=!1,iframe.title="Streaming Embed",iframe.role="dialog",iframe.allow="microphone",iframe.src=url;let visible=!1,initial=!1;window.addEventListener("message",(e=>{e.origin===host&&e.data&&e.data.type&&"streaming-embed"===e.data.type&&("init"===e.data.action?(initial=!0,wrapDiv.classList.toggle("show",initial)):"show"===e.data.action?(visible=!0,wrapDiv.classList.toggle("expand",visible)):"hide"===e.data.action&&(visible=!1,wrapDiv.classList.toggle("expand",visible)))})),container.appendChild(iframe),wrapDiv.appendChild(stylesheet),wrapDiv.appendChild(container),document.body.appendChild(wrapDiv)}(globalThis);`;
    document.body.appendChild(script);

    return () => {
      const avatarDiv = document.getElementById('heygen-streaming-embed');
      if (avatarDiv) avatarDiv.remove();
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="ipack Manufacturing Facility - Advanced Aseptic Packaging Production"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-95"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="lg:col-span-2 text-white animate-fade-in space-y-6">
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

          {/* Right Side - 16:9 Avatar Frame */}
          <div className="lg:col-span-3 animate-scale-in">
            <div className="relative">
              {/* Avatar Container with 16:9 Aspect Ratio */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-6 lg:p-8 border-2 border-white/20 shadow-2xl hover:shadow-glow transition-all duration-500">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden aspect-[16/9] flex items-center justify-center relative shadow-inner">
                  {/* Placeholder for HeyGen Avatar */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 animate-pulse">
                      <MessageCircle className="w-10 h-10 text-white/60" />
                    </div>
                    <p className="text-white/90 font-semibold text-lg">
                      Interactive AI Assistant
                    </p>
                    <p className="text-white/60 text-sm mt-2 max-w-xs">
                      Click the avatar icon at the bottom of the page to start a conversation
                    </p>
                  </div>
                </div>
                
                {/* Callout */}
                <div className="mt-6 flex items-center justify-center gap-3 text-white/90">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-accent" />
                  </div>
                  <p className="font-semibold text-base">
                    Have questions? Ask our AI Digital Assistant!
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse delay-75"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
