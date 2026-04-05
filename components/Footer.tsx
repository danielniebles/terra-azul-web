import Link from "next/link"
import Image from "next/image"
import { SOCIALS } from "@/app/constants"

const Footer = () => {
  return (
    <footer className="bg-forest-green">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="/logo-terra.svg"
              width={160}
              height={40}
              alt="Terra Azul — Oficina de Arquitectura y Construcción"
              className="mb-4 brightness-0 invert"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Estudio de arquitectura comprometido con la regeneración del entorno
              urbano y natural mediante el diseño de vanguardia. Bogotá, Colombia.
            </p>
            <div className="flex gap-3 mt-5">
              {SOCIALS.map(({ icon, link, name }) => (
                <Link
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Terra Azul en ${name}`}
                  className="w-8 h-8 relative opacity-60 hover:opacity-100 transition-opacity"
                >
                  <Image src={icon} fill alt={name} className="object-contain brightness-0 invert" />
                </Link>
              ))}
            </div>
          </div>

          {/* Explorar */}
          <nav aria-label="Explorar">
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">
              Explorar
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Inicio", href: "/" },
                { label: "Proyectos", href: "/proyectos" },
                { label: "Servicios", href: "/servicios" },
                { label: "Contáctanos", href: "/#contactanos" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal">
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">
              Legal
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Política de privacidad", href: "/privacidad" },
                { label: "Aviso legal", href: "/aviso-legal" },
                { label: "Contáctanos", href: "/#contactanos" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Terra Azul Architecture. Built for Sustainability.
          </p>
          <p className="text-white/20 text-xs">
            Bogotá, Colombia
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
