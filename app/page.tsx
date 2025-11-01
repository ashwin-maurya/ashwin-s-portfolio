import { Hero } from "@/components/Hero";
import { Divider } from "@/components/Divider";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { PositionOfResponsibility } from "@/components/PositionOfResponsibility";
import { Languages } from "@/components/Languages";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Education />
      <Divider />
      <Certifications />
      <Divider />
      <PositionOfResponsibility />
      <Divider />
      <Languages />
      <Footer />
    </div>
  );
}
