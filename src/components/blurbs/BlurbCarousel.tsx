import { Blurb } from "@prisma/client";

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
    >
      <CarouselContent>
        {blurbs.map((blurb) => (
          <CarouselItem key={blurb.id} className="basis-1/3">
            <DisplayBlurb blurb={blurb} scale={false} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="shadow-md" />
      <CarouselNext className="shadow-md" />
    </Carousel>
  );
}
