import { Section, SectionTitle } from "./Section";
import { education } from "@/lib/data";

interface EducationItemProps {
  readonly institution: string;
  readonly degree: string;
  readonly grade: string;
}

function EducationItem({
  institution,
  degree,
  grade,
}: EducationItemProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-1">{institution}</h3>
      <p className="text-muted mb-1">{degree}</p>
      <p className="text-sm text-muted-light">{grade}</p>
    </div>
  );
}

export function Education() {
  return (
    <Section>
      <SectionTitle>Education</SectionTitle>
      <div className="space-y-6">
        {education.map((edu) => (
          <EducationItem key={edu.institution} {...edu} />
        ))}
      </div>
    </Section>
  );
}

