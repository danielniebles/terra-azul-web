import { SOCIALS } from "@/app/constants"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { isMobileDevice } from "@/app/utils"
import ContactForm from "@/components/ContactForm"

const Contact = async () => {
  const isMobile = await isMobileDevice()

  return (
    <section className="bg-terra-sand pt-16 md:px-16" id="contactanos">
      <div className="container flex flex-col">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint-green mb-3 text-center">
          Hablemos
        </p>
        <h2 className="heading !font-medium text-center !text-forest-green mb-4">
          Construyamos algo <strong className="font-extrabold">trascendental.</strong>
        </h2>
        <p className="text-center text-forest-green/70 px-8 mb-2">
          ¿Tienes un proyecto en mente? Nuestro equipo está listo para convertir
          tu visión en una estructura habitable y consciente.
        </p>
        <div>
          <ContactForm isMobile={isMobile} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4 relative overflow-visible">
            <div className="relative h-[150px] md:h-[unset] overflow-visible hidden md:block">
              <Image
                src="/nova/nova-contact.png"
                alt="Logo"
                width={300}
                height={600}
                className="absolute -bottom-14 md:bottom-0 left-0 h-[300px] md:h-[600px] w-auto -scale-x-100 object-cover overflow-visible"
              />
            </div>
            <div className="flex flex-col gap-4 py-4 md:py-8 border-0 md:border-r-2 border-forest-green items-center md:items-start bg-white md:bg-transparent">
              <div className="flex items-center">
                <Image src={"/social/at.svg"} width={30} height={30} alt="terra-email" />
                <span className="text-forest-green ml-2">contacto@terraazul.com</span>
              </div>
              <div className="flex items-center">
                <Image src={"/social/phone.svg"} width={30} height={30} alt="terra-hpne" />
                <span className="text-forest-green ml-2">311 398 8081</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-4 md:py-8 items-center md:items-start bg-white md:bg-transparent">
              <h3 className="text-2xl font-semibold !text-forest-green">Síguenos en redes:</h3>
              <div className="grid grid-cols-4 gap-4">
                {SOCIALS.map(({ icon, link, name }) => (
                  <Button key={link} variant="link" className="p-0 w-fit">
                    <Link href={link} target="_blank">
                      <Image src={icon} width={40} height={40} alt={name} />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default Contact