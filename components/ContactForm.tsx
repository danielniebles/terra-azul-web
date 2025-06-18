'use client'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

const ContactForm = ({ isMobile }: { isMobile: boolean }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, phone, message } = formValues
    window.open(`https://wa.me/573113988081?text=${`Nombre:%20${name}%0AEmail:%20${email}%0ATeléfono:%20${phone}%0AMessage:%20${encodeURIComponent(
      message
    )}`}`, '_blank');
  };

  return (
    <form className="grid grid-cols-[0.7fr_auto_1fr] gap-4 py-12 px-8" onSubmit={handleSubmit}>
      <div />
      <div className="hidden md:flex flex-col gap-4">
        <Label className="form-label" htmlFor="name">Nombre</Label>
        <Label className="form-label" htmlFor="email">Correo electrónico</Label>
        <Label className="form-label" htmlFor="phone">Teléfono</Label>
        <Label className="form-label" htmlFor="message">Mensaje</Label>
      </div>
      <div className="flex flex-col gap-4">
        <Input onChange={handleChange} className="bg-white" id="name" name="name" placeholder={`${isMobile ? 'Nombre' : ''}`} />
        <Input onChange={handleChange} className="bg-white" type="email" id="email" name="email" placeholder={`${isMobile ? 'Correo Electrónico' : ''}`} />
        <Input onChange={handleChange} className="bg-white" type="phone" id="phone" name="phone" placeholder={`${isMobile ? 'Teléfono' : ''}`} />
        <Textarea onChange={handleChange} className="bg-white" id="message" name="message" />
        <div className="flex items-center">
          <Checkbox className="bg-white data-[state=checked]:bg-navy-blue data-[state=checked]:border-navy-blue"
            id="terms"
            onCheckedChange={(checked) => setIsChecked(!!checked)}
          />
          <Label className="ml-2" htmlFor="terms">He leído y acepto la Política de Privacidad de Terra Azul</Label>
        </div>
        <p className="text-sm">En Terra Azul cuidamos tu información. Los datos que compartes con nosotros a través de este formulario serán tratados con responsabilidad y utilizados únicamente para brindarte un mejor servicio. Al marcar esta casilla, nos das tu consentimiento para ello. La información será almacenada en los servidores de Google. Puedes consultar su política de privacidad aquí. Recuerda que tienes derecho a acceder, modificar o eliminar tus datos cuando lo necesites.</p>
        <Button type="submit" className="w-fit bg-navy-blue hover:bg-navy-blue/90 self-end" disabled={!isChecked}>Enviar</Button>
      </div>
    </form>
  )
}

export default ContactForm