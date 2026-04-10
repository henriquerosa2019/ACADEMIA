import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ChevronRight, Flame, Users, Trophy } from "lucide-react";

const heroImg = "https://www.dropbox.com/scl/fi/4j1s2o5l2owl140habk4s/HERO-GYM.PNG?rlkey=2x9qww00ri8nx8haf8ibppws5&st=gn7cp3zm&raw=1";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Interior da academia Corpo & Saúde"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
        referrerPolicy="no-referrer"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="container relative z-10 pt-20">
        <div className="max-w-2xl space-y-6">
          <div className="flex flex-wrap gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary font-display uppercase tracking-wider text-xs px-3 py-1">
              <Flame className="h-3 w-3 mr-1" /> #1 em Alta Performance
            </Badge>
            <Badge variant="outline" className="border-border bg-secondary text-muted-foreground font-display uppercase tracking-wider text-xs px-3 py-1">
              <Users className="h-3 w-3 mr-1" /> +5.000 Alunos
            </Badge>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase italic leading-[0.9] opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <span className="text-white">SUPERE SEUS</span>{" "}
            <span className="text-primary">LIMITES</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            Descubra as modalidades que vão transformar seu corpo e sua mente. 
            Treinamentos de alta intensidade com os melhores profissionais.
          </p>

          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
            <Button size="lg" className="font-display uppercase font-bold text-base tracking-wider glow-orange">
              COMECE AGORA <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="font-display uppercase font-bold text-base tracking-wider border-border text-foreground hover:bg-secondary">
              VER MODALIDADES
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
            {[
              { icon: Trophy, label: "10+ anos", sub: "de experiência" },
              { icon: Users, label: "50+", sub: "profissionais" },
              { icon: Flame, label: "6", sub: "modalidades" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <stat.icon className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-display text-lg font-bold uppercase">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
