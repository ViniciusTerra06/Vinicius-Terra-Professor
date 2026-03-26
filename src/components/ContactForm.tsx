import { useState, FormEvent } from "react";
import { WEBHOOK_URL } from "@/config/site";
import { toast } from "sonner";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("aulas");
  const [bottleneck, setBottleneck] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast.error("Preencha seu nome e e-mail.");
      return;
    }

    if (!WEBHOOK_URL) {
      toast.warning("Webhook não configurado. Dados no console.");
      console.log("Form data:", { name, email, service, bottleneck });
      setName("");
      setEmail("");
      setBottleneck("");
      return;
    }

    setLoading(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, service, bottleneck }),
      });
      toast.success("Mensagem enviada com sucesso! Retornarei em breve.");
      setName("");
      setEmail("");
      setBottleneck("");
    } catch {
      toast.error("Erro ao enviar. Tente novamente clicando no ícone do WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="space-y-3">
        <label className="block text-sm font-medium text-foreground">Qual o seu objetivo principal?</label>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2 cursor-pointer rounded-md border border-border bg-muted/50 px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted focus-within:ring-1 focus-within:ring-primary">
            <input 
              type="radio" 
              name="service" 
              value="aulas" 
              checked={service === "aulas"} 
              onChange={() => setService("aulas")} 
              className="accent-primary" 
            /> 
            Aprender (Aulas)
          </label>
          <label className="flex items-center gap-2 cursor-pointer rounded-md border border-border bg-muted/50 px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted focus-within:ring-1 focus-within:ring-primary">
            <input 
              type="radio" 
              name="service" 
              value="consultoria" 
              checked={service === "consultoria"} 
              onChange={() => setService("consultoria")} 
              className="accent-primary" 
            /> 
            Para Empresas (Consultoria)
          </label>
        </div>
      </div>

      <input
        type="text"
        placeholder="Seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded-md border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <input
        type="email"
        placeholder="Seu e-mail profissional"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-md border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />

      {service === "consultoria" && (
        <textarea
          placeholder="Qual processo manual na sua empresa está te custando mais tempo e dinheiro hoje?"
          rows={3}
          value={bottleneck}
          onChange={(e) => setBottleneck(e.target.value)}
          className="resize-none rounded-md border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-2 rounded-md bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50 glow-teal"
      >
        {loading ? "Enviando solicitação..." : service === "aulas" ? "Agendar minha primeira aula" : "Solicitar Diagnóstico Gratuito"}
      </button>
    </form>
  );
};

export default ContactForm;
