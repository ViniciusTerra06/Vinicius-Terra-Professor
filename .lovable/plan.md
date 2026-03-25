

# Portfolio Ecosystem — Vinicius Terra

## Overview
Build a complete, professional dark-themed portfolio for Vinicius Terra, automation educator. React + Vite + Tailwind + Framer Motion. Single-page with Blog as a separate route.

---

## Phase 1: Foundation (Design System + Config)

**`src/config/site.ts`** — Central config file with:
- `WEBHOOK_URL` constant (empty string placeholder with `// TODO: Replace with your webhook URL` comment)
- Site metadata (name: "Vinicius Terra", tagline, social links placeholders)

**`src/data/content.ts`** — All static content:
- Courses, testimonials, FAQ items, blog posts, teaching pillars

**`tailwind.config.ts`** — Extended with custom colors:
- `dark-bg: #0A0A0F`, `teal: #00E5C4`, `electric-blue: #2563EB`, `amber-gold: #F59E0B`, `surface: #111118`

**`src/index.css`** — Dark theme CSS variables, import Space Grotesk + Inter from Google Fonts, custom glow/grid utilities

---

## Phase 2: Layout Components

- **`NavBar`** — Sticky, backdrop-blur, logo + anchor links (Sobre, Cursos, Depoimentos, Blog, Contato), mobile hamburger
- **`Footer`** — Logo, tagline, quick links, social icons, "Feito com automação" easter egg

---

## Phase 3: Sections (all on Index page)

1. **Hero** — Full-viewport, SVG animated node-graph background, typewriter headline cycling ["Professor de Automação", "Especialista em N8N", "Construtor de Fluxos com IA"], two CTAs, floating tool badges
2. **About/Didática** — Photo placeholder + 4 teaching pillar cards + animated tools belt
3. **Courses** — 2-3 course cards with tool badge, price, level, "mais vendido" badge, CTA
4. **Testimonials** — Horizontal scroll cards + stats counter row
5. **Contact** — Two columns: social links (WhatsApp, LinkedIn, Instagram, email) + newsletter form (name, email, submit → POST to `WEBHOOK_URL`)
6. **FAQ** — Accordion with 5-6 items, smooth height animation

---

## Phase 4: Blog Route

- `/blog` route with 3 placeholder article cards (title, date, reading time, category, excerpt)

---

## Technical Details

### Webhook Configuration
```typescript
// src/config/site.ts
export const WEBHOOK_URL = ""; // TODO: Replace with your N8N/Make webhook URL
```
The contact/newsletter form will POST `{ name, email }` to this URL. When empty, it logs to console with a toast warning.

### Key Files Structure
```text
src/
├── config/
│   └── site.ts          // WEBHOOK_URL + site metadata
├── data/
│   └── content.ts       // courses, testimonials, FAQ, blog posts
├── components/
│   ├── NavBar.tsx
│   ├── Footer.tsx
│   ├── AnimatedBackground.tsx
│   ├── ToolBadge.tsx
│   ├── CourseCard.tsx
│   ├── TestimonialCard.tsx
│   ├── ContactForm.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── CoursesSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── ContactSection.tsx
│       └── FaqSection.tsx
├── pages/
│   ├── Index.tsx         // All sections composed
│   └── Blog.tsx
```

### Dependencies to Add
- `framer-motion` (animations)
- `lucide-react` (already likely available)

### Build Order
Steps 1-10 as specified, implemented incrementally. All sections built with Framer Motion scroll-reveal animations, dark theme throughout, teal/blue/amber accent system.

