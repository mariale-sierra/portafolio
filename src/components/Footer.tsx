import { ExternalLink, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-foreground">María Alejandra Sierra Cabrera</p>
          <p className="text-sm text-muted-foreground">Desarrolladora Backend · Analista de Datos</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="mailto:malesierra15@gmail.com"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/mariale-sierra"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
            aria-label="GitHub"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/alejandra-sierra-a7121b341/"
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
            aria-label="LinkedIn"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-muted-foreground sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-[11px] font-medium text-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            Creado con React, TypeScript, React Router y Recharts.
          </p>
        </div>
      </div>
    </footer>
  )
}
