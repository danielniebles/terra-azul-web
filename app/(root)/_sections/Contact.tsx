import { SOCIALS } from "@/app/constants"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import Link from "next/link"

const Contact = () => {
  return (
    <section className="bg-terra-sand pt-16 px-16">
      <div className="container flex flex-col">
        <h2 className="heading !font-medium text-center !text-forest-green mb-8">
          ¿Tienes un proyecto? <strong className="font-extrabold">Conversemos.</strong>
        </h2>
        <p className="text-center text-forest-green">En Terra Azul valoramos tu tiempo y confianza. <br />
          Por eso, contamos con <strong className="font-extrabold">diversos canales de atención para responder</strong> <br />
          <strong className="font-extrabold">tus solicitudes </strong> de manera ágil, clara y adaptada a tus necesidades.</p>
        <div>
          <form className="grid grid-cols-[0.7fr_auto_1fr] gap-4 pt-12" action="">
            <div />
            <div className="flex flex-col gap-4">
              <Label className="h-[36px] text-forest-green font-extrabold" htmlFor="name">Nombre</Label>
              <Label className="h-[36px] text-forest-green font-extrabold" htmlFor="email">Correo electrónico</Label>
              <Label className="h-[36px] text-forest-green font-extrabold" htmlFor="phone">Teléfono</Label>
              <Label className="h-[36px] text-forest-green font-extrabold" htmlFor="message">Mensaje</Label>
            </div>
            <div className="flex flex-col gap-4">
              <Input className="bg-white" id="name" />
              <Input className="bg-white" type="email" id="email" />
              <Input className="bg-white" type="email" id="phone" />
              <Textarea className="bg-white" id="message" />
              <div className="flex items-center">
                <Checkbox className="bg-white data-[state=checked]:bg-navy-blue data-[state=checked]:border-navy-blue" id="terms" />
                <Label className="ml-2" htmlFor="terms">He leído y acepto la Política de Privacidad de Terra Azul</Label>
              </div>
              <p className="text-sm">En Terra Azul cuidamos tu información. Los datos que compartes con nosotros a través de este formulario serán tratados con responsabilidad y utilizados únicamente para brindarte un mejor servicio. Al marcar esta casilla, nos das tu consentimiento para ello. La información será almacenada en los servidores de Google. Puedes consultar su política de privacidad aquí. Recuerda que tienes derecho a acceder, modificar o eliminar tus datos cuando lo necesites.</p>
              <Button className="w-fit bg-navy-blue hover:bg-navy-blue/90">Enviar</Button>
            </div>
          </form>
          <div className="grid grid-cols-3 gap-4 relative overflow-visible">
            <div className="relative">
              <Image
                src="/nova/nova-contact.png"
                alt="Logo"
                width={300}
                height={600}
                className="absolute bottom-0 left-0 h-[600px] w-auto -scale-x-100 object-cover overflow-visible"
              />
            </div>
            <div className="flex flex-col gap-4 my-8 border-r-2 border-forest-green">
              <div className="flex items-center">
                <Image src={"/social/at.svg"} width={30} height={30} alt="terra-email" />
                <span className="text-forest-green ml-2">contacto@terraazul.com</span>
              </div>
              <div className="flex items-center">
                <Image src={"/social/phone.svg"} width={30} height={30} alt="terra-hpne" />
                <span className="text-forest-green ml-2">311 398 8081</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 my-8 items-start">
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