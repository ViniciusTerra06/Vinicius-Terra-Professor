import { siteConfig } from "@/config/site";
import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="font-signature text-4xl text-foreground hover:text-primary transition-colors">
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">{siteConfig.tagline}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Sobre", href: "#sobre" },
                { label: "Como Funciona", href: "#como-funciona" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "FAQ", href: "#faq" },
                { label: "Contato", href: "#contato" },
                { label: "Blog", href: "/blog" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Contato
            </h4>
            <p className="text-sm text-muted-foreground">
              Entre em contato para parcerias, dúvidas ou colaborações.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground/50">
            Feito com automação <Zap size={12} className="text-primary" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
