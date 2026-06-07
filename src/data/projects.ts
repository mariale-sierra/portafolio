import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "financial-options",
    title: "Financial Options Analysis",
    category: "Data Analytics",
    summary:
      "End-to-end analysis pipeline over a large financial options dataset, surfaced through an interactive BI dashboard.",
    highlights: [
      "Processed 400,000+ financial records",
      "Statistical analysis & distribution modeling",
      "Interactive Power BI dashboard",
      "Automated data cleaning workflow",
    ],
    stack: ["Python", "Power BI", "SQL", "Pandas"],
    metric: { label: "Records processed", value: "400K+" },
    github: "https://github.com/",
  },
  {
    id: "transformer-model",
    title: "Transformer-Based AI Model",
    category: "AI / Machine Learning",
    summary:
      "A transformer architecture built from the ground up for predictive analytics, including the full data preparation and training loop.",
    highlights: [
      "Transformer architecture implementation",
      "Data preparation & tokenization",
      "Model training & evaluation",
      "Predictive analytics outputs",
    ],
    stack: ["Python", "PyTorch", "NumPy"],
    metric: { label: "Architecture", value: "Transformer" },
    github: "https://github.com/",
  },
  {
    id: "perfect-match",
    title: "Perfect Match Recommendation Platform",
    category: "Backend",
    summary:
      "A graph-powered recommendation engine exposed through REST APIs, backed by a Neo4j database and a Spring Boot service layer.",
    highlights: [
      "Neo4j graph database",
      "Recommendation engine",
      "REST APIs",
      "Spring Boot service layer",
    ],
    stack: ["Java", "Spring Boot", "Neo4j", "REST"],
    metric: { label: "Database", value: "Neo4j" },
    github: "https://github.com/",
  },
]
