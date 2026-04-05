import { DNA_VALUES } from "@/app/constants"

const ICONS: Record<string, string> = {
  INNOVACIÓN: "◈",
  SOSTENIBILIDAD: "◉",
  CONOCIMIENTO: "▣",
  CONFIANZA: "◎",
}

const DNA = () => {
  const [first, ...rest] = DNA_VALUES
  const lastItem = rest[rest.length - 1]
  const middleItems = rest.slice(0, -1)

  return (
    <section id="dna" className="bg-slate-50 py-16">
      <div className="container px-4">
        {/* Header row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint-green mb-3">
              Filosofía Constructiva
            </p>
            <h2 className="heading !text-forest-green !font-bold text-left">
              ¿Por qué <strong className="font-extrabold">elegirnos?</strong>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-gray-500 leading-relaxed">
              Redefinimos la excelencia arquitectónica a través de cuatro pilares
              fundamentales de diseño y ejecución.
            </p>
          </div>
        </div>

        {/* Cards — top row: first card large + two smaller */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* First card — slightly larger */}
          <article className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm md:col-span-1">
            <div className="w-10 h-10 rounded-lg bg-forest-green/10 flex items-center justify-center mb-4">
              <span className="text-forest-green text-lg">{ICONS[first.title] ?? "◈"}</span>
            </div>
            <h3 className="text-forest-green font-bold text-lg mb-2">{first.title.charAt(0) + first.title.slice(1).toLowerCase()}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{first.content}</p>
          </article>

          {/* Middle cards */}
          {middleItems.map((item) => (
            <article key={item.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-forest-green/10 flex items-center justify-center mb-4">
                <span className="text-forest-green text-lg">{ICONS[item.title] ?? "◈"}</span>
              </div>
              <h3 className="text-forest-green font-bold text-lg mb-2">{item.title.charAt(0) + item.title.slice(1).toLowerCase()}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.content}</p>
            </article>
          ))}
        </div>

        {/* Last card — full width */}
        {lastItem && (
          <article className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-10 h-10 rounded-lg bg-forest-green/10 flex items-center justify-center flex-shrink-0">
              <span className="text-forest-green text-lg">{ICONS[lastItem.title] ?? "◈"}</span>
            </div>
            <div>
              <h3 className="text-forest-green font-bold text-lg mb-1">{lastItem.title.charAt(0) + lastItem.title.slice(1).toLowerCase()}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{lastItem.content}</p>
            </div>
          </article>
        )}
      </div>
    </section>
  )
}

export default DNA
