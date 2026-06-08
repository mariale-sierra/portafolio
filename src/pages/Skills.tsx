import { useEffect, useState } from "react"
import { SectionHeader } from "@/components/SectionHeader"
import { Panel } from "@/components/Panel"
import { SkillCard } from "@/components/SkillCard"
import { FocusAreaChart } from "@/components/FocusAreaChart"
import { FocusRadarChart } from "@/components/FocusRadarChart"
import { skillCategories, focusAreas } from "@/data/skills"
import type { SkillCategory } from "@/types"

export default function Skills() {
  const [items, setItems] = useState<SkillCategory[]>([])

  useEffect(() => {
    setItems(skillCategories)
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="relative mb-10 overflow-hidden rounded-[2rem] soft-panel px-6 py-8 sm:px-8 sm:py-10">
        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full hero-orb blur-2xl" />
        <SectionHeader
          eyebrow="Habilidades"
          title="Resumen de habilidades"
          description="Resumen estilo dashboard de competencias en programación, backend, bases de datos y análisis de datos."
          className="mb-0"
        />
      </section>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Panel title="Áreas de enfoque" className="xl:col-span-2">
          <FocusAreaChart data={focusAreas} />
        </Panel>
        <Panel title="Vista radar" variant="minimal">
          <FocusRadarChart data={focusAreas} />
        </Panel>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((category) => (
          <SkillCard key={category.category} category={category.category} skills={category.skills} />
        ))}
      </div>
    </div>
  )
}