import type { SkillCategory, FocusArea } from "@/types"

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
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
    category: "Databases",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MySQL", level: 84 },
      { name: "Neo4j", level: 78 },
    ],
  },
  {
    category: "Data & BI",
    skills: [
      { name: "Power BI", level: 90 },
      { name: "Data Analysis", level: 88 },
      { name: "Statistical Analysis", level: 82 },
      { name: "Data Visualization", level: 86 },
    ],
  },
  {
    category: "Tools",
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
  { area: "Backend Development", value: 85 },
  { area: "Data Analytics", value: 92 },
  { area: "Databases", value: 88 },
  { area: "Web Development", value: 75 },
  { area: "Business Intelligence", value: 87 },
]
