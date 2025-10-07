import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import About from "@/components/About";
import Products from "@/components/Products";
import Technology from "@/components/Technology";
import Awards from "@/components/Awards";
import Sustainability from "@/components/Sustainability";
import News from "@/components/News";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustedBy />
      <About />
      <Products />
      <Technology />
      <Awards />
      <Sustainability />
      <News />
      <Footer />
    </div>
  );
};

export default Index;
