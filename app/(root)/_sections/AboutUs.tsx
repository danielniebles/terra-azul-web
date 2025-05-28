import Image from "next/image"

const AboutUs = () => {
  return (
    <section id="nosotros" className="bg-mint-green">
      <div className="container !max-w-4xl double-grid ">
        <article className="flex flex-col p-12 items-center">
          <h2 className="heading !font-medium mb-8">
            ¿Quiénes <strong className="font-extrabold">somos?</strong>
          </h2>
          <p className="content !font-light">
            Somos una compañía de arquitectura con más de 10 años en el mercado, transformamos el presente a través de arquitectura inteligente, fusionando innovación, tecnología y sostenibilidad.
            Creamos espacios que mejoran la calidad de vida de las personas y promueven el cuidado del planeta.
          </p>
        </article>
        <figure className="relative flex justify-center">
          <div className="relative w-full max-w-[300px] aspect-[3/4]">
          <Image
            src="/nova/nova-show.png"
            fill
            alt="Logo"
            className="-rotate-y-180 object-cover overflow-visible"
          />
          </div>
        </figure>
      </div>
    </section>
  )
}

export default AboutUs