import { PROJECTS } from "@/app/constants"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react"
import { Metadata } from "next"
import { breadcrumbSchema } from "@/lib/schema"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} | Terra Azul`,
    description: project.description,
    alternates: { canonical: `/proyectos/${project.slug}` },
    openGraph: {
      title: `${project.title} | Terra Azul`,
      description: project.description,
      images: [{ url: project.imageUrl }],
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) notFound()

  const related = PROJECTS.filter((p) => p.slug !== project.slug)

  const jsonLd = breadcrumbSchema([
    { name: "Inicio", href: "/" },
    { name: "Proyectos", href: "/proyectos" },
    { name: project.title, href: `/proyectos/${project.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[480px] w-full">
        <Image
          src={project.imageUrl}
          fill
          alt={`${project.title} — Terra Azul, ${project.location}`}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="absolute inset-0 flex flex-col justify-end container px-4 pb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint-green mb-3">
            {project.category}
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-2xl mb-6">
            {project.title}
          </h1>
          <div className="flex items-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {project.location}
            </span>
            <span className="text-white/30">·</span>
            <span>{project.year}</span>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="container px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left: description + challenge / intervention */}
          <div className="lg:col-span-2 space-y-10">
            <p className="text-lg text-gray-600 leading-relaxed">
              {project.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Challenge */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                  <h2 className="text-xs font-bold uppercase tracking-widest text-red-500">
                    El Desafío
                  </h2>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Intervention */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-forest-green font-bold text-sm leading-none">
                    △
                  </span>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-forest-green">
                    La Intervención
                  </h2>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.intervention}
                </p>
              </div>
            </div>
          </div>

          {/* Right: specs card */}
          <div className="bg-gray-50 rounded-xl p-6 h-fit">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-5">
              Especificaciones Técnicas
            </p>

            <div className="space-y-0 mb-6">
              {[
                { label: "Área Total", value: project.area },
                { label: "Tiempo de Ejecución", value: project.executionTime },
                { label: "Ubicación", value: project.location },
                { label: "Presupuesto", value: project.budget },
              ].map(({ label, value }) =>
                value ? (
                  <div
                    key={label}
                    className="flex justify-between items-baseline border-b border-gray-200 py-3 last:border-0"
                  >
                    <span className="text-xs text-gray-500">{label}</span>
                    <span className="font-bold text-forest-green text-sm">
                      {value}
                    </span>
                  </div>
                ) : null
              )}
            </div>

            {project.sustainability && project.sustainability.length > 0 && (
              <>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                  Sostenibilidad Aplicada
                </p>
                <ul className="space-y-2 mb-6">
                  {project.sustainability.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-gray-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-mint-green flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <Link
              href="/#contactanos"
              className="block w-full text-center bg-forest-green text-white text-sm font-semibold py-3 rounded-lg hover:bg-forest-green/90 transition-colors duration-200"
            >
              Solicitar Información →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      {project.quote && (
        <section className="relative bg-forest-green py-20 overflow-hidden">
          {/* Watermark */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          >
            <span className="text-[20rem] font-black text-white/[0.04] leading-none">
              TA
            </span>
          </div>
          <div className="container px-4 relative text-center">
            <span className="text-6xl text-mint-green font-serif leading-none">
              &quot;
            </span>
            <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed max-w-3xl mx-auto -mt-4">
              {project.quote}
            </blockquote>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-white/40">
              — Terra Azul Architecture
            </p>
          </div>
        </section>
      )}

      {/* ── Related projects ── */}
      {related.length > 0 && (
        <section className="container px-4 py-16">
          <div className="flex-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-forest-green">
                Proyectos Relacionados
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Explora otros proyectos donde el diseño y la calidad se
                encuentran.
              </p>
            </div>
            <Link
              href="/proyectos"
              className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-forest-green hover:text-mint-green transition-colors duration-200"
            >
              Ver todos los proyectos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/proyectos/${p.slug}`}
                className="group relative overflow-hidden rounded-xl block h-56"
              >
                <Image
                  src={p.imageUrl}
                  fill
                  alt={`${p.title} — Terra Azul`}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-[10px] text-white/60 uppercase tracking-widest mb-1">
                    {p.category}
                  </p>
                  <h3 className="text-base font-bold leading-tight">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 md:hidden text-center">
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-green"
            >
              Ver todos los proyectos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      )}
    </>
  )
}
