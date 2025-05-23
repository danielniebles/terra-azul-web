import { SERVICES } from "@/app/constants"
import Image from "next/image"

const Services = () => {
  return (
    <section id="services" className="bg-forest-green mt-10">
      <div className="container py-16">
        <h2 className="heading !font-medium mb-8 text-center">
          ¿En qué <strong className="font-extrabold">podemos ayudarte?</strong>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {SERVICES.map(({ title, icon }) => (
          <div key={title} className="flex flex-col items-center">
            <div className="relative w-36 h-36 mb-4">
              <Image
                src={icon} fill alt={title}
                className="object-cover"
              />
            </div>
            <span className="text-center w-64 text-white font-bold text-md">{title}</span>
          </div>
        ))}

      </div>

    </section>
  )
}

export default Services