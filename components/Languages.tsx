"use client";

import { Section, SectionTitle } from "./Section";
import { languages } from "@/lib/data";
import { motion } from "framer-motion";

export function Languages() {
  return (
    <Section>
      <SectionTitle>Languages</SectionTitle>
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold mb-2 text-muted">Experienced</h3>
          <p className="text-muted">{languages.experienced.join(" • ")}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold mb-2 text-muted">Familiar</h3>
          <p className="text-muted">{languages.familiar.join(" • ")}</p>
        </motion.div>
      </div>
    </Section>
  );
}
