import { personalInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="max-w-4xl mx-auto px-6 py-16 border-t border-border">
      <div className="text-center space-y-4">
        <p className="text-muted">Get in touch</p>
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-accent hover:text-accent-hover transition-colors"
        >
          {personalInfo.email}
        </a>
        <div className="flex justify-center gap-4 pt-4">
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
    </footer>
  );
}

