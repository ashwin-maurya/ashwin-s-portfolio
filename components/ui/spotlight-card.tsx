"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { useTheme } from "@/lib/theme-provider";

interface SpotlightCardProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only track mouse position in dark mode
    if (theme === "dark") {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - left) / width) * 100,
        y: ((e.clientY - top) / height) * 100,
      });
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    if (theme === "dark") {
      setIsHovering(false);
      setMousePosition(null);
    }
  };

  // In dark mode: Create a radial gradient mask that reveals content only in the spotlight area
  // In light mode: No mask, everything is visible
  let maskImage = "none";
  if (theme === "dark") {
    if (isHovering && mousePosition) {
      maskImage = `radial-gradient(circle 500px at ${mousePosition.x}% ${mousePosition.y}%, black 0%, black 40%, transparent 70%, transparent 100%)`;
    } else {
      maskImage = "radial-gradient(circle 0px at 50% 50%, transparent 100%)";
    }
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative group min-h-screen", className)}
    >
      <div
        className="relative w-full h-full transition-opacity duration-300"
        style={
          theme === "dark"
            ? {
                maskImage,
                WebkitMaskImage: maskImage,
                maskSize: "cover",
                WebkitMaskSize: "cover",
              }
            : undefined
        }
      >
        {children}
      </div>
    </motion.div>
  );
}

