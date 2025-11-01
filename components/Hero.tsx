"use client";

import { personalInfo } from "@/lib/data";
import { TextReveal } from "./ui/text-reveal";
import { SpotlightCard } from "./ui/spotlight-card";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="max-w-4xl mx-auto px-6 py-20 md:py-32 min-h-screen flex items-center">
        <div className="space-y-6">
          <TextReveal>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              {personalInfo.name}
            </h1>
          </TextReveal>
          <TextReveal delay={0.1}>
            <p className="text-xl md:text-2xl text-muted">
              {personalInfo.title}
            </p>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-base md:text-lg text-muted-light max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>
          </TextReveal>
          <TextReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex flex-wrap gap-4 text-sm text-muted">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  {personalInfo.email}
                </a>
                <span className="text-border">|</span>
                <a
                  href={`tel:${personalInfo.phone.replaceAll(/\s/g, "")}`}
                  className="hover:text-foreground transition-colors"
                >
                  {personalInfo.phone}
                </a>
                <span className="text-border">|</span>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </TextReveal>
          <TextReveal delay={0.4}>
            <div className="flex items-center gap-4 pt-2">
              {[
                { name: "GitHub", url: personalInfo.social.github },
                { name: "LinkedIn", url: personalInfo.social.linkedin },
                { name: "CodePen", url: personalInfo.social.codepen },
              ].map((social, index) => (
                <div key={social.name} className="flex items-center gap-4">
                  <motion.a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.name}
                  </motion.a>
                  {index < 2 && <span className="text-border">|</span>}
                </div>
              ))}
            </div>
          </TextReveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-border rounded-full mx-auto flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-foreground rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
    </section>
  );
}
