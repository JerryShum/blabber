import { AspectRatio } from "@/components/UI/aspect-ratio";
import Image from "next/image";
import talking from "/public/talking.jpg";
import TeamCard from "@/components/about/TeamCard";

export default function AboutPage() {
  return (
    <div>
      <div className="mt-10 border-b-2 border-border pb-6 font-josefin md:mt-12 md:pb-10">
        {/* Hero Section */}
        <div className="mb-6 grid grid-cols-1 gap-6 px-4 md:mb-10 md:grid-cols-2 md:gap-8 md:px-10 lg:px-40">
          <h1 className="text-4xl font-semibold md:row-span-2 md:text-5xl lg:text-6xl">
            We forge bridges between
            <span className="text-primary"> writers and readers</span>
          </h1>
          <h2 className="text-base md:col-start-2 md:row-start-2 md:self-end md:text-lg lg:text-xl">
            Blabber is an innovative article writing application that empowers
            users to share and post their articles effortlessly. Blabber
            provides a user-friendly platform for all writing levels.
          </h2>
        </div>

        {/* Hero Image */}
        <div className="px-4 md:px-0">
          <div className="relative aspect-[16/9] xl:aspect-[16/6]">
            <Image
              src={talking}
              alt="People talking in a forest"
              className="h-full w-full rounded-lg object-cover object-bottom"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-6 grid grid-cols-1 gap-6 px-4 md:mt-8 md:grid-cols-2 md:gap-8 md:px-10 lg:px-40">
        <h1 className="font-josefin text-4xl font-semibold text-primary md:row-span-2 md:text-5xl lg:text-6xl">
          Our Mission
        </h1>

        <h2 className="text-xl md:text-2xl">
          We believe that everyone has a story to tell. Our goal is to provide a
          platform where writers can easily create, publish, and share their
          articles with the world. Blabber is here to support your journey.
        </h2>

        <h3 className="text-base md:text-lg">
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

      {/* Team Section */}
      <div className="mt-8 rounded-xl bg-primary px-4 py-8 md:mt-10 md:px-10 md:py-10 lg:px-40">
        <h1 className="w-full font-josefin text-4xl font-semibold text-background md:w-2/3 md:text-5xl lg:w-1/2 lg:text-6xl">
          Meet our <br className="hidden sm:block" />
          amazing team
        </h1>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-10 md:gap-8 lg:grid-cols-3">
          <TeamCard
            name="Jerry"
            image="/jerry_pic.webp"
            role="Lead Developer"
          />
          <TeamCard name="Paul" image="/paul_pic.png" role="Marketing Lead" />
          <TeamCard name="Cass" image="/cass_pic.png" role="CFO" />
          {/* Add more team cards as needed */}
        </div>
      </div>
    </div>
  );
}
