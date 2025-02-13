import { AspectRatio } from "@/components/UI/aspect-ratio";
import Image from "next/image";
import talking from "/public/talking.jpg";

export default function AboutPage() {
  return (
    <div className="">
      <div className="mt-20 border-b-2 border-border pb-10 font-josefin">
        <div className="mb-10 grid grid-cols-2 grid-rows-2 px-40">
          <h1 className="row-span-2 text-6xl font-semibold">
            We forge bridges between
            <span className="text-primary"> writers and readers</span>
          </h1>
          <h2 className="col-start-2 row-start-2 self-end text-lg">
            Blabber is an innovative article writing application that empowers
            users to share and post their articles effortlessly. Blabber
            provides a user-friendly platform for all writing levels.
          </h2>
        </div>

        <AspectRatio ratio={21 / 9} className="">
          <Image
            src={talking}
            alt="People talking in a forest"
            className="h-full w-full rounded-lg object-cover object-bottom"
            fill
            quality={100}
          />
        </AspectRatio>
      </div>

      <div className="mt-8 grid grid-cols-2 grid-rows-2 px-40">
        <h1 className="col-start-1 row-span-2 row-start-1 font-josefin text-6xl font-semibold text-primary">
          Our Mission
        </h1>

        <h2 className="text-2xl">
          We believe that everyone has a story to tell. Our goal is to provide a
          platform where writers can easily create, publish, and share their
          articles with the world. Blabber is here to support your journey.
        </h2>

        <h3>
          In a bustling café, a group of friends gathered, fueled by coffee and
          creativity, as Jerry shared his vision for Blabber—a writing
          application that would empower users to easily share their articles
          using simple Markdown formatting. Frustrated by existing platforms,
          they envisioned a user-friendly space where writers could focus on
          their words, collaborate effortlessly, and connect with a vibrant
          community. After months of hard work, Blabber was born, quickly
          attracting writers eager to express themselves without barriers,
          transforming the café into a hub of inspiration and creativity.
        </h3>
      </div>

      <div className="mt-10 rounded-lg bg-primary px-40 py-10">
        <h1 className="w-1/2 font-josefin text-6xl font-semibold text-background">
          Meet our <br />
          amazing team
        </h1>
      </div>
    </div>
  );
}
