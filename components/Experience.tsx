import { Section, SectionTitle } from "./Section";
import { experiences } from "@/lib/data";

function formatDateRange(startDate: string, endDate: string): string {
  return `${startDate} - ${endDate}`;
}

function escapeRegex(str: string): string {
  return str.replaceAll(/[.*+?^${}()|[\]\\]/g, (match) => `\\${match}`);
}

interface ExperienceItemProps {
  readonly company: string;
  readonly role: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly location: string;
  readonly type: string;
  readonly responsibilities: readonly string[];
}

function ExperienceItem({
  company,
  role,
  startDate,
  endDate,
  location,
  type,
  responsibilities,
}: ExperienceItemProps) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-3">
        <h3 className="text-xl font-semibold">{company}</h3>
        <span className="text-muted">| {role}</span>
      </div>
      <p className="text-sm text-muted-light mb-4">
        {formatDateRange(startDate, endDate)} {type && `| ${type}`} | {location}
      </p>
      {responsibilities.length > 0 && (
        <ul className="list-disc list-inside space-y-2 text-muted ml-2">
          {responsibilities.map((responsibility) => {
            // Highlight technology names in bold
            const techKeywords = [
              "React",
              "Next.js",
              "Prisma",
              "PostgreSQL",
              "Node.js",
              "Node",
              "Firebase",
              "RAG",
              "PubMed",
              "vector search",
              "Postgres",
            ];
            
            let result = responsibility;
            for (const keyword of techKeywords) {
              const escapedKeyword = escapeRegex(keyword);
              const regex = new RegExp(`(${escapedKeyword})`, "gi");
              result = result.replace(regex, (match) => `<strong class="text-foreground">${match}</strong>`);
            }

            return (
              <li key={responsibility} dangerouslySetInnerHTML={{ __html: result }} />
            );
          })}
        </ul>
      )}
    </div>
  );
}

export function Experience() {
  return (
    <Section>
      <SectionTitle>Experience</SectionTitle>
      <div className="space-y-10">
        {experiences.map((exp) => (
          <ExperienceItem key={`${exp.company}-${exp.startDate}`} {...exp} />
        ))}
      </div>
    </Section>
  );
}

