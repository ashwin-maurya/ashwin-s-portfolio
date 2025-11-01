import { personalInfo } from "@/lib/data";

export function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 md:py-32">
      <div className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          {personalInfo.name}
        </h1>
        <p className="text-xl md:text-2xl text-muted">
          {personalInfo.title}
        </p>
        <p className="text-base md:text-lg text-muted-light max-w-2xl leading-relaxed">
          {personalInfo.bio}
        </p>
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
        <div className="flex gap-4 pt-2">
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <span className="text-border">|</span>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-border">|</span>
          <a
            href={personalInfo.social.codepen}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
          >
            CodePen
          </a>
        </div>
      </div>
    </section>
  );
}

