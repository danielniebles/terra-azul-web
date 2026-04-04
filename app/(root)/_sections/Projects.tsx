import { PROJECTS } from "@/app/constants"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const Projects = () => {
  const featured = PROJECTS.find((p) => p.featured)
  const others = PROJECTS.filter((p) => !p.featured)

  return (
    <section id="proyectos" className="container my-16 px-4">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-mint-green mb-2">
          Nuestro portafolio
        </p>
        <h2 className="heading !text-forest-green !font-bold">
          Nuestros Proyectos
        </h2>
        <div className="w-16 h-1 bg-mint-green mt-3" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-[520px]">
        {/* Featured card */}
        {featured && (
          <Link
            href={`/proyectos/${featured.slug}`}
            className="group relative md:col-span-2 overflow-hidden rounded-xl block h-72 md:h-full"
          >
            <Image
              src={featured.imageUrl}
              fill
              alt={`${featured.title} — Terra Azul, ${featured.location}`}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-white bg-forest-green/80 backdrop-blur-sm px-3 py-1 rounded-full">
                {featured.category}
              </span>
            </div>
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-xs text-white/60 mb-1 uppercase tracking-widest">
                {featured.location} · {featured.year}
              </p>
              <h3 className="text-2xl font-bold leading-tight mb-2">
                {featured.title}
              </h3>
              <p className="text-sm text-white/75 leading-relaxed mb-4 max-w-md">
                {featured.description}
              </p>
              <div className="flex items-center gap-1.5 text-terra-sand text-sm font-semibold">
                Ver proyecto <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        )}

        {/* Side cards */}
        <div className="flex flex-col gap-4">
          {others.map((project) => (
            <Link
              key={project.slug}
              href={`/proyectos/${project.slug}`}
              className="group relative flex-1 overflow-hidden rounded-xl block min-h-[180px]"
            >
              <Image
                src={project.imageUrl}
                fill
                alt={`${project.title} — Terra Azul, ${project.location}`}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              {/* Arrow — appears on hover */}
              <div className="absolute top-3 right-3 bg-white/15 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="text-[10px] text-white/60 uppercase tracking-widest mb-1">
                  {project.category} · {project.year}
                </p>
                <h3 className="text-base font-bold leading-tight">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-8 flex justify-center md:justify-end">
        <Link
          href="/proyectos"
          className="inline-flex items-center gap-2 text-forest-green font-semibold border-b-2 border-mint-green pb-0.5 hover:text-mint-green transition-colors duration-200"
        >
          Ver todos los proyectos <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}

export default Projects
