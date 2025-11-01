"use client";

import { Section, SectionTitle } from "./Section";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";

interface SkillTagProps {
  readonly skill: string;
  readonly index: number;
}

function SkillTag({ skill, index }: SkillTagProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      whileHover={{ scale: 1.1 }}
      className="px-3 py-1.5 bg-card border border-border rounded text-sm hover:bg-card-hover hover:border-accent/50 transition-all cursor-default"
    >
      {skill}
    </motion.span>
  );
}

interface SkillCategoryProps {
  readonly title: string;
  readonly items: readonly string[];
}

function SkillCategory({ title, items }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-semibold mb-4 text-muted">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <SkillTag key={item} skill={item} index={index} />
        ))}
      </div>
    </motion.div>
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
