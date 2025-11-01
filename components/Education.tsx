"use client";

import { Section, SectionTitle } from "./Section";
import { education } from "@/lib/data";
import { SpotlightCard } from "./ui/spotlight-card";
import { motion } from "framer-motion";

interface EducationItemProps {
  readonly institution: string;
  readonly degree: string;
  readonly grade: string;
  readonly index: number;
}

function EducationItem({
  institution,
  degree,
  grade,
  index,
}: EducationItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
          <h3 className="text-xl font-semibold mb-1">{institution}</h3>
          <p className="text-muted mb-1">{degree}</p>
          <p className="text-sm text-muted-light">{grade}</p>
        </div>
    </motion.div>
  );
}

export function Education() {
  return (
    <Section>
      <SectionTitle>Education</SectionTitle>
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((edu, index) => (
          <EducationItem key={edu.institution} {...edu} index={index} />
        ))}
      </div>
    </Section>
  );
}
