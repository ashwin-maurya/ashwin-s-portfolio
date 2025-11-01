"use client";

import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { useState } from "react";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.footer
      className="max-w-4xl mx-auto px-6 py-16 border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center space-y-4">
        <p className="text-muted">Get in touch</p>
        <motion.button
          onClick={copyEmail}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-accent hover:text-accent-hover transition-colors"
        >
          {copied ? "Copied!" : personalInfo.email}
        </motion.button>
        <div className="flex justify-center gap-4 pt-4">
          {[
            { name: "GitHub", url: personalInfo.social.github },
            { name: "LinkedIn", url: personalInfo.social.linkedin },
            { name: "CodePen", url: personalInfo.social.codepen },
          ].map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
