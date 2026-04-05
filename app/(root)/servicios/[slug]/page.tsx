import { SERVICES, PROJECTS } from "@/app/constants"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react"
import ServiceGallery from "@/components/ServiceGallery"
import { serviceImageUrl } from "@/app/utils"
import { Metadata } from "next"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return {}
  const heroImage = service.images[0]
    ? serviceImageUrl(service.slug, service.images[0])
    : undefined
  return {
    title: `${service.title} en Bogotá | Terra Azul`,
    description: service.description,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: {
      title: `${service.title} | Terra Azul`,
      description: service.description,
      ...(heroImage && { images: [{ url: heroImage }] }),
    },
  }
}

export default async function ServicioPage({ params }: Props) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) notFound()

  const heroImage = service.images[0]
    ? serviceImageUrl(service.slug, service.images[0])
    : null

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-forest-green to-navy-blue">
        {/* Background image when available */}
        {heroImage && (
          <>
            <Image
              src={heroImage}
              fill
              alt={service.title}
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
          </>
        )}

        {/* Watermark icon — only when no photo */}
        {!heroImage && (
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none"
          >
            <div className="relative w-64 h-64 opacity-10">
              <Image
                src={service.icon}
                fill
                alt=""
                className="object-contain brightness-0 invert"
              />
            </div>
          </div>
        )}

        <div className="container px-4 relative">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-1.5 text-white/50 text-xs font-semibold uppercase tracking-widest mb-6 hover:text-white/80 transition-colors"
          >
            ← Todos los servicios
          </Link>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint-green mb-4">
            Nuestros Servicios
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-2xl mb-6">
            {service.title}
          </h1>
          <p className="text-white/70 leading-relaxed max-w-xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="container px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-mint-green mb-3">
              Cómo lo hacemos
            </p>
            <h2 className="text-2xl font-bold text-forest-green mb-5">
              Un enfoque técnico,<br />un resultado excepcional
            </h2>
            <p className="text-gray-500 leading-relaxed">
              {service.longDescription}
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">
              Lo que incluye
            </p>
            <ul className="space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mint-green flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600 leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link
                href="/#contactanos"
                className="block w-full text-center bg-forest-green text-white text-sm font-bold py-3 rounded-lg hover:bg-forest-green/90 transition-colors duration-200"
              >
                Solicitar cotización →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="container px-4 pb-16">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-mint-green mb-2">
            Galería de trabajos
          </p>
          <h2 className="text-2xl font-bold text-forest-green">
            Nuestro trabajo habla por sí solo
          </h2>
        </div>
        <ServiceGallery
          images={service.images}
          serviceTitle={service.title}
          serviceIcon={service.icon}
          serviceSlug={service.slug}
        />
      </section>

      {/* ── Related projects ── */}
      <section className="bg-slate-50 py-16">
        <div className="container px-4">
          <div className="flex-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-forest-green">
                Proyectos Relacionados
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Casos reales donde aplicamos nuestra experiencia.
              </p>
            </div>
            <Link
              href="/proyectos"
              className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-forest-green hover:text-mint-green transition-colors duration-200"
            >
              Ver todos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PROJECTS.map((project) => (
              <Link
                key={project.slug}
                href={`/proyectos/${project.slug}`}
                className="group relative overflow-hidden rounded-xl block h-56"
              >
                <Image
                  src={project.imageUrl}
                  fill
                  alt={`${project.title} — Terra Azul`}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center gap-1 text-white/50 text-[10px] uppercase tracking-widest mb-1">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </div>
                  <h3 className="text-base font-bold leading-tight">
                    {project.title}
                  </h3>
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
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-forest-green py-14">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Cuéntanos qué necesitas y te asesoramos sin compromiso.
          </p>
          <Link
            href="/#contactanos"
            className="inline-flex items-center gap-2 bg-white text-forest-green text-sm font-bold px-8 py-3 rounded-lg hover:bg-terra-sand transition-colors duration-200"
          >
            Solicitar asesoría <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
