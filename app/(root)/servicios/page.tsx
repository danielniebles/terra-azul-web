import { SERVICES } from "@/app/constants"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, Wrench } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicios de Arquitectura y Construcción | Terra Azul Bogotá",
  description:
    "Diseño arquitectónico, renovación de espacios, impermeabilización, automatización y más. Soluciones integrales de construcción en Bogotá, Colombia.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios de Arquitectura y Construcción | Terra Azul",
    description:
      "Soluciones integrales de construcción en Bogotá: desde diseño arquitectónico hasta señalización industrial y domótica.",
  },
}

const BADGES = [
  { icon: CheckCircle, label: "Certificados", desc: "Garantía total en obra" },
  { icon: Clock, label: "Tiempos", desc: "Cumplimiento estricto" },
  { icon: Wrench, label: "Experticia", desc: "Personal altamente calificado" },
]

export default function ServiciosPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-slate-50 pt-16 pb-4">
        <div className="container px-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint-green mb-4">
            Excelencia Técnica
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-forest-green leading-[1.05] mb-8 max-w-2xl">
            Nuestros<br />Servicios
          </h1>
          <div className="flex gap-4 items-stretch max-w-xl mb-4">
            <div className="w-1 bg-mint-green flex-shrink-0 rounded-full" />
            <p className="text-gray-600 leading-relaxed">
              En Terra Azul, fusionamos la precisión técnica con la visión
              arquitectónica. Nuestro enfoque multidisciplinario garantiza
              soluciones constructivas que perduran, desde el detalle interior
              más refinado hasta la infraestructura exterior más robusta.
            </p>
          </div>
        </div>
      </section>

      {/* ── Service rows ── */}
      <section className="bg-slate-50">
        <div className="container px-4 pb-8">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={service.slug}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-16 items-center py-14 border-b border-gray-200 last:border-0`}
              >
                {/* Icon panel */}
                <div className="w-full md:w-1/2 bg-forest-green rounded-2xl flex items-center justify-center h-64 md:h-80 flex-shrink-0">
                  <div className="relative w-28 h-28 md:w-36 md:h-36">
                    <Image
                      src={service.icon}
                      fill
                      alt={service.title}
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-forest-green leading-tight mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-forest-green hover:text-mint-green transition-colors duration-200 border-b-2 border-forest-green hover:border-mint-green pb-0.5"
                  >
                    Ver más <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-forest-green py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                ¿Listo para iniciar<br />su próximo proyecto?
              </h2>
              <p className="text-white/65 leading-relaxed mb-8">
                Nuestro equipo de especialistas está listo para brindar una
                asesoría técnica detallada o una cotización personalizada
                ajustada a sus necesidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contactanos"
                  className="inline-flex items-center justify-center bg-white text-forest-green text-sm font-bold px-6 py-3 rounded-lg hover:bg-terra-sand transition-colors duration-200"
                >
                  Solicitar Asesoría
                </Link>
                <Link
                  href="/proyectos"
                  className="inline-flex items-center justify-center border border-white/30 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:border-white transition-colors duration-200"
                >
                  Ver Proyectos
                </Link>
              </div>
            </div>

            {/* Right — badges */}
            <div className="flex flex-col gap-5">
              {BADGES.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="bg-white/10 rounded-full p-3 flex-shrink-0">
                    <Icon className="w-5 h-5 text-mint-green" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{label}</p>
                    <p className="text-white/50 text-xs">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
