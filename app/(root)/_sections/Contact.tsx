import { SOCIALS } from "@/app/constants"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import Link from "next/link"
import { isMobileDevice } from "@/app/utils"

const Contact = async () => {
  const isMobile = await isMobileDevice()

  return (
    <section className="bg-terra-sand pt-16 md:px-16" id="contactanos">
      <div className="container flex flex-col">
        <h2 className="heading !font-medium text-center !text-forest-green mb-8">
          ¿Tienes un proyecto? <strong className="font-extrabold">Conversemos.</strong>
        </h2>
        <p className="text-center text-forest-green px-8">En Terra Azul valoramos tu tiempo y confianza. <br />
          Por eso, contamos con <strong className="font-extrabold">diversos canales de atención para responder</strong> <br />
          <strong className="font-extrabold">tus solicitudes </strong> de manera ágil, clara y adaptada a tus necesidades.</p>
        <div>
          <form className="grid grid-cols-[0.7fr_auto_1fr] gap-4 py-12 px-8" action="">
            <div />
            <div className="hidden md:flex flex-col gap-4">
              <Label className="h-[36px] text-forest-green font-extrabold" htmlFor="name">Nombre</Label>
              <Label className="h-[36px] text-forest-green font-extrabold" htmlFor="email">Correo electrónico</Label>
              <Label className="h-[36px] text-forest-green font-extrabold" htmlFor="phone">Teléfono</Label>
              <Label className="h-[36px] text-forest-green font-extrabold" htmlFor="message">Mensaje</Label>
            </div>
            <div className="flex flex-col gap-4">
              <Input placeholder={`${isMobile ? 'Nombre' : ''}`} className="bg-white" id="name" />
              <Input placeholder={`${isMobile ? 'Correo Electrónico' : ''}`} className="bg-white" type="email" id="email" />
              <Input placeholder={`${isMobile ? 'Teléfono' : ''}`} className="bg-white" type="phone" id="phone" />
              <Textarea className="bg-white" id="message" />
              <div className="flex items-center">
                <Checkbox className="bg-white data-[state=checked]:bg-navy-blue data-[state=checked]:border-navy-blue" id="terms" />
                <Label className="ml-2" htmlFor="terms">He leído y acepto la Política de Privacidad de Terra Azul</Label>
              </div>
              <p className="text-sm">En Terra Azul cuidamos tu información. Los datos que compartes con nosotros a través de este formulario serán tratados con responsabilidad y utilizados únicamente para brindarte un mejor servicio. Al marcar esta casilla, nos das tu consentimiento para ello. La información será almacenada en los servidores de Google. Puedes consultar su política de privacidad aquí. Recuerda que tienes derecho a acceder, modificar o eliminar tus datos cuando lo necesites.</p>
              <Button className="w-fit bg-navy-blue hover:bg-navy-blue/90 self-end">Enviar</Button>
            </div>
          </form>
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