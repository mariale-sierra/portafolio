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
import { useEffect, useState } from "react"

const profileCards = [
  {
    icon: GraduationCap,
    title: "Estudiante de Ciencias de la Computación",
    desc: "Fundamentos en algoritmos, sistemas y desarrollo de software.",
  },
  {
    icon: Server,
    title: "Desarrollo Backend",
    desc: "Diseño de APIs y arquitecturas server-side mantenibles.",
  },
  {
    icon: BarChart3,
    title: "Analítica de Datos",
    desc: "Transformar datos crudos en insights mediante análisis estadístico.",
  },
  {
    icon: PieChart,
    title: "Business Intelligence",
    desc: "Dashboards y reportes para apoyar la toma de decisiones.",
  },
  {
    icon: Database,
    title: "Bases de Datos",
    desc: "Modelado relacional y grafos con foco en integridad.",
  },
  {
    icon: Network,
    title: "Sistemas de Información",
    desc: "Conectar tecnología, datos y procesos para generar impacto.",
  },
]

const stats = [
  { label: "Campo", value: "Ingeniería en Ciencias de la Computación" },
  { label: "Enfoque", value: "Backend y Datos" },
  { label: "Ubicación", value: "Guatemala" },
  { label: "Estado", value: "Abierta a oportunidades" },
]

const interests = [
  {
    icon: Clapperboard,
    title: "Cine",
    desc: "Películas: romcoms, thrillers psicológicos y películas existencialistas.",
  },
  {
    icon: BookOpen,
    title: "Lectura",
    desc: "Leer sobre diseño, UX y narrativas de datos.",
  },
  {
    icon: Dumbbell,
    title: "Pintura",
    desc: "Pinto cuadros; puedo compartir fotos de mis obras.",
  },
  {
    icon: HandHeart,
    title: "Cocinar y dormir",
    desc: "Cocinar nuevas recetas y descansar (muy importante).",
  },
]

export default function About() {
  const [imgs, setImgs] = useState(["/art/painting1.jpg", "/art/painting2.jpg", "/art/painting3.jpg"])

  const handleError = (index: number) => {
    setImgs((prev) => {
      const copy = [...prev]
      copy[index] = `/art/painting${index + 1}.svg`
      return copy
    })
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="mb-8 px-2">
        <SectionHeader eyebrow="Sobre mí" title="Hola, soy Ale" description="Un espacio más relajado sobre quién soy, qué me gusta y por qué hago lo que hago." />

        <div className="mt-6 about-casual">
          <div className="flex flex-col items-center">
            <img src="/profile.jpg" alt="Foto de perfil" className="photo" />
            <div className="mt-4 sticker">Estudiante · Analista junior</div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[color:var(--color-primary)]">Un poco sobre mí</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Me llamo María Alejandra Sierra Cabrera, me gusta que me digan Ale, y estudio Ciencias de la Computación en UVG. Me encanta armar cosas que funcionen: desde APIs y dashboards que expliquen qué está pasando en números. Pero lo que más disfruto es cuando una visualización hace que alguien diga "ahhh, ahora lo entiendo". Como alguien que aprende de forma visual, siempre me gustó tener esa referencia al intentar entender un sistema o un dataset, me motiva no solo hacer sistemas funcionales, sino que también sean accesibles y entendibles por todos</p>

            <h4 className="mt-6 text-sm font-semibold text-[color:var(--color-accent)]">Intereses</h4>
            <div className="mt-2 text-sm text-muted-foreground space-y-2">
              <p>Me gusta ver películas — mi favorita es <em>Inglorious Basterds</em> de Tarantino. Odio las películas de miedo, pero disfruto mucho las de suspenso como <em>American Phsyco</em>. También me encantan las romcoms como <em>10 things I hate about you</em> y las películas existencialistas como <em>Eternal sunshine of the spotless mind</em>; además soy fan de los thrillers psicológicos como <em>Get Out</em>.</p>
              <p>No me gustan las series porque no me gusta quedarme con la historia a medias.</p>
              <p>Me gusta pintar, me gusta usar acrílico y acuarela, me gusta la textura y las texturas que se pueden hacer con óleo pero no me gusta cuánto se tarda en secar. Me gusta el surrealismo y me encanta pintar cosas como ojos y cuadros con variedad de colores</p>
            </div>

            <div className="mt-4">
              <h5 className="text-sm font-semibold text-[color:var(--color-primary)]">Galería de cuadros</h5>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {imgs.map((src, i) => (
                  <figure key={src} className="rounded-md overflow-hidden border border-[color:var(--color-border)] bg-white/90">
                    <img src={src} alt={`Cuadro ${i + 1}`} className="w-full h-auto max-h-72 object-contain bg-[color:var(--color-card)] p-2" onError={() => handleError(i)} />
                    <figcaption className="p-2 text-xs text-muted-foreground text-center">Cuadro {i + 1}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
