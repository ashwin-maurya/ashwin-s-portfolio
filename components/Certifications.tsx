import { Section, SectionTitle } from "./Section";
import { certifications } from "@/lib/data";

interface CertificationItemProps {
  readonly name: string;
  readonly issuer: string;
  readonly link: string;
}

function CertificationItem({
  name,
  issuer,
  link,
}: CertificationItemProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-sm text-muted">
        {issuer} |{" "}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-hover transition-colors underline"
        >
          Certificate
        </a>
      </p>
    </div>
  );
}

export function Certifications() {
  return (
    <Section>
      <SectionTitle>Certifications</SectionTitle>
      <div className="space-y-4">
        {certifications.map((cert) => (
          <CertificationItem key={cert.name} {...cert} />
        ))}
      </div>
    </Section>
  );
}

