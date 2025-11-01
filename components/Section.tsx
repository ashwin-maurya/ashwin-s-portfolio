import { ReactNode } from "react";

interface SectionProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`max-w-4xl mx-auto px-6 py-16 ${className}`}>
      {children}
    </section>
  );
}

interface SectionTitleProps {
  readonly children: ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className="text-3xl font-bold mb-10">{children}</h2>;
}

