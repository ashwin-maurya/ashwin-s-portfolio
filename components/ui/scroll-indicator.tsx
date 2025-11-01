"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-border z-50"
      style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
    >
      <motion.div className="h-full bg-accent" />
    </motion.div>
  );
}

