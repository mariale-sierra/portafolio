export type ProjectCategory =
  | "Análisis de datos"
  | "Backend"
  | "IA / Machine Learning"

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  summary: string
  highlights: string[]
  stack: string[]
  metric: { label: string; value: string }
  github: string
}

export interface ExperienceItem {
  id: string
  role: string
  organization: string
  period: string
  type: string
  responsibilities: string[]
}

export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  category: string
  skills: Skill[]
}

export interface Certification {
  id: string
  title: string
  institution: string
  year: string
  description: string
}

export interface FocusArea {
  area: string
  value: number
}
