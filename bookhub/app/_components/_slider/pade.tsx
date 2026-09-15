"use client"

import {Button} from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

 


type Slide = {
  image: string;
  title: string;
  description: string;
};

type SliderProps = {
  slides: Slide[];
};

export function Slider({ slides }: SliderProps) {
  return (
    <Carousel
      className="w-full"
      opts={{
        loop: true,
      }}
    
    >
      <CarouselContent>

        {slides.map((slide, index) => (
          <CarouselItem key={index} className="basis-full">

            {/* Background */}
            <div
              className="relative h-125 w-full bg-cover bg-center"
              style={{
                backgroundImage: `url("${slide.image}")`,
              }}
            >

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="relative z-10 flex h-full items-center px-10 md:px-20">

                <div className="max-w-xl text-white">

                  <p className="mb-3 text-sm uppercase tracking-[4px]">
                    Kovee Collection
                  </p>

                  <h1 className="text-4xl font-bold md:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="mt-4 text-lg text-gray-200">
                    {slide.description}
                  </p>

                </div>

              </div>

            </div>

          </CarouselItem>
        ))}

      </CarouselContent>
    </Carousel>
  )
}