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

const filters = ["Todos", "Analítica de Datos", "Backend", "IA / Machine Learning"]

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("Todos")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [items, setItems] = useState<Project[]>([])
  const [certs] = useState(certifications)

  useEffect(() => {
    setItems(projects)
  }, [])

  const filteredProjects =
    selectedFilter === "Todos" ? items : items.filter((project) => project.category === selectedFilter)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="relative mb-10 overflow-hidden rounded-[2rem] soft-panel px-6 py-8 sm:px-8 sm:py-10">
        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full hero-orb blur-2xl" />
        <SectionHeader
          eyebrow="Proyectos"
          title="Explorador de proyectos y certificaciones"
          description="Portafolio compacto que agrupa proyectos y certificaciones, con filtros y tarjetas expandibles."
          className="mb-0"
        />
      </section>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 px-1">
        <div>
          <p className="text-sm font-semibold text-[color:var(--color-accent)]">Filtrar por área</p>
          <p className="text-sm text-muted-foreground">Elige un área para reducir los proyectos mostrados.</p>
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
          No hay proyectos que coincidan con el filtro seleccionado.
        </div>
      )}

      <div className="mt-10 soft-panel rounded-[1.75rem] p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-accent)]">Certificaciones</p>
            <h2 className="mt-1 text-lg font-semibold text-foreground">Registro de certificaciones</h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
            <Award className="h-3.5 w-3.5 text-accent" />
            {certs.length} certificaciones
          </span>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {certs.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>


      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}