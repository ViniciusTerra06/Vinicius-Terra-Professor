import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MethodologySection from "@/components/sections/MethodologySection";
import ConsultancySection from "@/components/sections/ConsultancySection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection"));
const FaqSection = lazy(() => import("@/components/sections/FaqSection"));

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.hash, location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <MethodologySection />
        <ConsultancySection />
        <ProjectsSection />
        <Suspense fallback={<div className="flex h-40 items-center justify-center"><p className="text-muted-foreground animate-pulse">Carregando depoimentos...</p></div>}>
          <TestimonialsSection />
        </Suspense>
        <ContactSection />
        <Suspense fallback={<div className="flex h-40 items-center justify-center"><p className="text-muted-foreground animate-pulse">Carregando FAQ...</p></div>}>
          <FaqSection />
        </Suspense>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
