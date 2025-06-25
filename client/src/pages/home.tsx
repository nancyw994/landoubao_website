import Header from "@/components/header";
import Hero from "@/components/hero";
import FeaturedProducts from "@/components/featured-products";
import BusinessToggle from "@/components/business-toggle";
import AIShowcase from "@/components/ai-showcase";
import Testimonials from "@/components/testimonials";
import News from "@/components/news";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <FeaturedProducts />
      <BusinessToggle />
      <AIShowcase />
      <Testimonials />
      <News />
      <Footer />
    </div>
  );
}
