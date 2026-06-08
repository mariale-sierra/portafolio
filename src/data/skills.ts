import type { SkillCategory, FocusArea } from "@/types"

export const skillCategories: SkillCategory[] = [
  {
    category: "Lenguajes de programación",
    skills: [
      { name: "Python", level: 92 },
      { name: "Java", level: 88 },
      { name: "SQL", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "Go", level: 68 },
      { name: "R", level: 72 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Spring Boot", level: 85 },
      { name: "NestJS", level: 76 },
    ],
  },
  {
    category: "Bases de datos",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MySQL", level: 84 },
      { name: "Neo4j", level: 78 },
    ],
  },
  {
    category: "Datos y BI",
    skills: [
      { name: "Power BI", level: 90 },
      { name: "Data Analysis", level: 88 },
      { name: "Statistical Analysis", level: 82 },
      { name: "Visualización de datos", level: 86 },
    ],
  },
  {
    category: "Herramientas",
    skills: [
      { name: "Docker", level: 80 },
      { name: "Git", level: 90 },
      { name: "Firebase", level: 74 },
      { name: "Supabase", level: 76 },
      { name: "Linux", level: 78 },
      { name: "Jira", level: 82 },
    ],
  },
]

export const focusAreas: FocusArea[] = [
  { area: "Desarrollo Backend", value: 85 },
  { area: "Analítica de Datos", value: 92 },
  { area: "Bases de datos", value: 88 },
  { area: "Desarrollo Web", value: 75 },
  { area: "Inteligencia de negocio", value: 87 },
]
