import Image from "next/image"
import { serviceImageUrl } from "@/app/utils"

// Slot 1 spans 2 cols × 2 rows (hero), slot 5 spans 2 cols × 1 row (wide).
// Remaining slots are 1×1. Unfilled slots show a branded placeholder.
const GRID_SLOTS = [
  { className: "col-span-2 row-span-2" },
  { className: "col-span-1 row-span-1" },
  { className: "col-span-1 row-span-1" },
  { className: "col-span-1 row-span-1" },
  { className: "col-span-2 row-span-1" },
]

type Props = {
  images: string[]
  serviceTitle: string
  serviceIcon: string
  serviceSlug: string
}

export default function ServiceGallery({ images, serviceTitle, serviceIcon, serviceSlug }: Props) {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[480px] md:h-[560px]">
      {GRID_SLOTS.map((slot, i) => {
        const filename = images[i]
        const src = filename ? serviceImageUrl(serviceSlug, filename) : null

        return (
          <div
            key={i}
            className={`${slot.className} relative overflow-hidden rounded-xl`}
          >
            {src ? (
              <Image
                src={src}
                fill
                alt={`${serviceTitle} — Terra Azul, imagen ${i + 1}`}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-forest-green to-navy-blue flex flex-col items-center justify-center gap-3">
                <div className="relative w-12 h-12 opacity-30">
                  <Image
                    src={serviceIcon}
                    fill
                    alt=""
                    aria-hidden="true"
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <span className="text-white/25 text-xs uppercase tracking-widest font-semibold">
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
