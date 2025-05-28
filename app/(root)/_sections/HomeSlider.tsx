'use client'
import { DotButton, useDotButton } from '@/components/CarouselDots'
import useEmblaCarousel from 'embla-carousel-react'
import { getImageProps } from 'next/image'
import { useCallback } from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import { HOME_SLIDER } from '@/app/constants'

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
  /* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" /> */
  return (
    <div className="embla" ref={emblaRef} id='home'>
      <div className="embla__container md:h-[60vh] h-[50vh] mt-[96px]">
        {HOME_SLIDER.map(({ mobile, desktop }, index) => {
          const commonProps = { fill: true, alt: `slide-${index + 1}` }
          const { srcSet: srcDesktop, } = getImageProps({ ...commonProps, src: desktop }).props
          const { srcSet: srcMobile, ...rest } = getImageProps({ ...commonProps, src: mobile }).props

          return (
            <div className="embla__slide flex-shrink-0 w-full relative" key={index}>
              {/*  <div className="absolute bottom-0 w-7xl left-1/2 transform -translate-x-1/2 flex justify-between items-end p-8">
                <p className='text-white text-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'>¡Tú lo sueñas,
                  <br /> nosotros lo hacemos
                  <br /> así como lo imaginaste!</p>
                <Button className="w-fit bg-navy-blue hover:bg-navy-blue/90">Cuéntanos tu sueño</Button>
              </div> */}
              <picture>
                <source
                  srcSet={srcMobile}
                  media="(max-width: 768px)"
                  type="image/jpeg"
                />
                <source
                  srcSet={srcDesktop}
                  media="(min-width: 769px)"
                  type="image/jpeg"
                />
                <img  {...rest} className='object-cover md:object-contain max-w-8xl mx-auto h-full' alt='slide-1' />
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