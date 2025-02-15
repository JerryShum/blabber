"use client";

import { Blurb } from "@prisma/client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/UI/carousel";
import DisplayBlurb from "./DisplayBlurb";

interface BlurbCarouselProps {
  blurbs: Blurb[];
}

export default function BlurbCarousel({ blurbs }: BlurbCarouselProps) {
  return (
    <Carousel
      className="w-full"
      opts={{
        align: "center",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: true,
        }),
      ]}
    >
      <CarouselContent className="-ml-1">
        {blurbs.map((blurb) => (
          <CarouselItem
            key={blurb.id}
            className="pl-2 md:basis-1/2 lg:basis-1/3"
          >
            <DisplayBlurb blurb={blurb} scale={false} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden shadow-md md:flex" />
      <CarouselNext className="hidden shadow-md md:flex" />
    </Carousel>
  );
}
