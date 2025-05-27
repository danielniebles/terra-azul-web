'use client'
import { DotButton, useDotButton } from '@/components/CarouselDots'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback } from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import { HOME_SLIDER } from '@/app/constants'
import { Button } from '@/components/ui/button'

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
    <div className="embla" ref={emblaRef}>
      <div className="embla__container h-[800px]">
        {HOME_SLIDER.map((image, index) => (
          <div className="embla__slide flex-shrink-0 w-full relative" key={index}>
            <div className="absolute bottom-0 w-7xl left-1/2 transform -translate-x-1/2 flex justify-between items-end p-8">
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" /> */}
              <p className='text-white text-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'>¡Tú lo sueñas, <br /> nosotros lo hacemos <br /> así como lo imaginaste!</p>
              <Button className="w-fit bg-navy-blue hover:bg-navy-blue/90">Cuéntanos tu sueño</Button>
            </div>
            <Image src={image} width={1280} height={800} alt={`slide-${index}`}
              className="object-cover max-w-8xl mx-auto h-full" />
          </div>
        ))}
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