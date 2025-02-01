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

const sampleBlurb = {
  id: 27,
  description:
    "short descriptionTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest",
  content:
    "**Use markdown for the main content of your blurb!**testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
  authorId: "cm5h1fvam0000ui4cnslmlao7",
  createdAt: new Date("2025-01-27T22:28:56.779Z"),
  image:
    "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title: "TestTestTestTestTest",
  estimatedRead: "1",
  views: 0,
  author: {
    name: "Jerry Shum",
    id: "authorId",
    image: null,
    email: "jerryshum2636@gmail.com",
    emailVerified: null,
  },
};

export default function BlurbCarousel({ blurbs }: BlurbCarouselProps) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem className="basis-1/4">
          <DisplayBlurb blurb={sampleBlurb} scale={false} />
        </CarouselItem>
        <CarouselItem className="basis-1/4">
          <DisplayBlurb blurb={sampleBlurb} scale={false} />
        </CarouselItem>
        <CarouselItem className="basis-1/4">
          <DisplayBlurb blurb={sampleBlurb} scale={false} />
        </CarouselItem>

        <CarouselItem>...</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
