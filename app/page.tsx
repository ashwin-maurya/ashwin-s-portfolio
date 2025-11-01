import { Hero } from "@/components/Hero";
import { Divider } from "@/components/Divider";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Languages } from "@/components/Languages";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/ui/navbar";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <SpotlightCard>

      <ScrollIndicator />
      <Navbar />
      <Hero />
      <div id="experience">
        <Divider />
        <Experience />
      </div>
      <div id="projects">
        <Divider />
        <Projects />
      </div>
      <div id="skills">
        <Divider />
        <Skills />
      </div>
      <div id="education">
        <Divider />
        <Education />
      </div>
      <div id="certifications">
        <Divider />
        <Certifications />
      </div>
      <Divider />
      <Languages />
      <Footer />
      </SpotlightCard>

    </div>
  );
}
