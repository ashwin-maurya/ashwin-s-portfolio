"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export function Section({ children, className = "" }: SectionProps) {
  return (
    <motion.section
      className={`max-w-4xl mx-auto px-6 py-16 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
}

interface SectionTitleProps {
  readonly children: ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <motion.h2
      className="text-3xl font-bold mb-10"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h2>
  );
}
