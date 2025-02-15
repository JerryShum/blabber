import { Blurb, User } from "@prisma/client";
import Image from "next/image";
import { ReactNode } from "react";
import { AspectRatio } from "../UI/aspect-ratio";
import Author from "./Author";
import Link from "next/link";
import paths from "@/paths";

interface HeroBlurbProps {
  blurb: Blurb & {
    author: User;
  };
}

export default function HeroBlurb({ blurb }: HeroBlurbProps): ReactNode {
  return (
    <div className="transition-all duration-200 hover:scale-[101%] hover:brightness-[85%]">
      <Link href={paths.blurbIDPage(blurb.id)}>
        <div>
          {/* Image Container */}
          <div className="relative">
            <div className="aspect-[16/10] lg:aspect-[16/6]">
              <Image
                src={blurb.image}
                alt="Article Head Image"
                fill
                className="h-full w-full rounded-xl object-cover shadow-inner brightness-95"
                quality={100}
                priority
              />
            </div>

            {/* Overlay content - only visible on large screens */}
            <div className="absolute bottom-0 hidden w-full items-center justify-between p-4 lg:flex">
              <div className="w-1/3 rounded-xl bg-black bg-opacity-70 p-2">
                <h2 className="line-clamp-2 font-josefin text-2xl text-white">
                  {blurb.title}
                </h2>
                <h3 className="line-clamp-2 font-josefin text-zinc-200 opacity-80">
                  {blurb.description}
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <Author user={blurb.author} hero={true} />
                <div className="flex items-center justify-end gap-4 rounded-xl bg-black bg-opacity-70 p-2 font-josefin text-zinc-200 opacity-80">
                  <h4>
                    {new Date(blurb.createdAt).toLocaleDateString("en-US", {
                      month: "numeric",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </h4>
                  <span>|</span>
                  <h4>{blurb.estimatedRead} mins read time</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Content below image - only visible on medium and smaller screens */}
          <div className="mt-4 space-y-2 px-2 lg:hidden">
            <div className="space-y-2 border-b border-border pb-2">
              <h2 className="line-clamp-2 font-josefin text-2xl sm:text-2xl">
                {blurb.title}
              </h2>
              <h3 className="line-clamp-2 font-josefin text-lg text-muted-foreground">
                {blurb.description}
              </h3>
            </div>
            <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
              <div className="text-md flex items-center gap-4 font-josefin text-muted-foreground">
                <h4>
                  {new Date(blurb.createdAt).toLocaleDateString("en-US", {
                    month: "numeric",
                    day: "numeric",
                    year: "numeric",
                  })}
                </h4>
                <span>|</span>
                <h4>{blurb.estimatedRead} mins read time</h4>
              </div>
              <Author user={blurb.author} hero={true} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
