import { cn } from "@/lib/utils"

/* Section header used across pages — emulates a dashboard panel title. */
export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <div className={cn("mb-8 max-w-4xl", className)}>
      {eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">{eyebrow}</p>}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h1>
        {description && <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{description}</p>}
      </div>
    </div>
  )
}
