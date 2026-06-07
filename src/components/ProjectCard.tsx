import { ArrowRight } from "lucide-react"
import type { Project } from "@/types"
import { cn } from "@/lib/utils"

const categoryStyles: Record<string, string> = {
  "Data Analytics": "bg-[color:var(--color-accent)]/12 text-[color:var(--color-primary)]",
  Backend: "bg-[color:var(--color-chart-3)]/12 text-[color:var(--color-primary)]",
  "AI / Machine Learning": "bg-[color:var(--color-chart-4)]/12 text-[color:var(--color-primary)]",
}

interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
}

/* Clickable project card — opens a details modal via onSelect. */
export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="group flex h-full flex-col rounded-md border handmade-border bg-white/95 p-4 text-left transition-colors hover:bg-white/98"
    >
      <div className="flex items-center justify-between gap-3">
        <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-medium", categoryStyles[project.category])}>
          {project.category}
        </span>
        <span className="font-mono text-xs text-muted-foreground">{project.metric.value}</span>
      </div>

      <h3 className="mt-4 text-base font-semibold text-foreground">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((tech) => (
          <span key={tech} className="rounded px-2 py-0.5 text-xs text-muted-foreground border border-transparent">{tech}</span>
        ))}
      </div>

      <div className="mt-4 text-sm text-[color:var(--color-accent)]">View details →</div>
    </button>
  )
}
