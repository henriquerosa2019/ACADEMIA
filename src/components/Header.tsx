import { useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "INÍCIO", href: "#" },
  { label: "MODALIDADES", href: "#modalidades" },
  { label: "HORÁRIOS", href: "#horarios" },
  { label: "CONTATO", href: "#contato" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <Dumbbell className="h-7 w-7 text-primary" />
          <span className="font-display text-xl md:text-2xl font-bold uppercase italic tracking-tight text-foreground">
            Corpo <span className="text-primary">&</span> Saúde
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button className="font-display uppercase font-bold text-sm tracking-wider">
            AGENDE SUA AULA
          </Button>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border animate-slide-down">
          <nav className="container flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display text-lg font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button className="font-display uppercase font-bold text-sm tracking-wider w-fit">
              AGENDE SUA AULA
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
