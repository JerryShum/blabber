import { Blurb, User } from "@prisma/client";
import Image from "next/image";
import { ReactNode } from "react";
import { AspectRatio } from "../UI/aspect-ratio";
import Author from "./Author";
import Link from "next/link";
import paths from "@/paths";

interface DisplayBlurbProps {
  blurb: Blurb & {
    author: User;
  };
  scale: boolean;
}

export default function DisplayBlurb({
  blurb,
  scale,
}: DisplayBlurbProps): ReactNode {
  return (
    <div
      className={`overflow-hidden rounded-lg transition-all duration-300 sm:rounded-xl ${
        scale ? "hover:scale-105" : "hover:scale-95"
      }`}
    >
      <Link href={paths.blurbIDPage(blurb.id)}>
        <div className="relative overflow-hidden rounded-lg sm:rounded-xl">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={blurb.image}
              alt={blurb.title}
              fill
              quality={50}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="h-full w-full object-cover shadow-inner brightness-[80%]"
              priority={false}
            />
          </AspectRatio>

          <div className="absolute bottom-0 left-0 flex flex-col items-start justify-start gap-2 p-2 sm:gap-4 sm:p-4">
            <Author user={blurb.author} />
            <div className="text-md flex items-center justify-end gap-2 rounded-lg bg-black bg-opacity-70 p-1 px-2 font-josefin text-zinc-200 opacity-80 sm:gap-4 sm:rounded-xl sm:text-sm md:text-base">
              <h4>
                {new Date(blurb.createdAt).toLocaleDateString("en-US", {
                  month: "numeric",
                  day: "numeric",
                  year: "numeric",
                })}
              </h4>
              <span>|</span>
              <h4 className="drop-shadow-md">
                {blurb.estimatedRead} mins read time
              </h4>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <h2 className="text-md line-clamp-2 font-noto text-foreground sm:text-lg md:text-xl">
            {blurb.title}
          </h2>
          <h3 className="line-clamp-2 font-noto text-base text-muted-foreground sm:text-base">
            {blurb.description}
          </h3>
        </div>
      </Link>
    </div>
  );
}
