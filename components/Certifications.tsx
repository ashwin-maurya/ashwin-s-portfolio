"use client";

import { Section, SectionTitle } from "./Section";
import { certifications } from "@/lib/data";
import { SpotlightCard } from "./ui/spotlight-card";
import { motion } from "framer-motion";

interface CertificationItemProps {
  readonly name: string;
  readonly issuer: string;
  readonly link: string;
  readonly index: number;
}

function CertificationItem({
  name,
  issuer,
  link,
  index,
}: CertificationItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
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
    </motion.div>
  );
}

export function Certifications() {
  return (
    <Section>
      <SectionTitle>Certifications</SectionTitle>
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <CertificationItem key={cert.name} {...cert} index={index} />
        ))}
      </div>
    </Section>
  );
}
