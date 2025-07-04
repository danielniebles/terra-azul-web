import { ODS_GOALS } from "@/app/constants"
import Image from "next/image"

const Sustainability = () => {
  return (
    <section className="bg-terra-sand">
      <div className="container double-grid">
        <article className="flex flex-col px-12 mt-12 md:my-0 md:p-12 justify-center">
          <h2 className="heading text-orientation !font-medium !text-forest-green mb-8">
            ¡El <strong className="font-extrabold">compromiso</strong> <br />{" "}
            que guía<br /><strong className="font-extrabold"> nuestra visión!</strong>
          </h2>
          <p className="text-forest-green">
            En Terra Azul estamos <strong>comprometidos con la Agenda 2030 y alineamos cada uno de nuestros proyectos con los Objetivos de Desarrollo Sostenible</strong>.
            Nuestra labor impulsa activamente cada uno de estos objetivos para crear espacios responsables, conscientes y alineados con un futuro más justo y sostenible para todos.
          </p>
        </article>
        <article className="flex flex-col px-12 md:px-0 py-0 md:py-12 ">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-0 md:mb-8">
            <div className="border-2 border-forest-green px-6 py-2 h-auto flex items-center justify-center mt-8 md:mt-0">
              <p className="text-[7rem] md:text-5xl font-extrabold text-forest-green uppercase leading-none">ODS</p>
            </div>
            <div className="text-forest-green font-extrabold uppercase gap-1 md:gap-0 flex flex-col">
              <div className="text-[3.5rem] md:text-4xl leading-[0.8]">OBJETIVOS</div>
              <div className="text-[36px] md:text-2xl leading-[0.8]">DE DESARROLLO</div>
              <div className="text-[50px] md:text-[33px] leading-[0.8]">SOSTENIBLE</div>
            </div>
          </div>
          <div className="grid grid-cols-2 py-8 md:py-0 md:p-0 md:grid-cols-4 gap-2">
            {ODS_GOALS.map(({ number, title, color, svgUrl }) => (
              <div key={color} className="flex flex-col justify-center" style={{ backgroundColor: color }}>
                <header className="flex justify-center items-center gap-1">
                  <div className="text-4xl font-extrabold text-white leading-0 mt-2">{number}</div>
                  <div className="flex flex-col items-center uppercase
                  text-white text-[10px] font-bold leading-[1.25] relative mt-2">
                    {title.map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </div>
                </header>
                <div className="relative w-full max-w-[300px] h-[100px]">
                  <Image src={svgUrl} fill alt="Logo" className="p-3" />
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Sustainability