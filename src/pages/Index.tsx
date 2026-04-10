import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ModalitiesGrid from "@/components/ModalitiesGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ModalitiesGrid />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
