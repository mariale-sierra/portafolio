import type { Skill } from "@/types"

interface SkillCardProps {
  category: string
  skills: Skill[]
}

/* Renders a category of skills as horizontal progress bars. */
export function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="rounded-[1.5rem] bg-white/60 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">{category}</h3>
        <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
          {skills.length}
        </span>
      </div>
      <ul className="space-y-3.5">
        {skills.map((skill) => (
          <li key={skill.name}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-sm text-foreground">{skill.name}</span>
              <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
            </div>
            <div
              className="h-1.5 w-full overflow-hidden rounded-full bg-secondary"
              role="progressbar"
              aria-valuenow={skill.level}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={skill.name}
            >
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,var(--color-primary),var(--color-accent))] transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
