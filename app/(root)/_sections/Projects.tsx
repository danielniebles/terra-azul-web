import { PROJECTS } from "@/app/constants"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const Projects = () => {

  return (
    <section id="team" className="container my-16">
      <h2 className="heading !font-medium !text-forest-green text-center mb-8">
        ¿Quieres saber<br /><strong className="font-extrabold">en qué estamos trabajando?</strong><br />{" "}
        Aquí te lo contamos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-self-center gap-8">
        {PROJECTS.map(({ title, imageUrl }) => (
          <div key={title} className="flex flex-col items-center">
            <div className="relative w-52 h-36 mb-4">
              <Image
                src={imageUrl} fill alt={title}
                className="object-cover"
              />
            </div>
            <span className="text-forest-green font-bold text-md">{title}</span>
            <Button className="mt-4 bg-navy-blue hover:bg-navy-blue/90">Ver más</Button>
          </div>
        ))}
      </div>
    </section>
  )

}

export default Projects