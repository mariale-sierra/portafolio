import { useEffect, useState } from "react"
import { CirclePlay, Award } from "lucide-react"
import { SectionHeader } from "@/components/SectionHeader"
import { ProjectCard } from "@/components/ProjectCard"
import { ProjectModal } from "@/components/ProjectModal"
import { ProjectFilter } from "@/components/ProjectFilter"
import { CertificationCard } from "@/components/CertificationCard"
import { projects } from "@/data/projects"
import { certifications } from "@/data/certifications"
import type { Project } from "@/types"

const filters = ["All", "Data Analytics", "Backend", "AI / Machine Learning"]

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [items, setItems] = useState<Project[]>([])
  const [certs] = useState(certifications)

  useEffect(() => {
    setItems(projects)
  }, [])

  const filteredProjects =
    selectedFilter === "All" ? items : items.filter((project) => project.category === selectedFilter)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="relative mb-10 overflow-hidden rounded-[2rem] soft-panel px-6 py-8 sm:px-8 sm:py-10">
        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full hero-orb blur-2xl" />
        <SectionHeader
          eyebrow="Projects"
          title="Project Explorer"
          description="A compact portfolio view that keeps projects and certifications together, with filtering and expandable detail cards."
          className="mb-0"
        />
      </section>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 px-1">
        <div>
          <p className="text-sm font-semibold text-[color:var(--color-accent)]">Filter by focus area</p>
          <p className="text-sm text-muted-foreground">This shows event handling, state, and conditional rendering.</p>
        </div>
        <ProjectFilter value={selectedFilter} options={filters} onChange={setSelectedFilter} />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="mt-6 rounded-[1.5rem] bg-white/60 p-8 text-center text-sm text-muted-foreground">
          No projects match the selected filter.
        </div>
      )}

      <div className="mt-10 soft-panel rounded-[1.75rem] p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-accent)]">Certifications</p>
            <h2 className="mt-1 text-lg font-semibold text-foreground">Achievement records</h2>
            <p className="mt-1 text-sm text-muted-foreground">Kept in the same section so the portfolio stays compact and easier to scan.</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
            <Award className="h-3.5 w-3.5 text-accent" />
            {certs.length} certifications
          </span>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {certs.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="soft-panel rounded-[1.5rem] p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <CirclePlay className="h-4 w-4 text-accent" />
            How this section works
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            The project cards are rendered with <span className="font-medium text-foreground">map()</span>.
            Clicking a card opens a modal with more detail, which shows controlled state and conditional UI.
          </p>
        </div>

        <div className="soft-panel rounded-[1.5rem] p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Award className="h-4 w-4 text-accent" />
            Compact portfolio layout
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Projects and certifications now live together so the page feels lighter and easier to read.
          </p>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}