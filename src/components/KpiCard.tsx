import type { ComponentType } from "react"
import { ArrowUpRight } from "lucide-react"
import type { LucideProps } from "lucide-react"
import { cn } from "@/lib/utils"

interface KpiCardProps {
  label: string
  value: string | number
  delta?: string
  icon: ComponentType<LucideProps>
  className?: string
}

/* Reusable KPI metric card — receives all content via props. */
export function KpiCard({ label, value, delta, icon: Icon, className }: KpiCardProps) {
  return (
    <div className={cn("rounded-md border border-border card-vibrant p-4", className)}>
      <div className="flex items-center justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[color:var(--color-pink-1)]/12 text-[color:var(--color-accent)]">
          <Icon className="h-4.5 w-4.5" aria-hidden="true" />
        </span>
        {delta && <span className="text-xs text-muted-foreground">{delta}</span>}
      </div>
      <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  )
}
