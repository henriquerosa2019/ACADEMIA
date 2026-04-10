import Header from "@/components/Header.tsx";
import Hero from "@/components/Hero.tsx";
import ModalitiesGrid from "@/components/ModalitiesGrid.tsx";
import CTASection from "@/components/CTASection.tsx";
import Footer from "@/components/Footer.tsx";

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
