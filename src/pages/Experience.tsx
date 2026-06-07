import { useEffect, useState } from "react"
import { SectionHeader } from "@/components/SectionHeader"
import { ExperienceTimeline } from "@/components/ExperienceTimeline"
import { experience } from "@/data/experience"
import type { ExperienceItem } from "@/types"

export default function Experience() {
  const [items, setItems] = useState<ExperienceItem[]>([])
  useEffect(() => {
    setItems(experience)
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="relative mb-10 overflow-hidden rounded-[2rem] soft-panel px-6 py-8 sm:px-8 sm:py-10">
        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full hero-orb blur-2xl" />
        <SectionHeader
          eyebrow="Experience"
          title="Activity Timeline"
          description="A chronological log of professional and academic roles, rendered dynamically from a data source."
          className="mb-0"
        />
      </section>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="soft-panel rounded-[1.75rem] p-6 lg:col-span-2">
          {items.length > 0 ? (
            <ExperienceTimeline items={items} />
          ) : (
            <p className="text-sm text-muted-foreground">Loading timeline…</p>
          )}
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="soft-panel rounded-[1.5rem] p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Roles logged
            </p>
            <p className="mt-1 text-3xl font-semibold text-foreground">{items.length}</p>
          </div>
          <div className="soft-panel rounded-[1.5rem] p-5">
            <h3 className="text-sm font-semibold text-foreground">Domains covered</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Teaching &amp; mentorship
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Data operations &amp; QA
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Web development
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
