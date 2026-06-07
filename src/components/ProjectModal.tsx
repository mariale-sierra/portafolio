import { useEffect } from "react"
import { ExternalLink, X, Check } from "lucide-react"
import type { Project } from "@/types"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

/* Modal showing full project details. Conditionally rendered by parent. */
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    if (project) {
      document.addEventListener("keydown", onKey)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-foreground/35 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-3xl border border-border bg-card p-6 shadow-lg sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="rounded-full bg-[color:var(--color-accent)]/12 px-2.5 py-0.5 text-xs font-medium text-primary">
              {project.category}
            </span>
            <h2 id="project-modal-title" className="mt-3 text-xl font-semibold text-foreground">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground"
            aria-label="Close dialog"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

        <div className="mt-5 rounded-xl border border-border bg-[linear-gradient(135deg,oklch(0.98_0.02_355),oklch(0.99_0.01_250))] p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {project.metric.label}
          </p>
          <p className="mt-1 text-2xl font-semibold text-foreground">{project.metric.value}</p>
        </div>

        <h3 className="mt-5 text-sm font-semibold text-foreground">Highlights</h3>
        <ul className="mt-2 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {h}
            </li>
          ))}
        </ul>

        <h3 className="mt-5 text-sm font-semibold text-foreground">Tech stack</h3>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,var(--color-primary),var(--color-accent))] px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <ExternalLink className="h-4 w-4" />
          View on GitHub
        </a>
      </div>
    </div>
  )
}
