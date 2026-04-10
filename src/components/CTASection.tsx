import { Button } from "@/components/ui/Button";
import { ChevronRight, Gift } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-orange relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-foreground/20 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-foreground/20 translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground font-display uppercase text-sm tracking-wider font-semibold">
          <Gift className="h-4 w-4" /> OFERTA ESPECIAL
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase italic text-primary-foreground leading-[0.95]">
          AULA EXPERIMENTAL<br />
          <span className="text-primary-foreground/80">100% GRÁTIS</span>
        </h2>

        <p className="text-lg text-primary-foreground/80 max-w-lg mx-auto">
          Venha conhecer nossa estrutura e experimentar qualquer modalidade sem compromisso. 
          Seu primeiro passo começa aqui.
        </p>

        <Button
          size="lg"
          className="bg-background text-foreground hover:bg-background/90 font-display uppercase font-bold text-base tracking-wider"
        >
          AGENDAR MINHA AULA GRÁTIS <ChevronRight className="ml-1 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
