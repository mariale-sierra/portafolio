import { Briefcase } from "lucide-react"
import type { ExperienceItem } from "@/types"

export function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="relative space-y-8 border-l border-[color:var(--color-pink-1)]/30 pl-6">
      {items.map((item) => (
        <li key={item.id} className="relative">
          <span className="absolute -left-[31px] flex h-5 w-5 items-center justify-center rounded-full bg-white/80 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[linear-gradient(180deg,var(--color-pink-1),var(--color-primary))]" />
          </span>

          <div className="rounded-[1.5rem] bg-white/60 p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-pink-1)]/12 px-2.5 py-0.5 text-xs font-medium text-[color:var(--color-primary)]">
                <Briefcase className="h-3 w-3" />
                {item.type}
              </span>
              <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
            </div>

            <h3 className="mt-3 text-base font-semibold text-foreground">{item.role}</h3>
            <p className="text-sm font-medium text-accent">{item.organization}</p>

            <ul className="mt-3 space-y-1.5">
              {item.responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  )
}
