import { DNA_VALUES } from "@/app/constants"
import Image from "next/image"

const DNA = () => {
  return (
    <section id="dna" className="container my-16">
      <h2 className="heading !font-medium !text-forest-green text-center mb-8">
        ¿Por qué <strong className="font-extrabold">elegirnos?</strong> <br />{" "}
        Este es nuestro<strong className="font-extrabold"> ADN</strong>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-self-center gap-12">
        {DNA_VALUES.map(({ title, subtitle, content, imageUrl }) => (
          <article className="flex flex-col p-4 max-w-96" key={title}>
            <figure className="flex justify-center mb-4">
              <div className="relative w-full max-w-[400px] h-[200px]">
                <Image
                  src={imageUrl}
                  alt="Logo"
                  fill
                  className="object-cover"
                />
              </div>
            </figure>
            <h3 className="heading !font-bold !text-forest-green">
              {title}
            </h3>
            <p className="content !text-forest-green !font-bold">{subtitle}</p>
            <p className="content !text-forest-green">{content}</p>
          </article>
        ))}
      </div>
    </section>
  )

}

export default DNA