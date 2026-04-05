'use client'
import { DotButton, useDotButton } from '@/components/CarouselDots'
import useEmblaCarousel from 'embla-carousel-react'
import { getImageProps } from 'next/image'
import { useCallback } from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import { HOME_SLIDER } from '@/app/constants'
import localFont from "next/font/local";
import Link from 'next/link'

const lato = localFont({
  src: [
    {
      path: '../../fonts/Lato-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../fonts/Lato-Black.ttf',
      weight: '700',
      style: 'normal'
    },
  ],
  variable: '--font-latto',
})

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
    <div className={`${lato.className} embla`} ref={emblaRef} id='home'>
      <div className="embla__container md:h-[60vh] h-[50vh] mt-[96px]">
        {HOME_SLIDER.map(({ mobile, desktop, text, position, color = 'text-white', smallText = false }, index) => {
          const commonProps = { fill: true, alt: '' }
          const { srcSet: srcDesktop } = getImageProps({ ...commonProps, src: desktop }).props
          const { srcSet: srcMobile, ...rest } = getImageProps({ ...commonProps, src: mobile }).props
          const isFirst = index === 0

          return (
            <div className="embla__slide flex-shrink-0 w-full relative" key={index}>
              <div className={`absolute w-full md:max-w-7xl flex flex-col justify-end gap-4 p-8 z-10 ${position}`}>
                {/* Eyebrow — only on first slide */}
                {isFirst && (
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/80 w-fit">
                    <span className="w-2 h-2 rounded-full bg-mint-green inline-block" />
                    Sustaining the Future
                  </span>
                )}

                {/* Headline — H1 on first slide, p on the rest */}
                {isFirst ? (
                  <h1 className={`${color} w-full ${smallText ? 'text-4xl' : 'text-5xl'} md:text-6xl`}>
                    {text}
                  </h1>
                ) : (
                  <p className={`${color} w-full ${smallText ? 'text-4xl' : 'text-5xl'} md:text-6xl`}>
                    {text}
                  </p>
                )}

                {/* CTAs — only on first slide */}
                {isFirst && (
                  <div className="flex flex-wrap gap-3 mt-2">
                    <Link
                      href="/proyectos"
                      className="inline-flex items-center gap-2 bg-forest-green text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-forest-green/90 transition-colors duration-200"
                    >
                      Explorar Proyectos →
                    </Link>
                    <Link
                      href="#nosotros"
                      className="inline-flex items-center gap-2 border border-white/50 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:border-white hover:bg-white/10 transition-colors duration-200"
                    >
                      Nuestra Visión
                    </Link>
                  </div>
                )}
              </div>

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
