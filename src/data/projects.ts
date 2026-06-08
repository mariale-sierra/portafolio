import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "financial-options",
    title: "Análisis de Opciones Financieras",
    category: "Analítica de Datos",
    summary:
      "Canal de análisis completo sobre un gran conjunto de datos de opciones financieras, presentado mediante un dashboard interactivo de BI.",
    highlights: [
      "Procesamiento de más de 400,000 registros financieros",
      "Análisis estadístico y modelado de distribuciones",
      "Dashboard interactivo en Power BI",
      "Flujo automatizado de limpieza de datos",
    ],
    stack: ["Python", "Power BI", "SQL", "Pandas"],
    metric: { label: "Registros procesados", value: "400K+" },
    github: "https://github.com/mariale-sierra/Analisis-financiero-opciones.git",
  },
  {
    id: "transformer-model",
    title: "Modelo IA basado en Transformers",
    category: "IA / Machine Learning",
    summary:
      "Arquitectura transformer desarrollada desde cero para análisis predictivo, incluyendo preparación de datos y ciclo de entrenamiento.",
    highlights: [
      "Implementación de arquitectura transformer",
      "Preparación de datos y tokenización",
      "Entrenamiento y evaluación del modelo",
      "Generación de predicciones para análisis",
    ],
    stack: ["Python", "PyTorch", "NumPy"],
    metric: { label: "Arquitectura", value: "Transformer" },
    github: "",
  },
  {
    id: "perfect-match",
    title: "Plataforma de Recomendaciones Perfect Match",
    category: "Backend",
    summary:
      "Motor de recomendaciones basado en grafos expuesto vía APIs REST, respaldado por Neo4j y una capa de servicios en Spring Boot.",
    highlights: [
      "Base de datos en Neo4j",
      "Motor de recomendación",
      "APIs REST",
      "Capa de servicios en Spring Boot",
    ],
    stack: ["Java", "Spring Boot", "Neo4j", "REST"],
    metric: { label: "Base de datos", value: "Neo4j" },
    github: "https://github.com/camsandvl/PerfectMatch.git",
  },
]
