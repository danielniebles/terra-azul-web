import Image from "next/image"
import { Leaf, Compass, Sparkles } from "lucide-react"

const PILLARS = [
  {
    icon: Leaf,
    title: "Sostenibilidad",
    desc: "Priorizamos materiales de bajo impacto y energías renovables.",
  },
  {
    icon: Compass,
    title: "Precisión",
    desc: "Cada detalle técnico es ejecutado con rigor arquitectónico.",
  },
  {
    icon: Sparkles,
    title: "Innovación",
    desc: "Aplicamos las últimas tecnologías en bioclimatismo.",
  },
]

const AboutUs = () => {
  return (
    <section id="nosotros" className="py-8 md:py-32 bg-[#B0CFA8] relative overflow-hidden">
      {/* Decorative skewed stripe */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-1/3 h-full bg-[#dfebe9]/40 -skew-x-12 translate-x-20 pointer-events-none"
      />

      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* ── Left: image card + experience badge ── */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#e4f0ef] rounded-3xl p-4 shadow-sm border border-white/40">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/nova/nova-show.png"
                  fill
                  alt="Nova, asistente de Terra Azul"
                  className="object-cover duration-700"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 md:-right-6 -right-2 bg-forest-green text-white p-8 rounded-2xl shadow-2xl flex flex-col items-center">
              <span className="text-4xl font-extrabold leading-none font-[family-name:var(--font-plus-jakarta)]">
                10+
              </span>
              <span className="text-[10px] uppercase tracking-tighter text-center text-white/70 mt-1 leading-snug">
                Años de<br />Experiencia
              </span>
            </div>
          </div>

          {/* ── Right: content ── */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-forest-green mb-4">
                ¿Quiénes somos?
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Fusionamos la innovación con el{" "}
                <em className="italic font-normal text-gray-700">
                  respeto por la naturaleza.
                </em>
              </h2>
            </div>

            {/* Two-column body with individual accent lines */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-1 bg-red-500 rounded-full" />
                <p className="text-gray-600 leading-relaxed">
                  En Terra Azul, entendemos que cada estructura es un diálogo entre el entorno y quienes lo habitan. Nuestra trayectoria de más de una década nos avala como líderes en arquitectura sostenible.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-1 bg-forest-green rounded-full" />
                <p className="text-gray-600 leading-relaxed">
                  No solo diseñamos edificios; creamos ecosistemas habitables que minimizan el impacto ambiental y maximizan la calidad de vida a través de materiales honestos y eficiencia energética.
                </p>
              </div>
            </div>

            {/* Pillar cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {PILLARS.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white p-6 rounded-xl border border-gray-200/60 hover:border-forest-green/30 transition-colors"
                >
                  <Icon className="w-5 h-5 text-forest-green mb-3" strokeWidth={1.5} />
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutUs
