import { Blurb } from "@prisma/client";
import Image from "next/image";
import { ReactNode } from "react";
import { AspectRatio } from "../UI/aspect-ratio";
import Author from "./Author";
import Link from "next/link";
import paths from "@/paths";

interface DisplayBlurbProps {
  blurb: Blurb;
}

const dummyUser: User = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  emailVerified: new Date(),
  image: "https://github.com/shadcn.png",
};

export default function DisplayBlurb({ blurb }: DisplayBlurbProps): ReactNode {
  return (
    <div className="rounded-xl transition-all duration-300 hover:scale-105">
      <Link href={paths.blurbIDPage(blurb.id)}>
        <div className="relative overflow-hidden rounded-xl">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={blurb.image}
              alt="Blurb image"
              fill
              quality={50}
              className="h-full w-full object-cover shadow-inner brightness-[80%]"
            />
          </AspectRatio>

          <div className="absolute bottom-0 left-0 flex flex-col items-start justify-start gap-4 p-4">
            <Author user={dummyUser} />
            <div className="flex items-center justify-end gap-4 rounded-xl bg-black bg-opacity-70 p-1 px-2 font-josefin text-zinc-200 opacity-80">
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
          <h2 className="font-noto text-xl text-foreground">{blurb.title}</h2>
          <h3 className="font-noto text-muted-foreground">
            {blurb.description.length > 100
              ? `${blurb.description.substring(0, 50)}...`
              : blurb.description}
          </h3>
        </div>
      </Link>
    </div>
  );
}
