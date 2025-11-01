import { Section, SectionTitle } from "./Section";
import { projects } from "@/lib/data";

function escapeRegex(str: string): string {
  return str.replaceAll(/[.*+?^${}()|[\]\\]/g, (match) => `\\${match}`);
}

interface ProjectItemProps {
  readonly title: string;
  readonly description: readonly string[];
}

function ProjectItem({ title, description }: ProjectItemProps) {
  const highlightTech = (text: string): string => {
    const techKeywords = [
      "RAG",
      "PubMed",
      "vector search",
      "React",
      "Postgres",
      "Node",
      "Node.js",
      "Firebase",
      "20%",
      "30%",
      "fully responsive",
      "user-friendly",
    ];

    let result = text;
    for (const keyword of techKeywords) {
      const escapedKeyword = escapeRegex(keyword);
      const regex = new RegExp(`(${escapedKeyword})`, "gi");
      result = result.replaceAll(regex, (match) => `<strong class="text-foreground">${match}</strong>`);
    }

    return result;
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="list-disc list-inside space-y-2 text-muted ml-2">
        {description.map((item) => (
          <li
            key={item}
            dangerouslySetInnerHTML={{ __html: highlightTech(item) }}
          />
        ))}
      </ul>
    </div>
  );
}

export function Projects() {
  return (
    <Section>
      <SectionTitle>Projects</SectionTitle>
      <div className="space-y-10">
        {projects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}

