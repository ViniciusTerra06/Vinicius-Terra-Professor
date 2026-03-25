import AboutSection from "./components/about-section/about-section";
import HomeSection from "./components/hero-section/hero-section";
import { SkillSection } from "./components/skill-section/skill-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
     <HomeSection />
     <AboutSection />
     <SkillSection />
    </div>
  );
}
