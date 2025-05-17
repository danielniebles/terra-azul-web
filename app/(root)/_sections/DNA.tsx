import { DNA_VALUES } from "@/app/constants"
import Image from "next/image"

const DNA = () => {
  return (
    <section id="dna" className="container">
      <h2 className="heading !font-medium !text-forest-green">
        ¿Por qué <strong className="font-extrabold">elegirnos?</strong> <br />{" "}
        Nuestro<strong className="font-extrabold"> DNA</strong>
      </h2>
      <div className="grid grid-cols-2">
        {DNA_VALUES.map(({ title, subtitle, content, imageUrl }) => (
          <article className="flex flex-col p-12" key={title}>
            <figure className="flex justify-center mb-4">
              <div className="relative w-full max-w-[300px] h-[200px]">
                <Image
                  src={imageUrl}
                  alt="Logo"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </figure>
            <h3 className="heading !font-medium !text-forest-green">
              {title}
            </h3>
            <p className="content !text-forest-green">{subtitle}</p>
            <p className="content !text-forest-green">{content}</p>
          </article>
        ))}
      </div>
    </section>
  )

}

export default DNA