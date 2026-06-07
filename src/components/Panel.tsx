import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/* Reusable dashboard panel wrapper with a titled header bar. */
export function Panel({
  title,
  action,
  children,
  className,
  variant = "vibrant",
}: {
  title: string
  action?: ReactNode
  children: ReactNode
  className?: string
  variant?: "vibrant" | "minimal"
}) {
  if (variant === "minimal") {
    return (
      <section className={cn("relative", className)}>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-[color:var(--color-accent)]">{title}</h2>
          {action}
        </div>
        <div>{children}</div>
      </section>
    )
  }

  return (
    <section className={cn("rounded-2xl border border-border card-vibrant", className)}>
      <div className="flex items-center justify-between px-5 py-3.5 rounded-t-2xl" style={{ background: "linear-gradient(90deg,var(--color-pink-1),var(--color-accent))" }}>
        <h2 className="text-sm font-semibold text-primary-foreground">{title}</h2>
        {action}
      </div>
      <div className="p-5">{children}</div>
    </section>
  )
}
