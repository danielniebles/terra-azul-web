"use client";
import Image from "next/image";
import { DNA_VALUES } from "../constants";
/* import useEmblaCarousel from 'embla-carousel-react' */

export default function Home() {
  /* const [emblaRef] = useEmblaCarousel() */

  return (
    <>
      <section id="about-us" className="bg-mint-green mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2">
          <article className="flex flex-col p-12">
            <h2 className="heading !font-medium">
              ¿Quiénes <strong className="font-extrabold">somos?</strong>
            </h2>
            <p className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum earum voluptatem nam libero repellat eius cupiditate
              modi cumque hic inventore dolor, dolorum dolores cum
              exercitationem veritatis doloribus. In, obcaecati nesciunt?
            </p>
          </article>
          <figure className="relative flex justify-center">
            <Image
              src="/nova/nova-show.png"
              fill
              alt="Logo"
              className="-rotate-y-180 w-auto"
            />
          </figure>
        </div>
      </section>
      <section id="dna" className="max-w-7xl mx-auto">
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
    </>
  );
}
