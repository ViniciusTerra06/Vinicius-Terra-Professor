// ============================================
// CONFIGURAÇÃO DO SITE — Vinicius Terra
// ============================================

// TODO: Substitua pela URL do seu webhook (N8N, Make, Zapier, etc.)
export const WEBHOOK_URL = "";

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  social: {
    whatsapp: string;
    whatsappDisplay?: string;
    linkedin: string;
    instagram: string;
    instagramDisplay?: string;
    email: string;
    youtube: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Vinicius Terra",
  tagline: "Professor de Automação & Especialista em N8N",
  description:
    "Aprenda a construir fluxos inteligentes com IA, N8N e ferramentas de automação. Transforme processos manuais em máquinas automáticas.",
  social: {
    whatsapp: "https://wa.me/5551997192049", 
    whatsappDisplay: "+55 51 99719-2049",
    linkedin: "", 
    instagram: "https://www.instagram.com/viniciusterra.dev/", 
    instagramDisplay: "@viniciusterra.dev",
    email: "viniciusterra.tech@gmail.com", 
    youtube: "", 
  },
};
