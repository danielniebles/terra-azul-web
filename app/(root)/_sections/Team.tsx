import { TEAM } from "@/app/constants"
import Image from "next/image"

const Team = () => {
  return (
    <section id="team" className="container my-16">
      <h2 className="heading !font-medium !text-forest-green text-center mb-8">
        <strong className="font-extrabold">¡Nos encantará escucharte</strong><br />{" "}
        y estar contigo en cada paso!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-self-center gap-8">
        {TEAM.map(({ name, position, imageUrl }) => (
          <div key={name} className="flex flex-col items-center">
            <div className="relative w-52 h-52 md:w-72 md:h-72 mb-4">
              <Image
                src={imageUrl} fill alt={`${name}-${position}`}
                className="object-cover" />
            </div>
            <span className="text-forest-green font-bold text-md">{name}</span>
            <span className="text-forest-green">{position}</span>
          </div>

        ))}
      </div>
    </section>
  )

}

export default Team