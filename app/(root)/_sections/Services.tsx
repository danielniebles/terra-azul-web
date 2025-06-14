import { SERVICES } from "@/app/constants"
import Image from "next/image"

const Services = () => {
  return (
    <section id="servicios" className="bg-forest-green mt-10">
      <div className="container py-16">
        <h2 className="heading !font-medium mb-8 text-center">
          ¿En qué <strong className="font-extrabold">podemos ayudarte?</strong>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {SERVICES.map(({ title, icon }) => (
            <div key={title} className="flex flex-col items-center">
              <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4">
                <Image
                  src={icon} fill alt={title}
                  className="object-cover"
                />
              </div>
              <span className="text-center w-40 md:w-64 text-white font-bold text-md">{title}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Services