import { Blurb, User } from "@prisma/client";
import Image from "next/image";
import { ReactNode } from "react";
import { AspectRatio } from "../UI/aspect-ratio";
import Author from "./Author";
import Link from "next/link";
import paths from "@/paths";

interface HeroBlurbProps {
  blurb: Blurb;
}

const dummyUser: User = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  emailVerified: new Date(),
  image: "https://github.com/shadcn.png",
};
export default function HeroBlurb({ blurb }: HeroBlurbProps): ReactNode {
  return (
    <div className="transition-all duration-200 hover:scale-[101%] hover:brightness-[85%]">
      <Link href={paths.blurbIDPage(blurb.id)}>
        <div className="relative">
          <AspectRatio ratio={16 / 6}>
            <Image
              src={blurb.image}
              alt="Article Head Image"
              fill
              className="h-full w-full rounded-xl object-cover shadow-inner brightness-95"
              quality={100}
            />
          </AspectRatio>

          {/*Information within the Image */}
          <div className="absolute bottom-0 flex w-full items-center justify-between p-4">
            <div className="w-1/3 rounded-xl bg-black bg-opacity-70 p-2">
              <h2 className="font-josefin text-2xl text-white">
                {blurb.title}
              </h2>
              <h3 className="font-josefin text-zinc-200 opacity-80">
                {blurb.description}
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <Author user={dummyUser} />
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
      </Link>
    </div>
  );
}
