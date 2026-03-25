import Link from "next/link";
import { Play } from "lucide-react";
import "@/app/globals.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Sobre Mim", href: "#about" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Formação", href: "#formacao" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black text-white px-10 z-50">
      <nav className="mx-auto flex items-center max-w-8xl justify-between py-4">
        
        <div className="flex-1">
          <Link href="/" className="text-3xl font-signature tracking-wide">
            Vinicius Terra
          </Link>
        </div>

        <div className="flex gap-9 text-sm font-medium font-space-grotesk">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="transition-colors hover:text-zinc-500 dark:hover:text-zinc-400"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex-1 hidden md:flex justify-end">
          <button className="flex items-center gap-2 px-4 py-2 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-sm font-medium rounded-full transition-all group">
            <Play size={14} className="text-green-500 fill-green-500/20 animate-pulse" />
            Iniciar Tour
          </button>
        </div>
     
      </nav>
    </header>
  );
}
