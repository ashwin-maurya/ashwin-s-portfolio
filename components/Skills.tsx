import { Section, SectionTitle } from "./Section";
import { skills } from "@/lib/data";

interface SkillTagProps {
  readonly skill: string;
}

function SkillTag({ skill }: SkillTagProps) {
  return (
    <span className="px-3 py-1.5 bg-card border border-border rounded text-sm hover:bg-card-hover transition-colors">
      {skill}
    </span>
  );
}

interface SkillCategoryProps {
  readonly title: string;
  readonly items: readonly string[];
}

function SkillCategory({ title, items }: SkillCategoryProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-muted">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <SkillTag key={item} skill={item} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <Section>
      <SectionTitle>Skills</SectionTitle>
      <div className="space-y-8">
        <SkillCategory title="Development" items={skills.development} />
        <SkillCategory title="Cloud" items={skills.cloud} />
        <SkillCategory title="Familiar Software" items={skills.tools} />
        <SkillCategory title="Other Skills" items={skills.other} />
      </div>
    </Section>
  );
}

