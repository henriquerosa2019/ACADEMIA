import { Dumbbell, MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-card border-t border-border pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2">
              <Dumbbell className="h-6 w-6 text-primary" />
              <span className="font-display text-xl font-bold uppercase italic tracking-tight text-foreground">
                Corpo <span className="text-primary">&</span> Saúde
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Há mais de 10 anos transformando vidas através do fitness de alta performance.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">MODALIDADES</h4>
            <ul className="space-y-2">
              {["Musculação", "Pilates", "Crossfit", "Zumba", "Artes Marciais", "Yoga"].map((item) => (
                <li key={item}>
                  <a href="#modalidades" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">CONTATO</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                Av. Paulista, 1000 - São Paulo, SP
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                contato@corpoesaude.com.br
              </li>
            </ul>
          </div>

          <div id="horarios" className="space-y-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">HORÁRIOS</h4>
            <ul className="space-y-2">
              {[
                { day: "Seg - Sex", time: "05:00 - 23:00" },
                { day: "Sábado", time: "07:00 - 18:00" },
                { day: "Domingo", time: "08:00 - 14:00" },
                { day: "Feriados", time: "08:00 - 12:00" },
              ].map((item) => (
                <li key={item.day} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span className="font-medium text-foreground">{item.day}:</span> {item.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Corpo & Saúde. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
