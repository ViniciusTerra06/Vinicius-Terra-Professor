import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { Mail, MessageCircle } from "lucide-react";
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
            Quer saber mais sobre os cursos ou tem alguma dúvida? Manda uma mensagem!
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h3 className="font-display text-xl font-semibold text-foreground">
              Outros canais
            </h3>

            {[
              {
                icon: <MessageCircle size={20} />,
                label: "WhatsApp",
                value: siteConfig.social.whatsapp || "Configurar link",
                href: siteConfig.social.whatsapp || "#",
              },
              {
                icon: <Mail size={20} />,
                label: "E-mail",
                value: siteConfig.social.email || "Configurar e-mail",
                href: siteConfig.social.email
                  ? `mailto:${siteConfig.social.email}`
                  : "#",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 font-display text-xl font-semibold text-foreground">
              Envie uma mensagem
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
