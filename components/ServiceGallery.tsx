import Image from "next/image"

// Grid layout: slot 1 is large (spans 2 cols + 2 rows), slots 2-5 fill the rest.
// When fewer than 5 images exist, remaining slots show a branded placeholder.
const GRID_SLOTS = [
  { area: "one",   className: "col-span-2 row-span-2" },
  { area: "two",   className: "col-span-1 row-span-1" },
  { area: "three", className: "col-span-1 row-span-1" },
  { area: "four",  className: "col-span-1 row-span-1" },
  { area: "five",  className: "col-span-2 row-span-1" },
]

type Props = {
  images: string[]
  serviceTitle: string
  serviceIcon: string
}

export default function ServiceGallery({ images, serviceTitle, serviceIcon }: Props) {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[480px] md:h-[560px]">
      {GRID_SLOTS.map((slot, i) => {
        const src = images[i]
        return (
          <div
            key={slot.area}
            className={`${slot.className} relative overflow-hidden rounded-xl`}
          >
            {src ? (
              <Image
                src={src}
                fill
                alt={`${serviceTitle} — Terra Azul, imagen ${i + 1}`}
                className="object-cover"
              />
            ) : (
              // Branded placeholder — replaced automatically once images[i] is set
              <div className="w-full h-full bg-gradient-to-br from-forest-green to-navy-blue flex flex-col items-center justify-center gap-3 opacity-80">
                <div className="relative w-12 h-12 opacity-40">
                  <Image
                    src={serviceIcon}
                    fill
                    alt=""
                    aria-hidden="true"
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <span className="text-white/30 text-xs uppercase tracking-widest font-semibold">
                  Próximamente
                </span>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
