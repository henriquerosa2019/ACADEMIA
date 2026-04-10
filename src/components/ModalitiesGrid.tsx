import { Card } from "@/components/ui/Card.tsx";
import { Button } from "@/components/ui/Button.tsx";
import { Badge } from "@/components/ui/Badge.tsx";
import { AspectRatio } from "@/components/ui/AspectRatio.tsx";
import { Dumbbell, Activity, Zap, Music, Swords, Leaf, ArrowRight } from "lucide-react";

const modalities = [
  {
    title: "MUSCULAÇÃO",
    description: "Treinamento de força com equipamentos de última geração para hipertrofia e definição muscular.",
    image: "https://www.dropbox.com/scl/fi/i8vxv179g3kcuzzx6p89t/MUSCULACAO.jfif?rlkey=sn11xy17bk4187di2w2u13ega&st=7kv5m4h5&raw=1",
    icon: Dumbbell,
    badge: "POPULAR",
    tags: ["Ganho de Massa", "Força"],
  },
  {
    title: "PILATES",
    description: "Exercícios de baixo impacto focados em postura, flexibilidade e fortalecimento do core.",
    image: "https://www.dropbox.com/scl/fi/qci4y27lszf7cmzne1uaz/PILATES.jfif?rlkey=u3gbo6sbd7zoims55ap7bwiv8&st=ua10t498&raw=1",
    icon: Activity,
    badge: null,
    tags: ["Flexibilidade", "Postura"],
  },
  {
    title: "CROSSFIT",
    description: "Treinos funcionais de alta intensidade que desafiam seus limites físicos e mentais.",
    image: "https://www.dropbox.com/scl/fi/ouwq26fu3t99z8sl6x9mz/CROSS.jfif?rlkey=w11i1m7h6sjui1ct57z986g89&st=anygwg9l&raw=1",
    icon: Zap,
    badge: "INTENSO",
    tags: ["Emagrecimento", "Resistência"],
  },
  {
    title: "ZUMBA",
    description: "Aulas energéticas que combinam dança e fitness para queimar calorias se divertindo.",
    image: "https://www.dropbox.com/scl/fi/5oo5ti6e6tb08329w0exd/ZUMBA.jfif?rlkey=mqf56gs018apqfzwervcxw9d0&st=clzowplh&raw=1",
    icon: Music,
    badge: null,
    tags: ["Emagrecimento", "Diversão"],
  },
  {
    title: "ARTES MARCIAIS",
    description: "Técnicas de combate que desenvolvem disciplina, autodefesa e condicionamento físico.",
    image: "https://www.dropbox.com/scl/fi/n8uk3gj64e10l9aq81e52/ARTE.jfif?rlkey=es4h0gqegexsiwyuzu400q9gp&st=z7f3ykym&raw=1",
    icon: Swords,
    badge: "NOVO",
    tags: ["Defesa Pessoal", "Disciplina"],
  },
  {
    title: "YOGA",
    description: "Práticas milenares para equilíbrio entre corpo e mente, reduzindo estresse e ansiedade.",
    image: "https://www.dropbox.com/scl/fi/ke72cqnt7m5vwvapgrtfl/YOGA.jfif?rlkey=hzmrkzjf4swe9qetz1rdol6aw&st=rzx6kk58&raw=1",
    icon: Leaf,
    badge: null,
    tags: ["Flexibilidade", "Bem-estar"],
  },
];

const ModalitiesGrid = () => {
  return (
    <section id="modalidades" className="py-20 md:py-28 bg-gradient-dark">
      <div className="container">
        <div className="text-center mb-14 space-y-4">
          <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary font-display uppercase tracking-wider text-xs px-3 py-1">
            NOSSAS MODALIDADES
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase italic text-foreground">
            ENCONTRE SEU <span className="text-gradient-orange">TREINO</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Escolha entre 6 modalidades de alta performance e transforme sua rotina com acompanhamento profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modalities.map((mod, i) => (
            <Card
              key={mod.title}
              className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 cursor-pointer opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              <AspectRatio ratio={3 / 4}>
                <img
                  src={mod.image}
                  alt={`Modalidade ${mod.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={800}
                  height={1024}
                  referrerPolicy="no-referrer"
                />
                <div className="card-overlay absolute inset-0" />

                {mod.badge && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground font-display uppercase text-xs tracking-wider">
                    {mod.badge}
                  </Badge>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <mod.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold uppercase italic text-foreground">
                      {mod.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {mod.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {mod.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="font-display uppercase font-bold text-sm tracking-wider text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto"
                  >
                    SABER MAIS <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </AspectRatio>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModalitiesGrid;
