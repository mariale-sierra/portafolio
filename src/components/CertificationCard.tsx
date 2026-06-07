import { Award } from "lucide-react"
import type { Certification } from "@/types"

/* Achievement card driven entirely by props. */
export function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <div className="flex flex-col rounded-[1.5rem] border border-transparent bg-white/70 p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-accent)]/12 text-primary">
          <Award className="h-4.5 w-4.5" aria-hidden="true" />
        </span>
        <span className="font-mono text-xs text-muted-foreground">{cert.year}</span>
      </div>
      <h3 className="mt-4 text-base font-semibold leading-snug text-foreground">{cert.title}</h3>
      <p className="mt-1 text-sm font-medium text-accent">{cert.institution}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{cert.description}</p>
    </div>
  )
}
