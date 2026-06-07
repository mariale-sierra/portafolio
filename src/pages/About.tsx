import {
  GraduationCap,
  Server,
  BarChart3,
  PieChart,
  Database,
  Network,
  Clapperboard,
  BookOpen,
  Dumbbell,
  HandHeart,
} from "lucide-react"
import { SectionHeader } from "@/components/SectionHeader"

const profileCards = [
  {
    icon: GraduationCap,
    title: "Computer Science Student",
    desc: "Building strong foundations in algorithms, systems, and software engineering.",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Designing APIs, services, and maintainable server-side architecture.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    desc: "Turning raw data into insights through statistical analysis.",
  },
  {
    icon: PieChart,
    title: "Business Intelligence",
    desc: "Dashboards and reporting that support operational decisions.",
  },
  {
    icon: Database,
    title: "Databases",
    desc: "Relational and graph data models with a focus on integrity.",
  },
  {
    icon: Network,
    title: "Information Systems",
    desc: "Connecting technology, data, and processes to deliver impact.",
  },
]

const stats = [
  { label: "Field", value: "Computer Science" },
  { label: "Focus", value: "Backend & Data" },
  { label: "Location", value: "Guatemala" },
  { label: "Status", value: "Open to roles" },
]

const interests = [
  {
    icon: Clapperboard,
    title: "Movies and series",
    desc: "I enjoy stories, cinematography, and how narratives are built.",
  },
  {
    icon: BookOpen,
    title: "Reading",
    desc: "It helps me learn new ideas and see problems from different angles.",
  },
  {
    icon: Dumbbell,
    title: "Gym",
    desc: "A routine that keeps me disciplined and recharged.",
  },
  {
    icon: HandHeart,
    title: "Volunteering",
    desc: "I like participating in community efforts and helping where I can.",
  },
]

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="relative mb-10 overflow-hidden rounded-[2rem] soft-panel px-6 py-8 sm:px-8 sm:py-10">
        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full hero-orb blur-2xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-32 w-64 rounded-full hero-wave blur-2xl" />
        <SectionHeader
          eyebrow="About"
          title="System Profile"
          description="A professional overview of background, focus areas, and the disciplines that shape how I approach technology problems."
          className="mb-0"
        />
      </section>

      {/* Summary panel */}
      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="soft-panel rounded-[1.75rem] p-6 lg:col-span-2">
          <h2 className="text-sm font-semibold text-[color:var(--color-accent)]">Professional Summary</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            I am a Computer Science student focused on backend engineering and data analytics. I enjoy
            building reliable systems, modeling data, and transforming information into measurable
            insight. My work spans API and database design, statistical analysis, and business
            intelligence dashboards — always with an emphasis on clarity, quality, and impact.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            I value structured problem solving and clean, maintainable solutions, whether that means
            cleaning a 400,000-row dataset, designing a recommendation engine, or supporting students
            as a teaching assistant.
          </p>
        </div>

        <div className="soft-panel rounded-[1.75rem] p-6">
          <h2 className="text-sm font-semibold text-[color:var(--color-accent)]">At a glance</h2>
          <dl className="mt-4 space-y-3">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center justify-between pb-3 last:pb-0">
                <dt className="text-sm text-muted-foreground">{s.label}</dt>
                <dd className="text-sm font-medium text-foreground">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Profile cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {profileCards.map((card) => (
          <div key={card.title} className="accent-rail flex gap-4 items-start rounded-[1.5rem] bg-white/55 p-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-pink-1)]/14 text-[color:var(--color-accent)]">
              <card.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-base font-semibold text-foreground">{card.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 soft-panel rounded-[1.75rem] p-6">
        <h2 className="text-sm font-semibold text-[color:var(--color-accent)]">Personal Interests</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Outside of academics and tech, I like keeping a balanced routine with things that recharge
          me and give me new ideas.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {interests.map((interest) => (
            <div key={interest.title} className="flex gap-3 items-start rounded-2xl bg-white/55 p-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-pink-2)]/12 text-[color:var(--color-accent)]">
                <interest.icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{interest.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{interest.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
