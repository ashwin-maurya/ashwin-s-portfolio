import { Section, SectionTitle } from "./Section";
import { positionsOfResponsibility } from "@/lib/data";

interface PORItemProps {
  readonly title: string;
  readonly description: string;
}

function PORItem({ title, description }: PORItemProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted">{description}</p>
    </div>
  );
}

export function PositionOfResponsibility() {
  return (
    <Section>
      <SectionTitle>Position of Responsibility</SectionTitle>
      <div className="space-y-4">
        {positionsOfResponsibility.map((por) => (
          <PORItem key={por.title} {...por} />
        ))}
      </div>
    </Section>
  );
}

