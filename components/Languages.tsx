import { Section, SectionTitle } from "./Section";
import { languages } from "@/lib/data";

export function Languages() {
  return (
    <Section>
      <SectionTitle>Languages</SectionTitle>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-muted">Experienced</h3>
          <p className="text-muted">{languages.experienced.join(" • ")}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-muted">Familiar</h3>
          <p className="text-muted">{languages.familiar.join(" • ")}</p>
        </div>
      </div>
    </Section>
  );
}

