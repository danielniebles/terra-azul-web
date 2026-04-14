'use client'
import { DotButton, useDotButton } from '@/components/CarouselDots'
import useEmblaCarousel from 'embla-carousel-react'
import { getImageProps } from 'next/image'
import { useCallback } from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import { HOME_SLIDER } from '@/app/constants'
import Link from 'next/link'

const HomeSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return
    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop
    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  return (
    <div className="font-[family-name:var(--font-plus-jakarta)] embla" ref={emblaRef} id='home'>
      <div className="embla__container h-screen">
        {HOME_SLIDER.map(({ mobile, desktop, text, position, color = 'text-white', smallText = false }, index) => {
          const commonProps = { fill: true, alt: '' }
          const { srcSet: srcDesktop } = getImageProps({ ...commonProps, src: desktop }).props
          const { srcSet: srcMobile, ...rest } = getImageProps({ ...commonProps, src: mobile }).props
          const isFirst = index === 0

          return (
            <div className="embla__slide flex-shrink-0 w-full relative" key={index}>
              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/65 z-[1]" />

              {isFirst ? (
                /* ── First slide: full centered hero ── */
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/60 mb-6">
                    Estudio de Arquitectura de Vanguardia
                  </p>
                  <h1 className="font-extrabold leading-[1.05] mb-8">
                    <span className="block text-white text-5xl md:text-7xl">
                      Construyendo sueños,
                    </span>
                    <span className="block text-mint-green text-5xl md:text-7xl">
                      transformando
                    </span>
                    <span className="block text-mint-green text-5xl md:text-7xl">
                      realidades
                    </span>
                  </h1>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <Link
                      href="/proyectos"
                      className="inline-flex items-center gap-2 bg-white/15 border border-white/40 text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-white/25 hover:border-white/70 transition-colors duration-200 backdrop-blur-sm"
                    >
                      Explorar Proyectos →
                    </Link>
                    <Link
                      href="#nosotros"
                      className="inline-flex items-center gap-2 bg-forest-green/80 border border-forest-green text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-forest-green transition-colors duration-200"
                    >
                      Nuestra Visión
                    </Link>
                  </div>
                </div>
              ) : (
                /* ── Other slides: positioned text ── */
                <div className={`absolute w-full md:max-w-7xl flex flex-col justify-end gap-4 p-8 z-10 ${position}`}>
                  <p className={`${color} w-full ${smallText ? 'text-4xl' : 'text-5xl'} md:text-6xl`}>
                    {text}
                  </p>
                </div>
              )}

              <picture>
                <source srcSet={srcMobile} media="(max-width: 768px)" type="image/jpeg" />
                <source srcSet={srcDesktop} media="(min-width: 769px)" type="image/jpeg" />
                <img
                  {...rest}
                  className='object-cover max-w-8xl mx-auto h-full'
                  alt={isFirst ? 'Terra Azul — Oficina de Arquitectura y Construcción en Bogotá' : `Terra Azul — imagen ${index + 1}`}
                />
              </picture>
            </div>
          )
        })}
      </div>
      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeSlider
