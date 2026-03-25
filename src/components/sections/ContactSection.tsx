import { motion } from "framer-motion";
import { Mail, MessageCircle, Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";

const ContactSection = () => {
  return (
    <section id="contato" className="border-t border-border py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Entre em contato
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Quer saber mais sobre as aulas, consultorias ou trocar uma ideia? Escolha a melhor forma de falar comigo!
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            {
              icon: <MessageCircle size={28} />,
              label: "WhatsApp",
              value: siteConfig.social.whatsappDisplay || "Configurar número",
              href: siteConfig.social.whatsapp || "#",
            },
            {
              icon: <Instagram size={28} />,
              label: "Instagram",
              value: siteConfig.social.instagramDisplay || "@seu_usuario",
              href: siteConfig.social.instagram || "#",
            },
            {
              icon: <Mail size={28} />,
              label: "E-mail",
              value: siteConfig.social.email || "Configurar e-mail",
              href: siteConfig.social.email
                ? `mailto:${siteConfig.social.email}`
                : "#",
            },
          ].map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 text-center transition-all hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                {item.icon}
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">{item.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
