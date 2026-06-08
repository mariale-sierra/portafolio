import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  Award,
  Briefcase,
  Code2,
  Compass,
  Database,
  FolderGit2,
  Sparkles,
  Server,
  BarChart3,
  ArrowRight,
} from "lucide-react"
import { Panel } from "@/components/Panel"
import { FocusAreaChart } from "@/components/FocusAreaChart"
import { FocusRadarChart } from "@/components/FocusRadarChart"
import { focusAreas } from "@/data/skills"
import { projects } from "@/data/projects"

const signals = [
  { label: "Proyectos", value: 3, icon: FolderGit2 },
  { label: "Lenguajes", value: 6, icon: Code2 },
  { label: "Certificaciones", value: 3, icon: Award },
  { label: "Roles", value: 1, icon: Briefcase },
]

const insights = [
  { icon: Server, label: "Desarrollo Backend", desc: "APIs, servicios y arquitectura de sistemas" },
  { icon: BarChart3, label: "Analítica de Datos", desc: "Análisis estadístico y BI" },
  { icon: Database, label: "Bases de datos", desc: "Modelos relacionales y de grafos" },
  { icon: Code2, label: "Desarrollo Web", desc: "Arquitectura moderna de componentes" },
]

export default function Dashboard() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 250)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="bg-grid bg-faint-pink">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="relative mb-8 overflow-hidden rounded-[2rem] soft-panel px-6 py-7 sm:px-8 sm:py-10">
          <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full hero-orb blur-2xl" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-72 rounded-full hero-wave blur-2xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.45fr_0.95fr] lg:items-end">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-[color:var(--color-accent)]" />
                Portafolio
              </div>
              <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Un dashboard de mi experiencia, habilidades y proyectos
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
                Estudiante de Ingeniería en Ciencias de la Computación interesada en sistemas backend, analítica, bases de datos e inteligencia de negocio.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Diseño de APIs", "Modelado de datos", "Dashboards BI", "Liderazgo y Creatividad"].map((item) => (
                  <span key={item} className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-foreground">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  to="/projects"
                  className="rounded-full bg-[linear-gradient(90deg,var(--color-pink-1),var(--color-accent))] px-4 py-2 text-sm font-medium text-primary-foreground soft-shadow"
                >
                  Ver proyectos
                </Link>
                <Link to="/about" className="rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-foreground">
                  Sobre mí
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[1.75rem] soft-panel p-5 shadow-[0_20px_60px_rgba(219,112,147,0.12)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Mapa</p>
                      <p className="mt-1 text-sm text-muted-foreground">Lo que enfatiza mi portafolio</p>
                  </div>
                  <Compass className="h-5 w-5 text-[color:var(--color-accent)]" />
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {signals.map((signal) => (
                    <div key={signal.label} className="rounded-2xl bg-white/70 p-4">
                      <div className="flex items-center justify-between">
                        <signal.icon className="h-4 w-4 text-[color:var(--color-accent)]" />
                        <span className="font-mono text-xs text-muted-foreground">0{signal.value}</span>
                      </div>
                      <p className="mt-3 text-sm font-medium text-foreground">{signal.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mb-8 flex flex-wrap items-center gap-6 px-1">
          {signals.map((signal) => (
            <div key={signal.label} className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-[color:var(--color-accent)]">
                <signal.icon className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="text-2xl font-semibold tracking-tight text-foreground">{loaded ? signal.value : "—"}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{signal.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Panel title="Professional Focus Areas" className="lg:col-span-2">
            <FocusAreaChart data={focusAreas} />
          </Panel>
          <Panel title="Vista Radar" variant="minimal">
            <FocusRadarChart data={focusAreas} />
          </Panel>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="accent-rail pl-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">Core domains</p>
            <ul className="mt-4 space-y-4">
              {insights.map((it) => (
                <li key={it.label} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/70 text-[color:var(--color-accent)]">
                    <it.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{it.label}</p>
                    <p className="text-xs text-muted-foreground">{it.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="soft-panel rounded-[1.75rem] p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">Proyectos recientes</p>
                <p className="mt-2 text-sm text-muted-foreground">Una vista más ligera en lista en vez de otro panel en caja.</p>
              </div>
              <Link to="/projects" className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                Ver todo <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <ul className="mt-5 space-y-4">
              {projects.map((p) => (
                <li key={p.id} className="flex items-center justify-between rounded-2xl bg-white/65 px-4 py-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">{p.title}</p>
                    <p className="text-xs text-muted-foreground">{p.category}</p>
                  </div>
                  <span className="ml-4 shrink-0 font-mono text-xs text-muted-foreground">{p.metric.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
